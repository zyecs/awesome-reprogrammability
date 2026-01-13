.PHONY: serve deploy clean validate help

# Default target
help:
	@echo "Available targets:"
	@echo "  serve     - Start local development server on http://localhost:8000"
	@echo "  deploy    - Deploy website to GitHub Pages (docs/ directory)"
	@echo "  validate  - Validate content.json and check file structure"
	@echo "  clean     - Clean deployment directory"
	@echo "  help      - Show this help message"

# Start local development server
serve:
	@echo "Starting local server at http://localhost:8000"
	@echo "Press Ctrl+C to stop"
	python3 -m http.server 8000

# Deploy to GitHub Pages by copying to docs/ directory
deploy: validate
	@echo "Deploying tutorial website..."
	mkdir -p docs/css docs/js docs/data docs/images
	cp *.html docs/
	cp -r css/* docs/css/
	cp -r js/* docs/js/
	cp -r data/* docs/data/
	cp -r images/* docs/images/ 2>/dev/null || true
	@echo "Files copied to docs/ directory"
	@echo "Don't forget to commit and push the docs/ directory:"
	@echo "  git add tutorial-website/docs/"
	@echo "  git commit -m 'Deploy tutorial website'"
	@echo "  git push"

# Clean deployment directory
clean:
	@echo "Cleaning docs/ directory..."
	rm -rf docs/*
	@echo "Done"

# Validate content and file structure
validate:
	@echo "Validating tutorial website..."
	python3 validate.py
	@echo "Validation completed successfully"

# Development helpers
dev: serve

# Check if all required files exist
check:
	@echo "Checking file structure..."
	@test -f index.html || (echo "Missing index.html" && exit 1)
	@test -f program.html || (echo "Missing program.html" && exit 1)
	@test -f speakers.html || (echo "Missing speakers.html" && exit 1)
	@test -f materials.html || (echo "Missing materials.html" && exit 1)
	@test -f css/academic.css || (echo "Missing css/academic.css" && exit 1)
	@test -f js/main.js || (echo "Missing js/main.js" && exit 1)
	@test -f data/content.json || (echo "Missing data/content.json" && exit 1)
	@echo "All required files present ✓"

# Quick setup for new environment
setup:
	@echo "Setting up tutorial website environment..."
	mkdir -p docs images
	@echo "Environment setup complete"
	@echo "Run 'make validate' to check everything is working"