# Neural Network Reprogrammability Tutorial Website

A minimal, academic-style static website for the "Neural Network Reprogrammability" tutorial at AAAI 2026.

## 🚀 Quick Start

### Local Development
```bash
# Start local development server
make serve
# Visit http://localhost:8000
```

### Edit Content
All website content is stored in a single JSON file:
```bash
# Edit all text content, speaker info, session details, etc.
vim data/content.json

# Validate your changes
make validate
```

### Deploy to GitHub Pages
```bash
# Deploy to docs/ directory for GitHub Pages
make deploy

# Commit and push changes
git add tutorial-website/docs/
git commit -m "Deploy tutorial website"
git push
```

## 📁 Project Structure

```
tutorial-website/
├── index.html              # Home page
├── program.html            # Session schedule
├── speakers.html           # Presenter information
├── materials.html          # Resources and downloads
├── css/
│   └── academic.css        # Custom academic styling
├── js/
│   └── main.js            # Content loading and interactions
├── data/
│   └── content.json       # All website content (EDIT THIS)
├── docs/                  # GitHub Pages deployment (auto-generated)
├── images/                # Static assets
├── Makefile              # Build and deployment commands
├── validate.py           # Content validation script
└── README.md            # This file
```

## ✏️ Editing Content

The website uses a **single JSON file** (`data/content.json`) for all content. This makes it easy to update without touching HTML:

### Tutorial Information
```json
{
  "tutorial": {
    "title": "Your tutorial title",
    "conference": "AAAI 2026",
    "duration": "3.5 hours",
    "venue": "Conference venue",
    "contact": "email@domain.com",
    "description": "Tutorial description..."
  }
}
```

### Sessions
```json
{
  "sessions": [
    {
      "order": 1,
      "title": "Session Title",
      "presenter": "Presenter Name",
      "duration": "70 min",
      "topics": ["Topic 1", "Topic 2", "Topic 3"]
    }
  ]
}
```

### Speakers
```json
{
  "speakers": [
    {
      "name": "Speaker Name",
      "affiliation": "Institution",
      "email": "email@domain.com",
      "bio": "Speaker biography...",
      "sessions": [1, 2]
    }
  ]
}
```

### Materials and Reading
```json
{
  "materials": {
    "slides": [{"title": "Slides", "url": "link", "format": "PDF"}],
    "videos": [{"title": "Video", "url": "link", "platform": "YouTube"}],
    "code": [{"title": "Code", "url": "link", "description": "Description"}]
  },
  "reading": [
    {
      "title": "Paper Title",
      "authors": "Author Names",
      "url": "https://arxiv.org/abs/...",
      "type": "essential",
      "bibtex": "@article{...}"
    }
  ]
}
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `make serve` | Start local development server on http://localhost:8000 |
| `make deploy` | Deploy to GitHub Pages (copies files to docs/) |
| `make validate` | Validate content.json and check file structure |
| `make clean` | Clean deployment directory |
| `make help` | Show all available commands |

## 🎨 Design Features

- **Academic Conference Style**: Clean, professional design inspired by top ML conference tutorials
- **Bootstrap 5**: Responsive grid system and components via CDN
- **Mobile-First**: Fully responsive design that works on all devices
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Fast Loading**: Minimal dependencies, CDN-based resources
- **No Build Step**: Pure HTML/CSS/JS - works by opening files directly

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Custom academic styling with Bootstrap 5 framework
- **Vanilla JavaScript**: Dynamic content loading and interactions
- **JSON**: Centralized content management
- **Python**: Validation and build scripts

### Browser Support
- Chrome/Edge/Safari (modern versions)
- Firefox (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- **Zero build time**: No compilation or bundling required
- **Fast loading**: CDN resources, minimal custom code
- **SEO friendly**: Proper meta tags and semantic structure
- **Offline capable**: Core functionality works without internet

## 📝 Content Guidelines

### Writing Style
- Use clear, concise academic language
- Include specific technical details for credibility
- Structure content with bullet points and short paragraphs
- Provide actionable learning outcomes

### Technical Information
- Always include complete session durations
- Provide detailed contact information
- List specific prerequisites and requirements
- Include proper citations and BibTeX entries

### Updates
- Update "TBD" placeholder items as information becomes available
- Validate content after each update using `make validate`
- Test locally before deploying changes

## 🚀 Deployment

### GitHub Pages Setup
1. Enable GitHub Pages for the repository
2. Set source to "Deploy from a branch" 
3. Choose "main" branch and "/docs" folder
4. Website will be available at: `username.github.io/awesome-reprogrammability/tutorial-website/`

### Custom Domain (Optional)
To use a custom domain, add a `CNAME` file to the docs/ directory:
```bash
echo "tutorial.yourdomain.com" > docs/CNAME
```

## 🔍 Validation

The `validate.py` script performs comprehensive checks:

- ✅ **JSON Validation**: Ensures content.json is valid and complete
- ✅ **File Structure**: Verifies all required files exist
- ✅ **HTML Structure**: Checks for proper HTML5 markup
- ✅ **Link Validation**: Ensures internal navigation works
- ✅ **Accessibility**: Basic accessibility checks
- ✅ **Content Completeness**: Identifies "TBD" items

Run validation before deployment:
```bash
make validate
```

## 🤝 Contributing

### Content Updates
1. Edit `data/content.json`
2. Run `make validate` to check changes
3. Test locally with `make serve`
4. Deploy with `make deploy`

### Code Changes
1. Modify HTML/CSS/JS files as needed
2. Test all pages thoroughly
3. Run validation to ensure nothing is broken
4. Update this README if adding new features

## 📄 License

This tutorial website template is released under the MIT License. Content (tutorial materials, papers, etc.) may have different licenses - see individual materials for details.

## 📞 Support

For technical issues with the website:
- Check the validation output: `make validate`
- Review browser console for JavaScript errors
- Ensure all files are properly structured

For tutorial content questions:
- Contact: feng.liu1@unimelb.edu.au
- Project: [awesome-reprogrammability](../)

---

**Part of the [awesome-reprogrammability](../) project** • Built with ❤️ for the AI research community