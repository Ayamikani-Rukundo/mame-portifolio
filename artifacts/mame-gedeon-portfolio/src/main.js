import './portfolio.css';

const activities = [
  { title: 'MindLeaps Rwanda', role: 'Teacher & Tutor · Aug 2023–Present', description: 'Teaches Advanced Level students Mathematics, Chemistry, and Biology while boosting their public speaking skills. Facilitates O-Level students in core subjects and English during holidays, and delivers ICT training to master computer literacy and internet navigation.' },
  { title: 'Heart of Sympathy Initiative', role: 'Co-Founder & Partnership Lead · Dec 2025–Present', description: 'Leads outreach to supply school materials—mathematical sets, notebooks, and pens—to vulnerable students at Rubona Primary School. Coordinates meetings with school administration, records meeting insights, and creates peer-tutoring networks pairing high performers with struggling students.' },
  { title: 'E. Sc. Byimana / Journalism & Magazine Club', role: 'President & Coach · Sept 2023–Sept 2026', description: 'Coached 27+ news presenters in public speaking and presentation. Authored, edited, and published school news and the annual magazine, keeping the community informed.' },
  { title: 'Byimana Center of Writing / BCW', role: 'Vice-President & Co-Founder · July 2023–Present', description: 'Plans curriculum, organizes meetings and events, and teaches effective academic essay writing, public speaking, and reading strategies.' },
  { title: 'Red Cross Youth Movement', role: 'President & Active Member · Sept 2023–July 2026', description: 'Coordinated rapid first aid services during school and public gatherings. Provided compassionate support, water, and care during the 1994 Genocide against the Tutsi commemoration events.' },
  { title: 'Youth Volunteering Group / Nyamirambo', role: 'Volunteer · 2020–2021', description: 'Participated in Umuganda community work, promoted hygiene, and constructed kitchen gardens to combat malnutrition diseases.' },
];
const projects = [
  { title: 'National Bank of Rwanda Economics Quiz Challenge', category: 'National competition', description: 'Member of the winning team that tied for 1st place nationwide.' },
  { title: 'National Live Band & Music Competitions', category: 'Music · National level', description: 'Placed 3rd nationwide as a Solo Guitarist; led the school band (Rythmix Band) performing at district and national level events.' },
  { title: 'Academic Competitions', category: 'Mathematics & sciences', description: 'Reached Round 3 in the AIMS competition and qualified for the National Level in the Rwanda Mathematics Competition.' },
  { title: 'iDebate Interschool Competitions', category: 'Debate & public speaking', description: 'Awarded Best Speaker for persuasive argumentation, critical thinking, and debate performance; served as a debate judge for Grade 10 and 11 competitions.' },
  { title: 'Sports & Culture Leadership', category: 'School & community', description: 'Served as Volleyball Libero in inter-school competitions, Basketball Point Guard, Football Striker, and Lead Drummer for the Indindamakuzu Traditional Dance Troupe.' },
];
const certificates = [
  { title: 'Achievement certificate', category: 'Certificate placeholder', description: 'No certificate file or link has been provided yet.' },
  { title: 'Achievement certificate', category: 'Certificate placeholder', description: 'No certificate file or link has been provided yet.' },
  { title: 'Portfolio attachment', category: 'Portfolio placeholder', description: 'No portfolio document or link has been provided yet.' },
];
const skillGroups = [
  { title: 'Data & Research', skills: [['Excel', 82], ['Survey Design', 76], ['Data Organization', 84], ['Research Analysis', 72]] },
  { title: 'Technical & Digital', skills: [['Word Processing', 86], ['HTML/CSS', 62], ['ICT Instruction', 82]] },
  { title: 'Communication & Leadership', skills: [['Public Speaking', 92], ['Facilitation', 86], ['Academic Writing', 88], ['Event Coordination', 80], ['Financial Planning', 68]] },
  { title: 'Performing Arts & Sports', skills: [['Guitar Solo / Tenor Vocal', 84], ['Traditional Drumming', 82], ['Volleyball', 78], ['Basketball', 74], ['Karate', 65]] },
];
const activityMarkup = activities.map((item, i) => `
  <button class="activity-card reveal" type="button" data-modal-group="activities" data-index="${i}" data-testid="card-activity-${i}">
    <span class="card-index">0${i + 1} / COMMUNITY</span><span class="card-arrow" aria-hidden="true">↗</span>
    <h3>${item.title}</h3><p>${item.role}</p>
  </button>`).join('');
const projectMarkup = projects.map((item, i) => `
  <button class="project-card reveal" type="button" data-modal-group="projects" data-index="${i}" data-testid="card-project-${i}">
    <span class="card-index">0${i + 1} / ${item.category.toUpperCase()}</span><span class="card-arrow" aria-hidden="true">↗</span>
    <h3>${item.title}</h3><p>${item.description}</p>
  </button>`).join('');
const certificateMarkup = certificates.map((item, i) => `
  <button class="certificate-card" type="button" data-modal-group="certificates" data-index="${i}" data-testid="card-certificate-${i}" aria-haspopup="dialog">
    <span class="cert-top"><span>${i === 2 ? 'Portfolio' : 'Certificate'}</span><span>0${i + 1}</span></span>
    <span class="cert-copy"><span class="cert-title">${item.title}</span><span class="cert-description">${item.description}</span></span>
    <span class="cert-state">PLACEHOLDER · SELECT TO PREVIEW</span>
  </button>`).join('');
const skillMarkup = skillGroups.map((group, i) => `
  <button type="button" class="skill-card reveal" aria-pressed="false" data-testid="card-skill-${i}">
    <h3>${group.title}</h3>
    ${group.skills.map(([skill, level]) => `<div class="skill-row"><div class="skill-label"><span>${skill}</span><span>${level}%</span></div><div class="skill-meter" role="meter" aria-label="${skill} proficiency" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${level}"><span style="--level:${level}%"></span></div></div>`).join('')}
    <p class="skill-hint">Select to reveal proficiency</p>
  </button>`).join('');

document.querySelector('#root').innerHTML = `
  <div class="site-shell grain">
    <header class="topbar">
      <nav class="nav-wrap" aria-label="Main navigation">
        <a class="brand" href="#home" aria-label="Mame Gedeon home"><span class="brand-mark">M</span><span>Mame Gedeon</span></a>
        <button class="menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-links" data-testid="button-mobile-menu"><span aria-hidden="true">☰</span></button>
        <div class="nav-links" id="nav-links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#activities">Activities</a><a href="#projects">Projects &amp; Competitions</a><a href="#skills">Skills</a><a href="#certificates">Certificates</a><a class="nav-contact" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
    <main>
      <section class="hero" id="home" aria-labelledby="hero-title">
        <canvas id="ambient-canvas" aria-hidden="true"></canvas>
        <div class="hero-grid">
          <div class="hero-text reveal is-visible">
            <div class="eyebrow">Ruhango / Nyamirambo, Rwanda</div>
            <h1 id="hero-title">Mame<br><em>Gedeon</em></h1>
            <p class="hero-copy">Scholar, Student Leader &amp; Youth Advocate. Student at Ecole des Sciences Byimana, graduating July 2026, Advanced Level in Mathematics, Chemistry, and Biology. Driven by a passion for community impact, STEM education, debate, and music.</p>
            <div class="hero-ctas"><a class="button button-primary" href="#about">Explore my story <span aria-hidden="true">↓</span></a><a class="button button-secondary" href="mailto:m.gedeon4@isomo.rw">Write to me <span aria-hidden="true">↗</span></a></div>
            <div class="hero-note"><span class="note-line"></span><span>Learning with purpose. Leading with care.</span></div>
          </div>
          <div class="portrait-stage reveal delay-1" aria-label="Portrait placeholder with Mame Gedeon's initials">
            <div class="portrait-card"><div class="portrait-monogram" aria-hidden="true">MG</div><div class="portrait-label"><span>Scholar · Tutor · Advocate</span><span>Mame Gedeon</span></div></div>
            <div class="float-card"><strong>2026</strong><span>GRADUATING JULY</span></div>
            <div class="hero-location">RWANDA · EAST AFRICA</div>
          </div>
        </div>
      </section>
      <section class="section about" id="about" aria-labelledby="about-title">
        <div class="section-inner">
          <div class="section-kicker">01 / A little about me</div>
          <div class="about-layout">
            <div class="about-aside reveal"><h2 class="section-heading" id="about-title">Many roles.<br><em>One purpose.</em></h2><div class="about-stamp"><span class="stamp-text">Curiosity in service of community</span></div></div>
            <div class="about-copy reveal delay-1">
              <p>My journey brings together academic achievement, volunteer teaching, and student leadership. I believe what we learn matters most when we share it—and I keep looking for ways to turn knowledge into something useful for the people around me.</p>
              <p>That belief takes shape in the classroom, where I help peers grow in STEM and communication, and in community initiatives that bring students together around learning and care. Through public speaking, writing, debate, and music, I work to make room for young voices to be heard and to encourage others to lead with confidence.</p>
              <p>At Ecole des Sciences Byimana, I am pursuing Advanced Level studies in Mathematics, Chemistry, and Biology. Outside class, I teach, organize, create, and perform—guided by the idea that service and ambition can move forward together.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section dark-section" id="activities" aria-labelledby="activities-title">
        <div class="section-inner">
          <div class="section-top"><div><div class="section-kicker">02 / Where I show up</div><h2 class="section-heading" id="activities-title">Work that starts<br><em>with people.</em></h2><p class="section-intro">Teaching, organizing, and making space for others to learn—these are the threads running through my community work.</p></div><span class="section-count">06 EXPERIENCES</span></div>
          <div class="activity-grid">${activityMarkup}</div>
        </div>
      </section>
      <section class="section projects" id="projects" aria-labelledby="projects-title">
        <div class="section-inner">
          <div class="section-top"><div><div class="section-kicker">03 / A few milestones</div><h2 class="section-heading" id="projects-title">Curiosity in<br><em>competition.</em></h2><p class="section-intro">Across a quiz stage, a debate floor, and a music performance, I keep learning by taking part.</p></div><span class="section-count">05 PROJECTS &amp; COMPETITIONS</span></div>
          <div class="project-list">${projectMarkup}</div>
        </div>
      </section>
      <section class="section skills" id="skills" aria-labelledby="skills-title">
        <div class="section-inner">
          <div class="section-kicker">04 / Things I bring</div><h2 class="section-heading" id="skills-title">A practical mix<br><em>of strengths.</em></h2>
          <div class="skills-layout"><p class="skills-note">From data and digital tools to communication, leadership, and the performing arts. Select a group to explore the proficiency bars.</p><div class="skill-groups">${skillMarkup}</div></div>
        </div>
      </section>
      <section class="section certificates" id="certificates" aria-labelledby="certificates-title">
        <div class="section-inner">
          <div class="section-top"><div><div class="section-kicker">05 / Portfolio attachments</div><h2 class="section-heading" id="certificates-title">Certificates &amp;<br><em>recognition.</em></h2><p class="section-intro">A place for achievement certificates and portfolio documents.</p></div><span class="section-count">DOCUMENTS</span></div>
          <div class="certificate-grid">${certificateMarkup}</div>
        </div>
      </section>
      <section class="section contact" id="contact" aria-labelledby="contact-title">
        <div class="section-inner">
          <div class="section-kicker">06 / Get in touch</div><h2 class="section-heading" id="contact-title">Let's make something<br><em>meaningful happen.</em></h2><p class="section-intro">For conversations about learning, youth initiatives, debate, or music, reach out directly.</p>
          <div class="contact-links">
            <a class="contact-link" href="mailto:m.gedeon4@isomo.rw" data-testid="link-email"><span><small>Email</small><br>m.gedeon4@isomo.rw</span><span aria-hidden="true">↗</span></a>
            <a class="contact-link" href="tel:+250794595041" data-testid="link-phone"><span><small>Phone</small><br>+250794595041</span><span aria-hidden="true">↗</span></a>
            <div class="contact-link"><span><small>Location</small><br>Ruhango / Nyamirambo, Rwanda</span><span aria-hidden="true">⌖</span></div>
          </div>
          <footer class="footer"><span>© 2026 Mame Gedeon</span><span class="footer-credit">Coded by Ayame Kani</span><a href="#home" class="footer-home">Back to top ↑</a></footer>
        </div>
      </section>
    </main>
    <div class="modal-backdrop" id="detail-modal" aria-hidden="true">
      <section class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" tabindex="-1">
        <button class="modal-close" type="button" aria-label="Close details" data-testid="button-modal-close">×</button>
        <p class="modal-eyebrow" id="modal-eyebrow"></p><h2 class="modal-title" id="modal-title"></h2><span class="modal-meta" id="modal-meta"></span><p class="modal-description" id="modal-description"></p>
        <div class="modal-controls"><button type="button" id="modal-prev" data-testid="button-modal-previous">← Previous</button><span class="modal-position" id="modal-position"></span><button type="button" id="modal-next" data-testid="button-modal-next">Next →</button></div>
      </section>
    </div>
  </div>`;

const modal = document.querySelector('#detail-modal');
const modalPanel = modal.querySelector('.modal-panel');
const closeButton = modal.querySelector('.modal-close');
const navMenu = document.querySelector('#nav-links');
const menuToggle = document.querySelector('.menu-toggle');
let activeGroup = '';
let activeIndex = 0;
let priorFocus = null;
const groups = { activities, projects, certificates };

function renderModal() {
  const list = groups[activeGroup];
  const item = list[activeIndex];
  document.querySelector('#modal-eyebrow').textContent = activeGroup === 'activities' ? 'Community / Activity' : activeGroup === 'projects' ? 'Projects / Competition' : 'Certificate / Preview';
  document.querySelector('#modal-title').textContent = item.title;
  document.querySelector('#modal-meta').textContent = activeGroup === 'activities' ? item.role : item.category;
  document.querySelector('#modal-description').textContent = item.description;
  document.querySelector('#modal-position').textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}`;
  document.querySelector('#modal-prev').disabled = activeIndex === 0;
  document.querySelector('#modal-next').disabled = activeIndex === list.length - 1;
}
function openModal(group, index, trigger) {
  activeGroup = group;
  activeIndex = index;
  priorFocus = trigger;
  renderModal();
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  closeButton.focus();
}
function closeModal() {
  if (!modal.classList.contains('is-open')) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (priorFocus) priorFocus.focus();
}
document.querySelectorAll('[data-modal-group]').forEach(card => card.addEventListener('click', () => openModal(card.dataset.modalGroup, Number(card.dataset.index), card)));
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.querySelector('#modal-prev').addEventListener('click', () => { if (activeIndex > 0) { activeIndex--; renderModal(); modalPanel.focus(); } });
document.querySelector('#modal-next').addEventListener('click', () => { if (activeIndex < groups[activeGroup].length - 1) { activeIndex++; renderModal(); modalPanel.focus(); } });
document.addEventListener('keydown', event => {
  if (!modal.classList.contains('is-open')) return;
  if (event.key === 'Escape') closeModal();
  if (event.key === 'ArrowLeft' && activeIndex > 0) { activeIndex--; renderModal(); }
  if (event.key === 'ArrowRight' && activeIndex < groups[activeGroup].length - 1) { activeIndex++; renderModal(); }
  if (event.key === 'Tab') {
    const focusable = [...modal.querySelectorAll('button:not(:disabled)')];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
});
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}));
document.querySelectorAll('.skill-card').forEach(card => card.addEventListener('click', () => {
  const active = card.classList.toggle('is-active');
  card.setAttribute('aria-pressed', String(active));
  card.querySelector('.skill-hint').textContent = active ? 'Proficiency revealed' : 'Select to reveal proficiency';
}));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal:not(.is-visible)');
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('is-visible'));

const canvas = document.querySelector('#ambient-canvas');
const ctx = canvas.getContext('2d');
let width = 0, height = 0, particles = [];
function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = rect.width; height = rect.height;
  canvas.width = width * ratio; canvas.height = height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(52, Math.floor(width / 24)) }, (_, i) => ({
    x: (i * 97.7) % width, y: (i * 173.2) % height,
    vx: Math.sin(i * 3.4) * .12, vy: Math.cos(i * 2.1) * .1,
    radius: i % 8 === 0 ? 2 : 1.1,
  }));
}
function drawCanvas() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = i % 9 === 0 ? 'rgba(197,111,94,.42)' : 'rgba(34,91,70,.26)'; ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const other = particles[j], dx = p.x - other.x, dy = p.y - other.y, distance = Math.hypot(dx, dy);
      if (distance < 125) {
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(50,102,78,${(1 - distance / 125) * .12})`; ctx.lineWidth = .7; ctx.stroke();
      }
    }
  });
  if (!reducedMotion) requestAnimationFrame(drawCanvas);
}
resizeCanvas();
if (reducedMotion) drawCanvas(); else requestAnimationFrame(drawCanvas);
window.addEventListener('resize', resizeCanvas, { passive: true });
