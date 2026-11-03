# IIT Patna - Department of Computer Science & Engineering Portal

A responsive, multi-page institutional web portal for the Department of Computer Science and Engineering at the Indian Institute of Technology Patna (IIT Patna), developed as a 2nd-semester capstone project by BS students (Team 27).

---

## 1. Project Overview

The IIT Patna CSE Department Portal is a centralized web platform engineered to deliver comprehensive departmental information for prospective students, current undergraduates, postgraduate scholars, faculty, researchers, and campus visitors. The portal presents academic curricula, faculty profiles, research groups, laboratory facilities, class schedules, and institutional events through a cohesive, accessible university interface.

The project is structured according to production web standards, utilizing semantic HTML5, modular CSS3, and lightweight native JavaScript, optimized for static deployment on GitHub Pages.

---

## 2. Project Objectives

- **Centralized Academic Hub:** Provide unified access to curriculum structures, course syllabi, and departmental announcements.
- **Accurate Faculty & Research Showcase:** Present faculty credentials, research interests, laboratory facilities, and recent peer-reviewed publications.
- **Student & Internal Utility:** Offer students immediate access to academic timetables, exam rules, placement resources, and institute service links (ERP, Webmail, Central Library).
- **Responsive & Accessible Design:** Ensure usability and visual clarity across desktops, laptops, tablets, and mobile smartphones.
- **Industry-Standard Architecture:** Maintain a clean, maintainable, and scalable directory structure suitable for collaborative open-source maintenance.

---

## 3. Technologies Used

- **Markup:** HTML5 (Semantic elements, ARIA attributes, structured metadata)
- **Styling:** CSS3 (Flexbox, CSS Grid, custom properties, responsive media queries, keyframe animations)
- **Scripting:** Vanilla JavaScript (ES6+, DOM manipulation, native `IntersectionObserver` for scroll reveals, timer-driven banner carousel)
- **Version Control & Hosting:** Git, GitHub, and GitHub Pages

---

## 4. Repository Directory Structure

```text
capstone-project-team-27/
│
├── index.html                           # Root entry point for GitHub Pages hosting
│
├── pages/                               # Departmental subpages
│   ├── about.html                       # History, mission, vision, emblem significance
│   ├── academic.html                    # B.Tech, M.Tech, Ph.D. curriculum & engineering programs
│   ├── people.html                      # Faculty directory, batch advisors, staff, student bodies
│   ├── research.html                    # Research areas, specialized labs, journal publications
│   ├── internal.html                    # Class timetables, career cell, ERP/library quick links
│   ├── past-events.html                 # Retrospective archive of symposiums & fests
│   └── upcoming-events.html             # Scheduled conferences, hackathons, sports tournaments
│
├── assets/                              # Static project resources
│   ├── css/
│   │   ├── style.css                    # Global design system, layout, mega-menu, transitions
│   │   └── events.css                   # Event card layouts, date badges, timeline styling
│   │
│   ├── js/
│   │   └── slider.js                    # Banner carousel & scroll-reveal IntersectionObserver
│   │
│   ├── images/                          # Organized image assets
│   │   ├── logo/                        # Official emblems & partner badges
│   │   ├── faculty/                     # Faculty portraits & advisor headshots
│   │   ├── institute/                   # Campus architecture, senate hall, main gate, aerial views
│   │   ├── events/                      # Symposiums, hackathons, sports banners, event badges
│   │   ├── research/                    # Compute clusters, IoT hardware, laboratory workspaces
│   │   ├── academic/                    # Degree program icons, lecture halls, central library wings
│   │   └── general/                     # General UI icons and utility graphics
│   │
│   └── documents/                       # Academic syllabus PDFs, timetables, and documents
│       └── .gitkeep
│
├── .gitignore                           # Git ignore rules for OS, IDE, and temporary files
└── README.md                            # Comprehensive project documentation
```

---

## 5. Main Website Pages

| Page | Filename | Description |
|---|---|---|
| **Home** | `index.html` | Department overview, Head of Department welcome address, photo banner slider, quick statistics, announcements ticker, and academic highlights. |
| **About** | `pages/about.html` | IIT Patna's 2008 establishment, 500-acre Bihta campus transition, institutional mission & vision, emblem symbolism, and central library overview. |
| **Academics** | `pages/academic.html` | Degree curricula for B.Tech (CSE & AI), M.Tech, and Ph.D., elective tracks, credit distribution tables, and engineering department listings. |
| **People** | `pages/people.html` | Profiles of faculty members, batch faculty advisors, departmental committees (DAPC, DRC, TPC), technical staff, and student bodies. |
| **Research** | `pages/research.html` | Core research areas (AI/NLP, Cyber Security, Cloud, VLSI), specialized research labs, sponsored grants, and peer-reviewed IEEE/ACM publications. |
| **Internal** | `pages/internal.html` | Weekly lecture schedules, examination codes of conduct, training & placement preparation links, and single-click access to ERP, Moodle, and Webmail. |
| **Upcoming Events** | `pages/upcoming-events.html` | Calendar of upcoming department symposiums, Hack-IITP hackathons, Celesta tech fest, and Infinito sports tournaments. |
| **Past Events** | `pages/past-events.html` | Chronological archive of past academic conferences, orientation ceremonies, Inter-IIT Tech Meet delegations, and cultural celebrations. |

---

## 6. Asset Organization & Management

All assets are categorized under `assets/` into logical directories:
- **`assets/images/logo/`:** Primary institute seal (`primary-logo.png`), Right to Information emblem (`rti-logo.png`), and archive partner badge.
- **`assets/images/faculty/`:** High-resolution portrait photographs of CSE faculty members and technical staff with fallback SVG avatars.
- **`assets/images/institute/`:** Campus photography including the main entrance gate, senate hall, residential zones, and aerial views of the Bihta campus.
- **`assets/images/academic/`:** Academic icons for degree programs, lecture hall facilities, and central library interior views.
- **`assets/images/events/`:** Graphic banners for hackathons, sports meets, conferences, and technical workshops.
- **`assets/images/research/`:** Visual documentation of supercomputing clusters, robotics testbeds, and hardware laboratories.
- **`assets/css/` & `assets/js/`:** Production stylesheets and scripts decoupled from HTML pages for clean caching and modular maintenance.

---

## 7. Team Work Distribution

| Team Member | Project Responsibility |
|---|---|
| **Home Page, About & Academic** | Existing team assignment – member name to be confirmed |
| **Anurag** | People Section (Faculty profiles, batch advisors, departmental committees, technical staff, student life) |
| **Ashish Kumar Pandey** | Research, Internal & Events (Research areas, publications, internal resources, upcoming & past events, `events.css`) |
| **Shubham Kumar Pandey** | GitHub Repository Management, Hosting & Deployment (Architecture refactoring, asset organization, link integrity, and GitHub Pages configuration) |

---

## 8. Local Setup Instructions

No runtime environments, compilers, or package managers are required to view or test the portal.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/capstone-project-team-27/capstone-project-team-27.git
   ```
2. **Navigate to the project root:**
   ```bash
   cd capstone-project-team-27
   ```
3. **Launch the portal:**
   - Double-click `index.html` to open it in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
   - Alternatively, open the directory in Visual Studio Code and launch with the **Live Server** extension (`Go Live` button).

---

## 9. GitHub Pages Deployment Instructions

The repository is configured for static hosting via GitHub Pages:

1. Push all committed changes to the `main` branch of your GitHub repository:
   ```bash
   git add .
   git commit -m "Refactor project architecture and prepare for GitHub Pages deployment"
   git push origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages** (under "Code and automation").
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and set the folder to `/ (root)`.
5. Click **Save**.
6. After approximately 1–2 minutes, GitHub Pages will publish the portal at:
   ```text
   https://<username>.github.io/<repository-name>/
   ```

---

## 10. Maintenance Guidelines

- **Relative Paths:** Maintain clean relative paths (`assets/...` from root, and `../assets/...` or `../index.html` from `pages/`).
- **Case Sensitivity:** GitHub Pages uses case-sensitive Linux hosting environments. Always use lowercase, kebab-case naming for all new files and image assets.
- **Adding New Pages:** Place new HTML pages within `pages/` and mirror the top header, navigation mega-menu, and footer structure from existing pages.
- **Adding Assets:** Place images into their designated semantic subfolder under `assets/images/` and ensure descriptive alt tags are provided in the markup.

---

## 11. Quality Assurance Verification

- **Link Integrity:** 100% of internal navigation links, sibling page links, and hash anchors (`#id`) have been verified with zero broken references.
- **Asset Integrity:** All 74 unique media assets load with HTTP 200 resolution without broken image icons or missing scripts.
- **Responsiveness:** Navigation bar collapses cleanly on mobile viewports (< 768px), maintaining touch-friendly access to all sections.

---

## 12. Credits & Acknowledgements

- **Institution:** Indian Institute of Technology Patna (IIT Patna)
- **Academic Context:** Bachelor of Science (BS) Program, 2nd Semester Capstone Project
- **Project Team:** Team 27
- **Official References:** Academic program specifications, faculty credentials, and departmental structure modeled after official IIT Patna CSE resources.
