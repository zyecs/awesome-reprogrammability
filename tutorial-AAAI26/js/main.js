// Main JavaScript for tutorial website content loading

let contentData = null;

// Load content from JSON file
async function loadContent() {
    if (contentData) return contentData;

    try {
        const response = await fetch('data/content.json');
        contentData = await response.json();
        return contentData;
    } catch (error) {
        console.error('Error loading content:', error);
        return null;
    }
}

// Determine current page from filename
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();

    if (!filename || filename === 'index.html') return 'home';
    return filename.replace('.html', '');
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');

        if (currentPage === 'home' && href === 'index.html') {
            link.classList.add('active');
        } else if (href === `${currentPage}.html`) {
            link.classList.add('active');
        }
    });
}

// Render content based on current page
async function renderPage() {
    const data = await loadContent();
    if (!data) return;

    const currentPage = getCurrentPage();

    switch (currentPage) {
        case 'home':
            renderHome(data);
            break;
        case 'program':
            renderProgram(data);
            break;
        case 'speakers':
            renderSpeakers(data);
            break;
        case 'materials':
            renderMaterials(data);
            break;
    }

    setActiveNavLink();
}

// Render home page content
function renderHome(data) {
    const tutorial = data.tutorial;

    // Update page elements
    const elements = {
        'tutorial-title': tutorial.title,
        'tutorial-description': tutorial.description,
        'conference': tutorial.conference,
        'duration': tutorial.duration,
        'quick-date': tutorial.date,
        'quick-venue': tutorial.venue,
        'quick-contact': tutorial.contact.map(c => `<a href="${c.homepage}" target="_blank">${c.name}</a>`).join(', ')
    };

    Object.entries(elements).forEach(([id, content]) => {
        const element = document.getElementById(id);
        if (element) {
            // Handle description with line breaks
            if (id === 'tutorial-description') {
                element.innerHTML = content.replace(/\n/g, '<br>');
            } else if (id === 'quick-contact') {
                element.innerHTML = content;
            } else {
                element.textContent = content;
            }
        }
    });

    // Update links
    const officialLink = document.getElementById('official-link');
    if (officialLink) officialLink.href = tutorial.official_link;

    // Contact links are now handled in the elements mapping above

    // Render learning outcomes if element exists
    const outcomesList = document.getElementById('learning-outcomes');
    if (outcomesList && data.learning_outcomes) {
        outcomesList.innerHTML = '';
        data.learning_outcomes.forEach(outcome => {
            const li = document.createElement('li');
            li.textContent = outcome;
            outcomesList.appendChild(li);
        });
    }
}

// Render program page content
function renderProgram(data) {
    const sessionList = document.getElementById('session-list');
    const template = document.getElementById('session-template');

    if (!sessionList || !template) return;

    sessionList.innerHTML = '';

    data.sessions.forEach(session => {
        const sessionCard = template.content.cloneNode(true);

        sessionCard.querySelector('.session-title').textContent = `Session ${session.order}: ${session.title}`;
        sessionCard.querySelector('.presenter').textContent = session.presenter;
        sessionCard.querySelector('.duration').textContent = session.duration;

        const topicsList = sessionCard.querySelector('.topics-list');

        // Add the introductory paragraph (first topic)
        if (session.topics.length > 0) {
            const p = document.createElement('p');
            p.innerHTML = session.topics[0];
            p.className = 'mb-3 fs-6 fw-medium text-dark';
            topicsList.appendChild(p);
        }

        // Add remaining topics as bullet points
        if (session.topics.length > 1) {
            const ul = document.createElement('ul');
            ul.className = 'mb-0';

            session.topics.slice(1).forEach(topic => {
                const li = document.createElement('li');
                li.innerHTML = topic;
                ul.appendChild(li);
            });

            topicsList.appendChild(ul);
        }

        // Update Materials button to link to session slides
        const materialsLink = sessionCard.querySelector('.materials-link');
        if (materialsLink && session.slides) {
            materialsLink.href = session.slides;
        }

        sessionList.appendChild(sessionCard);
    });
}

// Render speakers page content
function renderSpeakers(data) {
    const speakersGrid = document.getElementById('speakers-grid');
    const template = document.getElementById('speaker-template');

    if (!speakersGrid || !template) return;

    speakersGrid.innerHTML = '';

    data.speakers.forEach(speaker => {
        const speakerCard = template.content.cloneNode(true);

        speakerCard.querySelector('.speaker-name').textContent = speaker.name;
        speakerCard.querySelector('.speaker-affiliation').textContent = speaker.affiliation;
        speakerCard.querySelector('.speaker-bio').textContent = speaker.bio;

        const emailLink = speakerCard.querySelector('.speaker-email');
        emailLink.href = `mailto:${speaker.email}`;

        speakersGrid.appendChild(speakerCard);
    });
}

// Render materials page content
function renderMaterials(data) {
    renderMaterialSection('slides', data.materials.slides);
    renderMaterialSection('videos', data.materials.videos);
    renderMaterialSection('code', data.materials.code);
    renderReadingList(data.reading);
}

// Render a specific material section
function renderMaterialSection(type, materials) {
    const list = document.getElementById(`${type}-list`);
    const template = document.getElementById('material-template');

    if (!list || !template) return;

    list.innerHTML = '';

    materials.forEach(material => {
        const item = template.content.cloneNode(true);

        const link = item.querySelector('.list-group-item');
        link.href = material.url || '#';

        item.querySelector('.material-title').textContent = material.title;

        const formatBadge = item.querySelector('.material-format');
        formatBadge.textContent = material.format || material.platform || 'Link';

        // Apply bright cyan color for slides (more visible)
        if (type === 'slides') {
            formatBadge.classList.remove('bg-secondary');
            formatBadge.classList.add('bg-info');
        }

        const description = item.querySelector('.material-description');
        if (description && material.description) {
            description.textContent = material.description;
        } else if (description) {
            description.style.display = 'none';
        }

        list.appendChild(item);
    });
}

// Render reading list
function renderReadingList(readings) {
    const list = document.getElementById('reading-list');
    const template = document.getElementById('reading-template');

    if (!list || !template) return;

    list.innerHTML = '';

    readings.forEach(paper => {
        const item = template.content.cloneNode(true);

        const titleLink = item.querySelector('.reading-title');
        titleLink.textContent = paper.title;
        if (paper.url) {
            const link = document.createElement('a');
            link.href = paper.url;
            link.textContent = paper.title;
            link.target = '_blank';
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';
            titleLink.innerHTML = '';
            titleLink.appendChild(link);
        }

        item.querySelector('.reading-authors').textContent = paper.authors;

        // Set description
        const description = item.querySelector('.reading-description');
        if (description && paper.description) {
            description.textContent = paper.description;
        }

        // Set type badge with color based on type
        const typeBadge = item.querySelector('.reading-type');
        if (typeBadge && paper.type) {
            typeBadge.textContent = paper.type;

            // Apply different colors based on paper type
            typeBadge.classList.remove('bg-info', 'bg-primary', 'bg-success', 'bg-warning');
            if (paper.type.toLowerCase() === 'foundational') {
                typeBadge.classList.add('bg-primary');  // Blue for foundational papers
            } else if (paper.type.toLowerCase() === 'recommended') {
                typeBadge.classList.add('bg-success');  // Green for recommended papers
            } else if (paper.type.toLowerCase() === 'survey') {
                typeBadge.classList.add('bg-warning');  // Yellow for survey papers
            } else {
                typeBadge.classList.add('bg-info');     // Light blue as default fallback
            }
        }

        // Set BibTeX content
        const bibtexTextarea = item.querySelector('.bibtex-content');
        bibtexTextarea.value = paper.bibtex;

        // Set "View Paper" link
        const viewPaperLink = item.querySelector('.reading-link');
        if (viewPaperLink && paper.url) {
            viewPaperLink.href = paper.url;
        }

        list.appendChild(item);
    });
}

// Copy BibTeX to clipboard
function copyBibtex(button) {
    // Find the textarea within the same card body
    const cardBody = button.closest('.card-body');
    const textarea = cardBody.querySelector('.bibtex-content');

    if (!textarea) {
        console.error('BibTeX textarea not found');
        return;
    }

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textarea.value).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = '✅ Copied!';
            setTimeout(() => button.innerHTML = originalText, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy BibTeX');
        });
    } else {
        // Fallback for older browsers
        textarea.select();
        document.execCommand('copy');
        const originalText = button.innerHTML;
        button.innerHTML = '✅ Copied!';
        setTimeout(() => button.innerHTML = originalText, 2000);
    }
}

// Add to calendar function
async function addToCalendar() {
    // Ensure content is loaded
    const data = await loadContent();
    if (!data || !data.tutorial) {
        console.error('Tutorial data not available');
        return;
    }

    const tutorial = data.tutorial;

    // Convert "2:00 PM, January 21, 2026" to ISO format
    // Singapore is UTC+8, so 2:00 PM SGT = 06:00 UTC
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Tutorial//Neural Network Reprogrammability//EN
BEGIN:VEVENT
UID:reprogrammability-tutorial-${Date.now()}@tutorial-website
DTSTART:20260121T060000Z
DTEND:20260121T093000Z
SUMMARY:${tutorial.title}
DESCRIPTION:${tutorial.description.replace(/\n/g, '\\n')}
LOCATION:${tutorial.venue}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'neural-reprogrammability-tutorial.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', renderPage);