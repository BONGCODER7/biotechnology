/**
 * CBSH · RPCAU — College of Basic Sciences & Humanities
 * script.js — Complete Site JavaScript
 *
 * Sections:
 *  1.  Data — Gallery, Faculty (Notes data: notes-data.js)
 *  2.  Utilities
 *  3.  Loading Overlay
 *  4.  Navbar (sticky + hamburger)
 *  5.  Active Nav on Scroll
 *  7.  Notes (semester-wise course library, search, filters, Drive resources)
 *  8.  Gallery (render, filter, lazy-load, lightbox)
 *  9.  Faculty (render, department filter)
 * 10.  Stats Counter Animation
 * 11.  Contact Form
 * 12.  Modal System
 * 13.  Back to Top
 * 14.  Scroll Reveal (IntersectionObserver)
 * 15.  Init
 */

'use strict';

/* ============================================================
   1. DATA
============================================================ */

const GALLERY = [
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/IMG_20260506_152730594.jpg', caption: 'RPCAU Main Campus, Pusa',             category: 'campus'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/f1.jpeg',  caption: 'Annual Science Symposium 2024',       category: 'events'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/l1.jpg',  caption: 'Biotechnology Research Laboratory',   category: 'labs'      },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/v1.jpeg',  caption: 'IFS unit - RPCAU',    category: 'research'  },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/c3.jpg', caption: 'CBSH Building & Gardens',             category: 'campus'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/f5.jpeg', caption: 'Foundation Day Celebrations',         category: 'festivals' },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/class.jpeg',  caption: 'Seminar — Industry Expert Lecture',   category: 'classroom' },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/l2.jpg',  caption: 'Microbiology Laboratory',             category: 'labs'      },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/v2.jpeg',  caption: 'Biodiversity visit',  category: 'research'  },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/v4.jpeg', caption: 'Pusa Campus at Sunrise',              category: 'campus'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/f2.jpeg',  caption: 'Freshers Welcome 2024',               category: 'events'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/f6.jpeg', caption: 'Holi 2026',           category: 'festivals' },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/cl2.jpg',  caption: 'Interactive Classroom Session',       category: 'classroom' },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/l5.jpeg',  caption: 'Statistical Data Analysis Lab',       category: 'labs'      },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/v3.jpeg',  caption: 'Soil Science Field Study',            category: 'research'  },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/c2.png', caption: 'Group photo',           category: 'campus'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/WhatsApp%20Image%202026-05-11%20at%208.18.08%20AM.jpeg', caption: 'yoga day',           category: 'events'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/f3.jpeg',  caption: 'Research Poster Competition',         category: 'events'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/w2.jpeg', caption: 'Group photo',           category: 'campus'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/w3.jpeg', caption: 'Group photo',           category: 'campus'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/w4.jpeg', caption: 'Group photo',           category: 'campus'    },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/f4.jpeg', caption: 'Republic Day Parade, RPCAU',          category: 'festivals' },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/l1.jpeg',  caption: 'Ph.D. Coursework Practical Session',  category: 'classroom' },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/l2.jpeg',  caption: 'PCR & Molecular Biology Lab',         category: 'labs'      },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/l3.jpeg',  caption: 'Banana Research Centre, Goraul',      category: 'research'  },
  { src: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/l4.jpeg', caption: 'RPCAU Sports Complex',                category: 'campus'    }
];

/* Real faculty from CBSH RPCAU website */
const FACULTY = [
  /* Dean */
  { name: 'Dr. Amaresh Chandra',     role: 'Dean, CBSH',                              dept: 'AB&MB',  img: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/photo/IMG_20260506_160427.jpg',   email: 'dean.fbsh@rpcau.ac.in'          },
  /* AB&MB */
  { name: 'Dr. V.K. Sharma',         role: 'Professor (Mol. Bio. & Biotech.)',         dept: 'AB&MB',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/vksharma-1.jpg',     email: 'vksharma@rpcau.ac.in'           },
  { name: 'Dr. Rajeev Kumar',        role: 'Associate Professor & Head',               dept: 'AB&MB',  img: 'data:image/jpeg;base64,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',     email: 'rajeev.k@rpcau.ac.in'           },
  { name: 'Dr. Bishun Deo Prasad',   role: 'Associate Professor',                      dept: 'AB&MB',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/BDPrasad-1.jpg',     email: 'bdprasad@rpcau.ac.in'           },
  { name: 'Dr. Kumari Anjani',       role: 'Assistant Professor',                      dept: 'AB&MB',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Kumari-Anjani-copy.jpg',     email: 'anjani@rpcau.ac.in'             },
  { name: 'Dr. Sarita Kumari',       role: 'Assistant Professor',                      dept: 'AB&MB',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr-Sarita-Kumari-1.jpg',     email: 'sarita@rpcau.ac.in'             },
  { name: 'Dr. Karma L. Bhutia',     role: 'Assistant Professor',                      dept: 'AB&MB',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/KLBhutia-e1755153578679.jpg',     email: 'klbhutia@rpcau.ac.in'           },
  { name: 'Dr. Likhindra Reang',     role: 'Assistant Professor',                      dept: 'AB&MB',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Likhindra-Reang.jpg',     email: 'likhindrareang@rpcau.ac.in'     },
  { name: 'Dr. Nitesh Kumar Sharma', role: 'Assistant Professor (Bioinformatics)',      dept: 'AB&MB',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Nitesh-Kumar-Sharma-1.jpg',     email: 'nitesh.sharma@rpcau.ac.in'      },
  { name: 'Dr. Parinita Das',        role: 'Assistant Professor (Bioinformatics)',      dept: 'AB&MB',  img: 'https://raw.githubusercontent.com/BONGCODER7/biotechnology/refs/heads/main/faculty/1758861407348.jpg',     email: 'parinitadas@rpcau.ac.in'        },
  /* Microbiology */
  { name: 'Dr. Ajeet Kumar',         role: 'Assistant Professor (Microbiology)',        dept: 'MICRO',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr-Ajeet-Kumar-1.jpg',     email: 'ajeet.sri@rpcau.ac.in'          },
  { name: 'Dr. Aman Jaiswal',        role: 'Assistant Professor (Microbiology)',        dept: 'MICRO',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Aman-Jaiswal.jpg',     email: 'aman.micro@rpcau.ac.in'         },
  { name: 'Dr. Viabhav Kumar Upadhyay','role': 'Assistant Professor (Microbiology)',    dept: 'MICRO',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Viabhav-Kumar-Upadhayay.png',     email: 'viabhav98@rpcau.ac.in'          },
  { name: 'Dr. Devashish Pathak',    role: 'Assistant Professor (Microbiology)',        dept: 'MICRO',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Devashish-Pathak.jpg',     email: 'devashishpathak104@rpcau.ac.in' },
  /* Botany & Biochemistry */
  { name: 'Dr. Shailesh Kumar',      role: 'Associate Professor & I/C (Plant Physio.)',dept: 'BOTANY', img: 'data:image/jpeg;base64,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',     email: 'shaileshk@rpcau.ac.in'          },
  { name: 'Dr. Kiran',               role: 'Assistant Professor (Biochemistry)',        dept: 'BOTANY', img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Kiran.jpg',     email: 'kiran20@rpcau.ac.in'            },
  { name: 'Dr. Teikur Majaw',        role: 'Assistant Professor (Biochemistry)',        dept: 'BOTANY', img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Teikur-Majaw.jpg',     email: 'teikur@rpcau.ac.in'             },
  { name: 'Dr. Jyotsnarani Pradhan', role: 'Assistant Professor (Plant Physiology)',   dept: 'BOTANY', img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Jyostnarani-Pradhan-1.jpg',     email: 'jyotsna.pradhan@rpcau.ac.in'    },
  { name: 'Dr. Hemlata Singh',       role: 'Assistant Professor (Biochemistry)',        dept: 'BOTANY', img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Hemlata-Singh-1.jpg',     email: 'hemlata@rpcau.ac.in'            },
  { name: 'Dr. Swapnil Thakare',     role: 'Assistant Professor (Biochemistry)',        dept: 'BOTANY', img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Swapnil-Thakare-1.jpg',     email: 'swapnilthakare97@rpcau.ac.in'   },
  { name: 'Dr. Swati B. Gaikwad',    role: 'Assistant Professor (Plant Physiology)',   dept: 'BOTANY', img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Swati-Bhimrao-A.-Gaikwad.jpg',     email: 'swati.gaikwad@rpcau.ac.in'      },
  /* Statistics */
  { name: 'Dr. Mahesh Kumar',        role: 'Associate Professor & Head (Statistics)',   dept: 'STATS',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Mahesh-Kumar-1.jpg',     email: 'mahesh.kumar@rpcau.ac.in'       },
  { name: 'Dr. Nidhi',               role: 'Associate Professor (Statistics)',          dept: 'STATS',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Nidhi-1.jpg',     email: 'nidhi.sinha@rpcau.ac.in'        },
  { name: 'Dr. R.P.K. Ray',          role: 'Assistant Professor (Physics)',             dept: 'STATS',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Ram-Prabhat-Kumar-Ray-1.jpg',     email: 'ram.ray@rpcau.ac.in'            },
  { name: 'Dr. Sudhir Paswan',       role: 'Assistant Professor (Agril. Statistics)',  dept: 'STATS',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Sudhir-Paswan-1.jpg',     email: 'sudhir.sri@rpcau.ac.in'         },
  { name: 'Dr. Moumita Baishya',     role: 'Assistant Professor (Agril. Statistics)',  dept: 'STATS',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Moumita-Baishya-1.jpg',     email: 'moumitabaishya102@rpcau.ac.in'  },
  { name: 'Er. Tushar Kumar Pandey', role: 'Assistant Professor (Comp. Applications)', dept: 'STATS',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Er.-Tushar-Pandey.png',     email: 'tushar.pandey@rpcau.ac.in'      },
  { name: 'Dr. Manjubala M',         role: 'Assistant Professor (Agril. Statistics)',  dept: 'STATS',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr.-Manjubala-1.jpg',     email: 'manjubala99@rpcau.ac.in'        },
  { name: 'Dr. Saista Tabssum',      role: 'Assistant Professor (Mathematics)',         dept: 'STATS',  img: 'https://rpcau.ac.in/wp-content/uploads/2025/08/Dr-Saista-Tabssum.jpg',     email: 'saistatabssum105@rpcau.ac.in'   }
];

/* ============================================================
   2. UTILITIES
============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function lsGet(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* quota */ }
}

/* ============================================================
   3. LOADING OVERLAY
============================================================ */
function initLoader() {
  const overlay = $('#loading-overlay');
  document.body.classList.add('locked');
  setTimeout(() => {
    overlay.classList.add('hidden');
    document.body.classList.remove('locked');
  }, 1900);
}

/* ============================================================
   4. NAVBAR
============================================================ */
function initNavbar() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const drawer    = $('#mobile-menu');
  const mLinks    = $$('.mobile-link');

  /* Sticky scroll */
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hamburger */
  function toggleMenu(force) {
    const open = (force !== undefined) ? force : !hamburger.classList.contains('open');
    hamburger.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    document.body.classList.toggle('locked', open);
    hamburger.setAttribute('aria-expanded', String(open));
  }

  hamburger.addEventListener('click', () => toggleMenu());
  mLinks.forEach(l => l.addEventListener('click', () => toggleMenu(false)));
}

/* ============================================================
   5. ACTIVE NAV ON SCROLL
============================================================ */
function initActiveNav() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { threshold: 0.3, rootMargin: '-70px 0px -40% 0px' });

  sections.forEach(s => io.observe(s));
}

/* ============================================================
   7. NOTES — semester-wise course library (data: notes-data.js)
   Everything Notes-related lives in this section.
============================================================ */
const NotesLibrary = (() => {
  const DRIVE_HOSTS = ['drive.google.com', 'docs.google.com', 'drive.usercontent.google.com'];
  const ROMAN = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII' };
  const state = { sem: 1, category: 'all', stream: 'all', avail: 'all', query: '' };
  let els = {};

  /* ── helpers ── */
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else el.setAttribute(k, v === true ? '' : v);
    }
    kids.flat().forEach(c => { if (c != null && c !== false) el.append(c.nodeType ? c : document.createTextNode(c)); });
    return el;
  }
  const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();

  function validUrl(u) {
    if (typeof u !== 'string' || !u.trim()) return null;
    try {
      const url = new URL(u.trim());
      return url.protocol === 'https:' && DRIVE_HOSTS.includes(url.hostname) ? u.trim() : null;
    } catch { return null; }
  }
  const resAvailable = r => r.available !== false && !!validUrl(r.driveUrl);

  /* availability: 'available' | 'partial' | 'soon' (derived from configured resources only) */
  function statusOf(c) {
    const total = c.resources.length;
    const ok = c.resources.filter(resAvailable).length;
    if (ok === 0) return 'soon';
    return ok < total ? 'partial' : 'available';
  }
  const STATUS_LABEL = { available: 'Notes available', partial: 'Partially available', soon: 'Notes coming soon' };

  function syllabusText(c) {
    return (c.syllabus || []).map(e => [e.title, ...(e.objectives || []), ...(e.theory || []), ...(e.practical || [])].join(' ')).join(' ');
  }

  function haystack(c) {
    const sem = ROMAN[c.semester];
    return norm([
      c.title, (c.alternatives || []).join(' '), c.note, c.phase, NOTES_CATEGORIES[c.category],
      c.electiveStream ? NOTES_STREAMS[c.electiveStream] : '',
      `semester ${c.semester} sem ${c.semester} semester ${sem} sem ${sem} year ${c.academicYear}`,
      c.code || '', syllabusText(c), c.resources.map(r => `${r.title} ${NOTES_RESOURCE_TYPES[r.type] || ''}`).join(' ')
    ].join(' '));
  }
  let INDEX = [];

  function filtered() {
    const tokens = norm(state.query).split(' ').filter(Boolean);
    return INDEX.filter(({ c, hay }) => {
      if (state.sem !== 'all' && c.semester !== state.sem) return false;
      if (state.category !== 'all' && c.category !== state.category) return false;
      if (state.stream !== 'all' && c.electiveStream !== state.stream) return false;
      if (state.avail === 'available' && statusOf(c) === 'soon') return false;
      if (state.avail === 'soon' && statusOf(c) !== 'soon') return false;
      return tokens.every(t => hay.includes(t));
    }).map(x => x.c);
  }

  /* ── rendering ── */
  function resourceItem(c, r) {
    const url = resAvailable(r) ? validUrl(r.driveUrl) : null;
    const meta = [NOTES_RESOURCE_TYPES[r.type] || NOTES_RESOURCE_TYPES.other, r.format].filter(Boolean).join(' · ');
    return h('li', { class: 'nl-res' },
      h('div', { class: 'nl-res-info' },
        h('span', { class: 'nl-res-title', text: r.title }),
        h('span', { class: 'nl-res-meta', text: meta }),
        r.description ? h('span', { class: 'nl-res-desc', text: r.description }) : null),
      url
        ? h('a', { class: 'nl-btn nl-btn--sm', href: url, target: '_blank', rel: 'noopener noreferrer',
            'aria-label': `Open ${r.title} for ${c.title} in Google Drive (opens in a new tab)` }, 'Open in Drive ↗')
        : h('span', { class: 'nl-soon-tag', text: 'Coming soon' }));
  }

  function summaryOf(c) {
    const e = c.syllabus && c.syllabus.length === 1 ? c.syllabus[0] : null;
    return e && e.objectives && e.objectives[0] ? `Aim: ${e.objectives[0]}` : '';
  }

  function courseCard(c) {
    const st = statusOf(c);
    const avail = c.resources.filter(resAvailable);
    const panelId = `nl-panel-${c.id}`;
    const badges = [h('span', { class: 'nl-badge', text: NOTES_CATEGORIES[c.category] })];
    if (c.electiveStream) badges.push(h('span', { class: 'nl-badge nl-badge--stream', text: NOTES_STREAMS[c.electiveStream] }));
    if (c.alternatives) badges.push(h('span', { class: 'nl-badge nl-badge--alt', text: 'Choose one' }));
    if (c.kind === 'nongradial') badges.push(h('span', { class: 'nl-badge nl-badge--alt', text: 'Non-gradial' }));
    if (c.phase) badges.push(h('span', { class: 'nl-badge nl-badge--alt', text: c.phase }));

    const meta = [`Semester ${ROMAN[c.semester]}`, `Year ${c.academicYear}`, `${c.kind === 'ready' || c.kind === 'internship' ? 'Credit hours' : 'Credits'}: ${c.credits}`];

    /* actions */
    let actions;
    if (st === 'soon') {
      actions = c.kind === 'ready' ? h('p', { class: 'nl-soon', text: 'Programme information — no notes configured.' }) : null;
    } else if (c.resources.length === 1) {
      actions = h('a', { class: 'nl-btn', href: validUrl(avail[0].driveUrl), target: '_blank', rel: 'noopener noreferrer',
        'aria-label': `Open ${avail[0].title} for ${c.title} in Google Drive (opens in a new tab)` }, 'Open notes in Drive ↗');
    } else {
      const toggle = h('button', { type: 'button', class: 'nl-btn nl-btn--ghost', 'aria-expanded': 'false', 'aria-controls': panelId },
        `View materials (${avail.length}/${c.resources.length} available)`);
      const panel = h('ul', { class: 'nl-res-list', id: panelId, hidden: true }, c.resources.map(r => resourceItem(c, r)));
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        panel.hidden = open;
      });
      actions = h('div', { class: 'nl-multi' }, toggle, panel);
    }

    return h('article', { class: `nl-card reveal nl-card--${c.kind}`, role: 'listitem' },
      h('div', { class: 'nl-badges' }, badges),
      h('h4', { class: 'nl-title', text: c.title }),
      h('p', { class: 'nl-meta', text: meta.join(' · ') }),
      c.alternatives ? h('ul', { class: 'nl-alt' }, c.alternatives.map(a => h('li', { text: a }))) : null,
      c.activities ? h('ul', { class: 'nl-alt' }, c.activities.map(a => h('li', { text: a }))) : null,
      c.note ? h('p', { class: 'nl-note', text: c.note }) : null,
      summaryOf(c) ? h('p', { class: 'nl-summary', text: summaryOf(c) }) : null,
      syllabusBlock(c),
      h('span', { class: `nl-status nl-status--${st}`, text: STATUS_LABEL[st] }),
      actions);
  }

  function syllabusBlock(c) {
    const part = (label, body) => body ? h('div', { class: 'nl-syl-part' }, h('h5', { text: label }), body) : null;
    const ul = a => a && a.length ? h('ul', {}, a.map(x => h('li', { text: x }))) : null;
    const ps = a => a && a.length ? h('div', {}, a.map(x => h('p', { text: x }))) : null;
    const ol = a => a && a.length ? h('ol', {}, a.map(x => h('li', { text: x }))) : null;
    let body;
    if (c.syllabus) {
      body = c.syllabus.map(e => h('div', { class: 'nl-syl-entry' },
        e.title ? h('h5', { class: 'nl-syl-entry-title', text: e.title }) : null,
        part('Objectives', ul(e.objectives)), part('Theory', ps(e.theory)),
        part('Practical', ps(e.practical)), part('Suggested readings', ol(e.readings))));
    } else if (c.info) {
      body = [h('div', { class: 'nl-syl-entry' }, ps(c.info))];
    } else return null;
    return h('details', { class: 'nl-syl' },
      h('summary', { text: c.syllabus ? 'View official syllabus' : 'Programme details' }),
      h('div', { class: 'nl-syl-body' }, body,
        h('p', { class: 'nl-syl-src', text: 'Source: ICAR Sixth Deans’ Committee Report, B.Tech. (Biotechnology).' })));
  }

  function groupsFor(list) {
    const groups = [];
    const push = (key, title, sub, items) => { if (items.length) groups.push({ key, title, sub, items }); };
    if (state.sem === 'all') {
      NOTES_SEMESTERS.forEach(s => push(`s${s.n}`, `Semester ${s.roman}`, `Year ${s.year} · ${s.label}`, list.filter(c => c.semester === s.n)));
    } else if (state.sem === 7) {
      Object.keys(NOTES_STREAMS).forEach(k => push(k, NOTES_STREAMS[k], 'Semester VII elective stream — students choose one stream.', list.filter(c => c.electiveStream === k)));
    } else {
      push('courses', 'Courses', null, list.filter(c => ['graded', 'sec'].includes(c.kind)));
      push('activities', 'Programme activities', 'Non-gradial activities, internships and Student READY are not conventional subjects.', list.filter(c => !['graded', 'sec'].includes(c.kind)));
    }
    return groups;
  }

  function render() {
    const list = filtered();
    const frag = document.createDocumentFragment();
    groupsFor(list).forEach(g => {
      const grid = h('div', { class: 'notes-grid nl-grid', role: 'list', 'aria-label': g.title }, g.items.map(courseCard));
      frag.append(h('section', { class: 'nl-group' },
        state.sem === 'all' || state.sem === 7 || g.key === 'activities' ? h('div', { class: 'nl-group-head' },
          h('h3', { class: 'nl-group-title', text: g.title }), g.sub ? h('p', { class: 'nl-group-sub', text: g.sub }) : null) : null,
        grid));
    });
    els.out.replaceChildren(frag);
    els.empty.hidden = list.length > 0;
    els.count.textContent = `${list.length} ${list.length === 1 ? 'course' : 'courses'} shown`;

    /* semester context + active states */
    const s = NOTES_SEMESTERS.find(x => x.n === state.sem);
    els.context.textContent = s ? `Semester ${s.roman} · Year ${s.year} · ${s.label} · Credit hours: ${s.credits}` : 'All eight semesters · B.Tech. (Biotechnology)';
    els.semBtns.forEach(b => b.setAttribute('aria-selected', String(String(state.sem) === b.dataset.sem)));
    els.streamWrap.hidden = !(state.sem === 7 || state.sem === 'all');
    els.clear.hidden = !(state.category !== 'all' || state.stream !== 'all' || state.avail !== 'all' || state.query.trim());
    if (typeof triggerReveal === 'function') triggerReveal();
  }

  function clearFilters() {
    Object.assign(state, { category: 'all', stream: 'all', avail: 'all', query: '' });
    els.search.value = els.category.value = els.stream.value = els.avail.value = '';
    els.category.value = els.stream.value = els.avail.value = 'all';
    render();
  }

  function setSem(v) {
    state.sem = v === 'all' ? 'all' : Number(v);
    if (!(state.sem === 7 || state.sem === 'all')) { state.stream = 'all'; els.stream.value = 'all'; }
    render();
  }

  function init() {
    const root = $('#notes-library');
    if (!root) return;
    if (typeof NOTES_COURSES === 'undefined') {            /* notes-data.js missing — never block the rest of the site */
      root.replaceChildren(h('p', { class: 'nl-count', text: 'Notes library is temporarily unavailable. Please try again later.' }));
      console.warn('notes-data.js not loaded — upload it next to index.html.');
      return;
    }
    INDEX = NOTES_COURSES.map(c => ({ c, hay: haystack(c) }));
    els = {
      out: $('#notes-grid'), empty: $('#notes-empty'), count: $('#notes-count'), context: $('#notes-context'),
      search: $('#notes-search'), category: $('#notes-category'), stream: $('#notes-stream'),
      streamWrap: $('#notes-stream-wrap'), avail: $('#notes-avail'), clear: $('#notes-clear'),
      nav: $('#notes-sem-nav')
    };

    /* semester navigator (built from data) */
    [1, 2, 3, 4].forEach(y => {
      const grp = h('div', { class: 'nl-year', role: 'group', 'aria-label': `Year ${y}` },
        h('span', { class: 'nl-year-label', text: `Year ${y}` }),
        h('div', { class: 'nl-year-btns' }, NOTES_SEMESTERS.filter(s => s.year === y).map(s =>
          h('button', { type: 'button', class: 'nl-sem-btn', role: 'tab', 'data-sem': s.n, 'aria-selected': 'false' },
            h('span', { class: 'nl-sem-num', text: `Semester ${s.roman}` }),
            h('span', { class: 'nl-sem-label', text: s.label })))));
      els.nav.append(grp);
    });
    els.semBtns = $$('.nl-sem-btn', els.nav);
    els.semBtns.forEach(b => b.addEventListener('click', () => setSem(b.dataset.sem)));
    $('#notes-sem-all').addEventListener('click', () => setSem('all'));

    /* filter option lists */
    Object.entries(NOTES_CATEGORIES).forEach(([k, v]) => els.category.append(h('option', { value: k, text: v })));
    Object.entries(NOTES_STREAMS).forEach(([k, v]) => els.stream.append(h('option', { value: k, text: v })));

    els.search.addEventListener('input', () => { state.query = els.search.value; render(); });
    els.category.addEventListener('change', () => { state.category = els.category.value; render(); });
    els.stream.addEventListener('change', () => { state.stream = els.stream.value; render(); });
    els.avail.addEventListener('change', () => { state.avail = els.avail.value; render(); });
    els.clear.addEventListener('click', clearFilters);
    $('#notes-empty-clear').addEventListener('click', clearFilters);

    render();
  }
  return { init };
})();

function initNotes() { NotesLibrary.init(); }

/* ============================================================
   8. GALLERY
============================================================ */
let filteredGallery = [...GALLERY];
let lbIndex = 0;

function renderGallery(filter = 'all') {
  filteredGallery = filter === 'all' ? GALLERY : GALLERY.filter(g => g.category === filter);
  const grid = $('#gallery-grid');

  grid.innerHTML = filteredGallery.map((img, i) => `
    <div class="gallery-item lazy-loaded" data-index="${i}" data-category="${img.category}"
      role="listitem" tabindex="0" aria-label="View ${img.caption}">
      <img data-src="${img.src}" alt="${img.caption}" width="400" height="400" />
      <div class="gallery-overlay">
        <span class="gallery-caption">${img.caption}</span>
      </div>
    </div>`).join('');

  /* Lazy load via IntersectionObserver */
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const item = entry.target;
      const img  = item.querySelector('img');
      img.src    = img.dataset.src;
      img.onload = () => item.classList.add('loaded');
      item.classList.remove('lazy-loaded');
      obs.unobserve(item);
    });
  }, { rootMargin: '200px' });

  $$('.gallery-item', grid).forEach(item => {
    io.observe(item);
    item.addEventListener('click', () => openLightbox(+item.dataset.index));
    item.addEventListener('keydown', e => (e.key === 'Enter' || e.key === ' ') && openLightbox(+item.dataset.index));
  });
}

function openLightbox(index) {
  lbIndex = index;
  updateLightbox();
  const lb = $('#lightbox');
  lb.hidden = false;
  document.body.classList.add('locked');
}

function closeLightbox() {
  $('#lightbox').hidden = true;
  document.body.classList.remove('locked');
}

function updateLightbox() {
  const img = filteredGallery[lbIndex];
  if (!img) return;
  const el = $('#lightbox-img');
  el.src = img.src.replace('/400/400', '/1200/800');
  el.alt = img.caption;
  $('#lightbox-caption').textContent = `${img.caption}  (${lbIndex + 1} / ${filteredGallery.length})`;
}

function initGallery() {
  renderGallery();

  $$('[data-gallery-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('[data-gallery-filter]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      renderGallery(btn.dataset.galleryFilter);
    });
  });

  $('#lightbox-close').addEventListener('click',    closeLightbox);
  $('#lightbox-backdrop').addEventListener('click',  closeLightbox);
  $('#lightbox-prev').addEventListener('click', () => { lbIndex = (lbIndex - 1 + filteredGallery.length) % filteredGallery.length; updateLightbox(); });
  $('#lightbox-next').addEventListener('click', () => { lbIndex = (lbIndex + 1) % filteredGallery.length; updateLightbox(); });

  document.addEventListener('keydown', e => {
    if ($('#lightbox').hidden) return;
    if (e.key === 'ArrowLeft')  { lbIndex = (lbIndex - 1 + filteredGallery.length) % filteredGallery.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % filteredGallery.length; updateLightbox(); }
    if (e.key === 'Escape')     closeLightbox();
  });
}

/* ============================================================
   9. FACULTY
============================================================ */
function renderFaculty(filter = 'all') {
  const grid = $('#faculty-grid');

  grid.innerHTML = FACULTY.map(f => `
    <div class="faculty-card ${filter !== 'all' && f.dept !== filter ? 'hidden' : ''} reveal"
      data-dept="${f.dept}" role="listitem">
      <div class="faculty-img-wrap">
        <img src="${f.img}" alt="Photo of ${f.name}" loading="lazy" width="300" height="200" />
        <div class="faculty-img-overlay">
          <span class="faculty-profile-btn">View Profile</span>
        </div>
      </div>
      <div class="faculty-info">
        <h3 class="faculty-name">${f.name}</h3>
        <p class="faculty-role">${f.role}</p>
        <p class="faculty-dept">${f.dept}</p>
      </div>
    </div>`).join('');

  triggerReveal();
}

function initFaculty() {
  renderFaculty();

  $$('[data-faculty-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('[data-faculty-filter]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      const filter = btn.dataset.facultyFilter;
      $$('.faculty-card').forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.dept !== filter));
    });
  });
}

/* ============================================================
   10. STATS COUNTER
============================================================ */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const tick  = now => {
    const p   = Math.min((now - start) / duration, 1);
    const val = Math.round((1 - Math.pow(1 - p, 3)) * target);
    el.textContent = target > 999 ? val.toLocaleString() : val;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const target = parseInt(e.target.dataset.target, 10);
      if (!isNaN(target)) animateCounter(e.target, target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.5 });

  $$('.stat-num').forEach(el => {
    if (el.dataset.target) io.observe(el);
  });
}

/* ============================================================
   11. CONTACT FORM
============================================================ */
function initContactForm() {
  const form    = $('#contact-form');
  const success = $('#form-success');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    btn.textContent = '⏳ Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✅ Message Sent!';
      success.hidden = false;
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        success.hidden = true;
      }, 5000);
    }, 1500);
  });
}

/* ============================================================
   12. MODAL SYSTEM
============================================================ */
function openModal(id) {
  const modal = $(`#${id}`);
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add('locked');
  /* Focus first focusable element */
  const focusable = modal.querySelector('button, [tabindex]');
  if (focusable) setTimeout(() => focusable.focus(), 50);
}

function closeModal(id) {
  const modal = $(`#${id}`);
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('locked');
}

/* Global ESC to close modals */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
    if (!$('#lightbox').hidden) closeLightbox();
});

/* ============================================================
   13. BACK TO TOP
============================================================ */
function initBackToTop() {
  const btn = $('#back-to-top');
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   14. SCROLL REVEAL
============================================================ */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function triggerReveal() {
  $$('.reveal:not(.visible)').forEach((el, i) => {
    /* Stagger siblings */
    const peers = [...el.parentElement.querySelectorAll('.reveal:not(.visible)')];
    const idx   = peers.indexOf(el);
    el.style.transitionDelay = `${Math.min(idx * 0.07, 0.42)}s`;
    revealIO.observe(el);
  });
}

function initReveal() {
  /* Add reveal class to static elements */
  $$('.dept-card, .contact-item, .highlight-item, .stat-item, .footer-col').forEach(el => el.classList.add('reveal'));
  triggerReveal();
}

/* ============================================================
   15. DARK MODE
============================================================ */
function initDarkMode() {
  const html    = document.documentElement;
  const btnMain = document.getElementById('dark-toggle');
  const btnMob  = document.getElementById('dark-toggle-mobile');
  const DARK_KEY = 'cbsh_dark_mode';

  /* Apply saved preference immediately (before paint) */
  const saved = localStorage.getItem(DARK_KEY);
  if (saved === 'dark') html.setAttribute('data-theme', 'dark');

  function updateIcons() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    [btnMain, btnMob].forEach(btn => {
      if (!btn) return;
      btn.querySelector('.icon-sun').style.display  = isDark ? 'none'  : '';
      btn.querySelector('.icon-moon').style.display = isDark ? ''     : 'none';
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function toggle() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem(DARK_KEY, isDark ? 'light' : 'dark');
    updateIcons();
  }

  if (btnMain)  btnMain.addEventListener('click',  toggle);
  if (btnMob)   btnMob.addEventListener('click',   toggle);

  updateIcons(); /* set initial icon state */
}

/* ============================================================
   16. INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  /* Each init runs on its own so one failing section can never block the rest of the site (or the loader). */
  [initLoader, initDarkMode, initNavbar, initActiveNav, initNotes,
   initGallery, initFaculty, initCounters, initContactForm, initBackToTop, initReveal]
    .forEach(fn => { try { fn(); } catch (err) { console.error(`${fn.name} failed:`, err); } });
});
