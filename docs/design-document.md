# Design Document: Personal Homepage

## Project Description

This project is a personal homepage for Akhilan Anbu. The goal of the website is to present my background, education, resume, technical skills, projects, extracurricular activities, music interests, and creative AI-generated identity in one organized front-end website.

The website is built using vanilla HTML5, CSS3, and ES6 JavaScript modules. It is a static front-end website with no backend, no jQuery, and no component libraries.

The website includes the following pages:

- `index.html` - Main personal homepage
- `projects.html` - Projects page with an interactive JavaScript filter
- `resume.html` - Resume page
- `activities.html` - Extracurricular activities and music page
- `ai-page.html` - AI-generated creative page

The regular pages use a dark navy-blue theme to create a clean and professional look. The AI page uses a colorful light theme so that it feels visually different and creative.

The original creative component is the project filter on the Projects page. Users can click buttons such as All, AI/ML, Research, Web Dev, and Music to dynamically filter project cards.

## Target Users

The main users of this website are:

- Recruiters
- Professors
- Classmates
- Research collaborators
- Visitors interested in my technical and creative work

## User Personas

### Persona 1: Recruiter

A recruiter wants to quickly understand my education, technical skills, resume, and project experience. They are looking for a clean website that shows my background clearly without needing to search through too much information.

Needs:

- Quick overview of who I am
- Resume page
- Skills section
- Project examples
- Contact information

### Persona 2: Professor or Research Collaborator

A professor or researcher wants to understand my academic background, AI/ML interests, research projects, and publications. They are interested in my work related to LLM pruning, behavioral biometrics, web scraping, and AI systems.

Needs:

- Research project descriptions
- AI/ML background
- Resume details
- Academic experience
- Clear project organization

### Persona 3: Classmate or Peer

A classmate wants to learn more about me, my skills, my activities, and my creative interests. They may want to explore my projects or learn about my music and extracurricular involvement.

Needs:

- Easy navigation
- Personal introduction
- Activities page
- Music and performance information
- Simple and readable layout

### Persona 4: General Visitor

A general visitor may come from GitHub, LinkedIn, Instagram, or a class submission link. They want to quickly browse the website and understand my identity as a student, developer, researcher, and musician.

Needs:

- Simple homepage
- Clear navigation
- Responsive design
- Meaningful information
- Visual interest

## User Stories

### User Story 1: Recruiter

As a recruiter, I want to open the homepage and quickly understand Akhilan’s education, skills, and experience so that I can decide whether his background matches technical opportunities.

Acceptance criteria:

- Homepage includes a short introduction
- Resume page is linked in the navigation bar
- Skills are visible and easy to scan
- Projects are clearly described

### User Story 2: Professor or Research Collaborator

As a professor or research collaborator, I want to view Akhilan’s research-related projects so that I can understand his AI/ML interests and research experience.

Acceptance criteria:

- Projects page includes AI and research projects
- Project descriptions are short and meaningful
- Resume page includes experience and education
- AI page explains technical and creative identity

### User Story 3: Classmate

As a classmate, I want to explore Akhilan’s projects and activities so that I can learn more about his technical and personal interests.

Acceptance criteria:

- Navigation is simple
- Activities page includes leadership, volunteering, and music
- Projects page includes an interactive filter
- Website works on different screen sizes

### User Story 4: Visitor Interested in Projects

As a visitor, I want to filter projects by category so that I can quickly find the type of work I care about.

Acceptance criteria:

- Project filter buttons are visible
- Clicking a button updates the visible project cards
- The filter is implemented using JavaScript
- The feature works without external libraries

### User Story 5: Visitor Interested in Creativity

As a visitor, I want to see a creative AI-generated page so that I can understand the more imaginative side of the portfolio.

Acceptance criteria:

- AI page has a different visual theme
- AI page includes sections such as System Profile, AI Skill Matrix, Project Intelligence Map, Music Mode, and Future Vision
- The page is visually distinct from the regular pages

## Design Mockups

### Global Layout Mockup

All pages use the same basic navigation structure.

```text
 ------------------------------------------------------
| AkhilanAnbu        Home Projects Resume Activities AI |
 ------------------------------------------------------
|                                                    |
|                  Page Content                      |
|                                                    |
 ------------------------------------------------------
|                    Footer                          |
 ------------------------------------------------------
```

### Home Page Mockup

```text
 ------------------------------------------------------
| Navigation Bar                                      |
 ------------------------------------------------------
|        Circular Profile Image     Hero Introduction |
|                                  Name + Buttons     |
 ------------------------------------------------------
| About Me                    Quick Facts             |
 ------------------------------------------------------
| Highlights Cards                                    |
| [TA]        [GenAI Intern]        [Research]         |
 ------------------------------------------------------
| Skills Tags                                         |
| Python Java HTML CSS JavaScript LLMs GANs YOLO      |
 ------------------------------------------------------
```

Design purpose:

The homepage is designed to immediately show who I am. The profile image and name create a personal identity, while the About Me, Quick Facts, Highlights, and Skills sections provide meaningful information.

### Projects Page Mockup

```text
 ------------------------------------------------------
| My Projects                                         |
| Short description                                   |
 ------------------------------------------------------
| [All] [AI/ML] [Research] [Web Dev] [Music]          |
 ------------------------------------------------------
| Project Card     Project Card     Project Card      |
| Project Card     Project Card     Project Card      |
 ------------------------------------------------------
```

Design purpose:

The Projects page uses a grid layout and interactive filter buttons. This gives users a quick way to explore projects based on category.

### Resume Page Mockup

```text
 ------------------------------------------------------
| Resume                                              |
| Name, contact, availability                         |
 ------------------------------------------------------
| Experience Column        Education / Skills Column  |
| - ARC/RMIT              - Northeastern MS CS        |
| - TA                    - VIT B.Tech                |
| - IIT Madras            - Technical Skills          |
| - Bosch                 - Projects/Publications     |
 ------------------------------------------------------
```

Design purpose:

The Resume page is designed like a professional web resume. It uses a two-column layout to make experience, education, skills, and project highlights easy to read.

### Activities Page Mockup

```text
 ------------------------------------------------------
| Beyond Code                                         |
| Leadership • Service • Music • Community            |
 ------------------------------------------------------
| Leadership Cards                                    |
| [Brand Ambassador] [TechnoVIT] [Social Media Head]  |
 ------------------------------------------------------
| Music & Performance                                 |
| Portrait Image             Music Description        |
 ------------------------------------------------------
| MIT Performance Image      MIT Performance Details  |
 ------------------------------------------------------
| Volunteering Cards                                  |
 ------------------------------------------------------
| LinkedIn Highlight Cards                            |
 ------------------------------------------------------
```

Design purpose:

The Activities page shows my extracurricular identity. It includes leadership, volunteering, community work, music, and MIT performance details.

### AI Page Mockup

```text
 ------------------------------------------------------
| Colorful AI Hero Section                            |
| AkhilanOS: My Future Digital Workspace              |
 ------------------------------------------------------
| System Profile Cards                                |
 ------------------------------------------------------
| AI Skill Matrix                                     |
| [LLM Research] [Generative AI]                      |
| [AI Apps]      [Web Systems]                        |
 ------------------------------------------------------
| Project Intelligence Map                            |
| Multiple colorful project cards                     |
 ------------------------------------------------------
| Music Mode                                          |
 ------------------------------------------------------
| Terminal-style Future Vision                        |
 ------------------------------------------------------
```

Design purpose:

The AI page is intentionally different from the regular pages. It uses a light colorful theme, gradient effects, layered cards, and a terminal-style design to make it look more creative and futuristic.

## Visual Design Choices

### Regular Pages

The regular pages use a dark navy-blue theme. This gives the homepage, projects page, resume page, and activities page a clean and professional look.

Main design choices:

- Dark navy background
- Blue cards
- Light text for readability
- Rounded image and card corners
- Grid-based card layouts
- Flexbox navigation
- Clear spacing between sections

### AI Page

The AI page uses a light colorful design to separate it from the rest of the website.

Main design choices:

- Light warm background
- Colorful gradients
- Layered cards
- Colorful borders
- Terminal-style future vision section
- More visually complex layout

## Accessibility and Usability

The website is designed to be accessible and easy to use.

Accessibility choices:

- All visible images include `alt` text
- Navigation links are clear
- Buttons use real `<button>` elements
- Semantic HTML tags are used
- Text contrast is kept readable
- Pages are responsive for smaller screens

## Technical Design

The project uses:

- HTML5 for page structure
- CSS3 for styling
- CSS Grid for page/card layouts
- Flexbox for navigation and alignment
- ES6 JavaScript modules
- Prettier for formatting
- ESLint for code checking
- GitHub Pages for deployment

The JavaScript files are organized in the `js/` folder, CSS is organized in the `css/` folder, images are organized in the `images/` folder, and the design document is organized in the `docs/` folder.

## Final Design Summary

This design supports the goal of creating a personal homepage that is professional, meaningful, and creative. The website presents my technical background, resume, projects, activities, and AI-generated creative identity in a structured way. It also includes an original JavaScript project filter, multiple pages, organized files, responsive layouts, accessible images, and a clear AI-generated page.
