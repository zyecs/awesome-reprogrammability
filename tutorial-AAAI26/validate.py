#!/usr/bin/env python3
"""
Tutorial Website Validation Script

This script validates the tutorial website content and structure
to ensure everything is properly configured before deployment.
"""

import json
import os
import sys
from pathlib import Path
from urllib.parse import urlparse

def validate_json_content():
    """Validate the content.json file structure and data."""
    print("📄 Validating content.json...")
    
    try:
        with open('data/content.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        raise FileNotFoundError("❌ data/content.json not found")
    except json.JSONDecodeError as e:
        raise ValueError(f"❌ Invalid JSON in content.json: {e}")
    
    # Check required top-level fields
    required_fields = ['tutorial', 'sessions', 'speakers', 'materials', 'reading']
    for field in required_fields:
        if field not in data:
            raise ValueError(f"❌ Missing required field '{field}' in content.json")
    
    # Validate tutorial section
    tutorial_required = ['title', 'conference', 'duration', 'contact', 'description']
    for field in tutorial_required:
        if field not in data['tutorial']:
            raise ValueError(f"❌ Missing tutorial field '{field}'")
    
    # Validate sessions
    if not isinstance(data['sessions'], list) or len(data['sessions']) == 0:
        raise ValueError("❌ Sessions must be a non-empty list")
    
    for i, session in enumerate(data['sessions']):
        session_required = ['order', 'title', 'presenter', 'duration', 'topics']
        for field in session_required:
            if field not in session:
                raise ValueError(f"❌ Session {i+1} missing field '{field}'")
        
        if not isinstance(session['topics'], list):
            raise ValueError(f"❌ Session {i+1} topics must be a list")
    
    # Validate speakers
    if not isinstance(data['speakers'], list) or len(data['speakers']) == 0:
        raise ValueError("❌ Speakers must be a non-empty list")
    
    for i, speaker in enumerate(data['speakers']):
        speaker_required = ['name', 'affiliation', 'email', 'bio']
        for field in speaker_required:
            if field not in speaker:
                raise ValueError(f"❌ Speaker {i+1} missing field '{field}'")
        
        # Basic email validation
        email = speaker['email']
        if '@' not in email or '.' not in email.split('@')[1]:
            raise ValueError(f"❌ Speaker {i+1} has invalid email: {email}")
    
    # Validate materials
    materials_required = ['slides', 'videos', 'code']
    for field in materials_required:
        if field not in data['materials']:
            raise ValueError(f"❌ Missing materials field '{field}'")
        if not isinstance(data['materials'][field], list):
            raise ValueError(f"❌ Materials '{field}' must be a list")
    
    # Validate reading list
    if not isinstance(data['reading'], list):
        raise ValueError("❌ Reading must be a list")
    
    for i, paper in enumerate(data['reading']):
        paper_required = ['title', 'authors', 'url', 'type', 'bibtex']
        for field in paper_required:
            if field not in paper:
                raise ValueError(f"❌ Reading item {i+1} missing field '{field}'")
    
    print("✅ content.json validation passed")
    return data

def validate_file_structure():
    """Check that all required files exist."""
    print("📁 Validating file structure...")
    
    required_files = [
        'index.html',
        'program.html',
        'speakers.html', 
        'materials.html',
        'css/academic.css',
        'js/main.js',
        'data/content.json'
    ]
    
    missing_files = []
    for file_path in required_files:
        if not Path(file_path).exists():
            missing_files.append(file_path)
    
    if missing_files:
        raise FileNotFoundError(f"❌ Missing required files: {', '.join(missing_files)}")
    
    # Check directory structure
    required_dirs = ['css', 'js', 'data', 'docs', 'images']
    for dir_path in required_dirs:
        Path(dir_path).mkdir(exist_ok=True)
    
    print("✅ File structure validation passed")

def validate_html_structure():
    """Basic validation of HTML files."""
    print("🌐 Validating HTML structure...")
    
    html_files = ['index.html', 'program.html', 'speakers.html', 'materials.html']
    
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Basic HTML validation
        if '<!DOCTYPE html>' not in content:
            raise ValueError(f"❌ {html_file} missing DOCTYPE declaration")
        
        if '<html lang="en">' not in content:
            raise ValueError(f"❌ {html_file} missing proper html tag")
        
        # Check for required meta tags
        required_meta = ['charset="UTF-8"', 'viewport']
        for meta in required_meta:
            if meta not in content:
                raise ValueError(f"❌ {html_file} missing {meta} meta tag")
        
        # Check for Bootstrap and CSS links
        if 'bootstrap' not in content or 'academic.css' not in content:
            raise ValueError(f"❌ {html_file} missing required CSS links")
        
        # Check for main.js
        if 'main.js' not in content:
            raise ValueError(f"❌ {html_file} missing main.js script")
    
    print("✅ HTML structure validation passed")

def validate_links():
    """Validate internal links and structure."""
    print("🔗 Validating internal links...")
    
    # Check navigation consistency
    expected_nav_links = ['index.html', 'program.html', 'speakers.html', 'materials.html']
    
    for html_file in expected_nav_links:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check that all nav links are present
        for nav_link in expected_nav_links:
            if nav_link not in content:
                print(f"⚠️  Warning: {html_file} may be missing navigation link to {nav_link}")
    
    print("✅ Internal links validation completed")

def validate_accessibility():
    """Basic accessibility checks."""
    print("♿ Validating accessibility features...")
    
    html_files = ['index.html', 'program.html', 'speakers.html', 'materials.html']
    
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for alt attributes on images (when they exist)
        if '<img ' in content and 'alt=' not in content:
            print(f"⚠️  Warning: {html_file} has images without alt attributes")
        
        # Check for semantic HTML
        semantic_tags = ['<main', '<nav', '<header', '<footer']
        for tag in semantic_tags[:2]:  # Check main and nav as minimum
            if tag not in content:
                print(f"⚠️  Warning: {html_file} missing semantic tag {tag}")
    
    print("✅ Accessibility validation completed")

def generate_validation_report(data):
    """Generate a summary report of the validation."""
    print("\n📊 VALIDATION REPORT")
    print("=" * 50)
    print(f"Tutorial: {data['tutorial']['title']}")
    print(f"Conference: {data['tutorial']['conference']}")
    print(f"Duration: {data['tutorial']['duration']}")
    print(f"Sessions: {len(data['sessions'])}")
    print(f"Speakers: {len(data['speakers'])}")
    print(f"Reading items: {len(data['reading'])}")
    
    print(f"\nSlides: {len(data['materials']['slides'])}")
    print(f"Videos: {len(data['materials']['videos'])}")
    print(f"Code resources: {len(data['materials']['code'])}")
    
    print(f"\nContact: {data['tutorial']['contact']}")
    
    # Check for TBD items
    tbd_count = 0
    content_str = json.dumps(data)
    tbd_count = content_str.lower().count('tbd')
    
    if tbd_count > 0:
        print(f"\n⚠️  Found {tbd_count} 'TBD' items that need to be updated")
    else:
        print(f"\n✅ No 'TBD' items found - content appears complete")
    
    print("=" * 50)

def main():
    """Main validation function."""
    print("🚀 Starting tutorial website validation...\n")
    
    try:
        # Change to script directory
        script_dir = Path(__file__).parent
        os.chdir(script_dir)
        
        # Run all validation checks
        data = validate_json_content()
        validate_file_structure()
        validate_html_structure()
        validate_links()
        validate_accessibility()
        
        # Generate report
        generate_validation_report(data)
        
        print("\n🎉 All validation checks passed!")
        print("The tutorial website is ready for deployment.")
        
        return 0
        
    except Exception as e:
        print(f"\n❌ Validation failed: {e}")
        return 1

if __name__ == '__main__':
    sys.exit(main())