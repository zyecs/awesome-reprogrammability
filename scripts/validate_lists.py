#!/usr/bin/env python3
"""
Validation script for awesome-reprogrammability lists.
Validates YAML files against schemas and checks for duplicates and tag validity.
"""

import sys
from pathlib import Path

try:
    import jsonschema
    import yaml
except ImportError as e:
    print(f"❌ Missing required dependency: {e}")
    print("Please install: pip install PyYAML jsonschema")
    sys.exit(1)


def load_yaml_file(filepath):
    """Load and parse YAML file."""
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)
    except yaml.YAMLError as e:
        print(f"❌ YAML parsing error in {filepath}: {e}")
        return None
    except Exception as e:
        print(f"❌ Error loading {filepath}: {e}")
        return None


def load_schema(schema_path):
    """Load JSON schema from YAML file."""
    return load_yaml_file(schema_path)


def load_valid_tags():
    """Load valid tags from meta/tags.md."""
    tags_file = Path("meta/tags.md")
    if not tags_file.exists():
        print(f"❌ Tags file not found: {tags_file}")
        return set()

    valid_tags = set()
    with open(tags_file, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line.startswith("- "):
                tag = line[2:].strip()
                valid_tags.add(tag)

    return valid_tags


def validate_against_schema(data, schema, filename):
    """Validate data against JSON schema."""
    try:
        jsonschema.validate(data, schema)
        return True, []
    except jsonschema.ValidationError as e:
        return False, [f"Schema validation error in {filename}: {e.message}"]
    except Exception as e:
        return False, [f"Validation error in {filename}: {e}"]


def check_duplicates(items, key_fields):
    """Check for duplicate items based on key fields."""
    seen = {}
    duplicates = []

    for item in items:
        # Create a key from the specified fields
        key_values = []
        for field in key_fields:
            if field in item:
                key_values.append(str(item[field]))

        if key_values:
            key = tuple(key_values)
            if key in seen:
                duplicates.append(f"Duplicate found: {dict(zip(key_fields, key))}")
            else:
                seen[key] = item

    return duplicates


def validate_tags(items, valid_tags):
    """Validate that all tags are in the controlled vocabulary."""
    errors = []

    for item in items:
        if "tags" in item and isinstance(item["tags"], list):
            for tag in item["tags"]:
                if tag not in valid_tags:
                    title = item.get("title", item.get("name", "Unknown"))
                    errors.append(f"Invalid tag '{tag}' in '{title}'")

    return errors


def validate_file(filepath, schema_path, duplicate_keys):
    """Validate a single YAML file."""
    print(f"🔍 Validating {filepath}...")

    # Load data and schema
    data = load_yaml_file(filepath)
    if data is None:
        return False

    schema = load_schema(schema_path)
    if schema is None:
        print(f"❌ Could not load schema from {schema_path}")
        return False

    errors = []

    # Validate each item against schema
    if isinstance(data, list):
        items = data
    elif isinstance(data, dict) and "items" in data:
        items = data["items"]
    else:
        items = [data]

    for i, item in enumerate(items):
        _, item_errors = validate_against_schema(item, schema, f"{filepath}[{i}]")
        errors.extend(item_errors)

    # Check for duplicates
    duplicate_errors = check_duplicates(items, duplicate_keys)
    errors.extend(duplicate_errors)

    # Validate tags
    valid_tags = load_valid_tags()
    tag_errors = validate_tags(items, valid_tags)
    errors.extend(tag_errors)

    if errors:
        print(f"❌ {len(errors)} error(s) found in {filepath}:")
        for error in errors:
            print(f"   • {error}")
        return False
    else:
        print(f"✅ {filepath} is valid ({len(items)} items)")
        return True


def main():
    """Main validation function."""
    print("🚀 Starting validation of awesome-reprogrammability lists...")

    # Define validation rules for each file type
    validations = [
        {
            "pattern": "lists/papers.yaml",
            "schema": "meta/schema.paper.yaml",
            "duplicate_keys": ["title", "year"],
        },
        {
            "pattern": "lists/datasets.yaml",
            "schema": "meta/schema.dataset.yaml",
            "duplicate_keys": ["name"],
        },
        {
            "pattern": "lists/benchmarks.yaml",
            "schema": "meta/schema.benchmark.yaml",
            "duplicate_keys": ["name"],
        },
    ]

    all_valid = True
    files_checked = 0

    for validation in validations:
        filepath = Path(validation["pattern"])
        if filepath.exists():
            files_checked += 1
            valid = validate_file(
                filepath, validation["schema"], validation["duplicate_keys"]
            )
            all_valid = all_valid and valid
        else:
            print(f"⚠️  File not found: {filepath} (skipping)")

    print("\n📊 Validation Summary:")
    print(f"   Files checked: {files_checked}")

    if all_valid and files_checked > 0:
        print("✅ All validations passed!")
        sys.exit(0)
    elif files_checked == 0:
        print("⚠️  No files found to validate")
        sys.exit(0)
    else:
        print("❌ Some validations failed!")
        sys.exit(1)


if __name__ == "__main__":
    main()
