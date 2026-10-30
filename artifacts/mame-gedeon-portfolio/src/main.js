import './portfolio.css';

const activities = [
  { title: 'MindLeaps Rwanda', role: 'Teacher & Tutor · Aug 2023–Present', description: 'Tutors Advanced Level Mathematics, Chemistry, and Biology, and builds students’ confidence in public speaking. During holidays, supports O-Level S1–S3 learners in core subjects and English, teaches ICT and practical internet skills, and shares study strategies to help students improve their scores.' },
  { title: 'Heart of Sympathy Initiative', role: 'Co-Founder & Partnership Lead · Dec 2025–Present', description: 'Coordinates school-material support—mathematical sets, notebooks, and pens—for students at Rubona Primary School. Builds partnerships, records meetings with school administrators and members, and connects higher-performing students with peers who need academic support. Also taught young people in Nyamirambo to play guitar.' },
  { title: 'E. Sc. Byimana Journalism & Magazine Club', role: 'President & Coach · Sept 2023–Sept 2026', description: 'Led Saturday sessions for around 27 club members, coaching public speaking, writing, and presentation. Wrote and edited school news, prepared and presented updates, and helped produce the annual magazine for students and visitors.' },
  { title: 'Byimana Center of Writing / BCW', role: 'Vice-President & Co-Founder · July 2023–Present', description: 'Plans curriculum and coordinates meetings and events. Teaches academic essay writing, effective reading, public speaking, and leadership skills that strengthen students’ communication.' },
  { title: 'Red Cross Youth Movement', role: 'School President & District Youth Representative · Sept 2023–July 2026', description: 'Provided rapid first aid during school events, sports, and public gatherings. During the Genocide against the Tutsi commemoration, offered water, handkerchiefs, and comforting support to people who were grieving.' },
  { title: 'Youth Volunteering Group / Nyamirambo', role: 'Community Volunteer · 2020–2021', description: 'Joined Umuganda community work during the COVID-19 period, promoted neighborhood cleanliness, and helped build kitchen gardens to support local nutrition.' },
  { title: 'Research & Development Club', role: 'Member · Sept 2023–June 2024', description: 'Helped coordinate general-knowledge quizzes covering topics such as sports, current affairs, and entertainment. Encouraged curiosity, research habits, and independent learning among students.' },
  { title: 'Mathematics Club', role: 'Coach & Mentor', description: 'Coached students in creative problem-solving approaches for Olympiad-style questions and supported classmates and other students who were struggling with Mathematics.' },
  { title: 'Community Education & Health', role: 'Local Volunteer & Independent Researcher', description: 'Helped organize educational opportunities for local students and took part in community health education. Also researched gaps in health-insurance coverage, bringing attention to barriers people encounter.' },
  { title: 'Music & Guitar Mentorship', role: 'Guitarist · Tenor Singer · Community Teacher', description: 'Self-taught guitar from age eleven and played with school and church choirs and live bands. Choreographed church performances, helped train new choir members in tenor technique and harmony, and shared music as a community service by teaching children guitar.' },
  { title: 'Cultural Events & Documentary Shows', role: 'Event Organizer & Performer', description: 'Helped organize school cultural events and performances, appeared in documentary presentations at various shows, and performed instrumental music in talent events.' },
  { title: 'Student & Entrepreneurship Leadership', role: 'Assistant Class Monitor · Table Leader · Club Member', description: 'Took on everyday classroom leadership as an assistant class monitor and table leader, and participated in the Entrepreneurship Club.' },
];
const projects = [
  { title: 'National Bank of Rwanda Economics Quiz Challenge', category: 'National competition', description: 'Member of the winning team that tied for 1st place nationwide.' },
  { title: 'National Live Band & Music Competitions', category: 'Music · National level', description: 'Placed 3rd nationwide as a solo guitarist. Founded and led Rythmix Band as its president, performing at school, district, and national-level events.' },
  { title: 'Academic Competitions', category: 'Mathematics & sciences', description: 'Reached Round 3 in the AIMS competition and qualified for the National Level in the Rwanda Mathematics Competition.' },
  { title: 'iDebate Interschool Competitions', category: 'Debate & public speaking', description: 'Recognized as Best Speaker for persuasive argumentation and critical thinking, judged Grade 10 and 11 school debates, and debated with fellow students in a 2025 win.' },
  { title: 'Sports & Culture Leadership', category: 'School & community', description: 'Captained the inter-school volleyball team as Libero, collaborating with more than 20 players in selection for a six-player side and mentoring newer players. Also played Basketball Point Guard and Football Striker, and led drums for the Indindamakuzu Traditional Dance Troupe.' },
];
const certificates = [
  { title: 'Achievement certificate 01', category: 'Certificate link placeholder', description: 'The CV contains an authenticated Google viewer URL for this certificate. Replace it with a stable public sharing link or upload the certificate file before linking it here.' },
  { title: 'Achievement certificate 02', category: 'Certificate link placeholder', description: 'The CV contains an authenticated Google viewer URL for this certificate. Replace it with a stable public sharing link or upload the certificate file before linking it here.' },
  { title: 'Achievement certificate 03', category: 'Certificate link placeholder', description: 'The CV contains an authenticated Google viewer URL for this certificate. Replace it with a stable public sharing link or upload the certificate file before linking it here.' },
];
const skillGroups = [
  { title: 'Data & Research', skills: [['Excel', 82], ['Survey Design', 76], ['Data Organization', 84], ['Research Analysis', 72]] },
  { title: 'Technical & Digital', skills: [['Word Processing', 86], ['HTML/CSS', 62], ['ICT Instruction', 82]] },
  { title: 'Communication & Leadership', skills: [['Public Speaking', 92], ['Facilitation', 86], ['Academic Writing', 88], ['Event Coordination', 80], ['Financial Planning', 68], ['Project Coordination & Leadership', 88], ['Entrepreneurship & Life Skills', 74]] },
  { title: 'Performing Arts & Sports', skills: [['Guitar Solo / Tenor Vocal', 84], ['Traditional Drumming', 82], ['Rwandan Culture', 80], ['Volleyball', 78], ['Basketball', 74], ['Karate', 65]] },
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
    <span class="cert-top"><span>Certificate</span><span>0${i + 1}</span></span>
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
          <a href="#home" data-testid="link-home">Home</a><a href="#about" data-testid="link-about">About</a><a href="#education" data-testid="link-education">Education</a><a href="#activities" data-testid="link-activities">Activities</a><a href="#projects" data-testid="link-projects">Projects &amp; Competitions</a><a href="#skills" data-testid="link-skills">Skills</a><a href="#certificates" data-testid="link-certificates">Certificates</a><a class="nav-contact" href="#contact" data-testid="link-contact">Contact</a>
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
            <p class="hero-copy">Scholar, Student Leader &amp; Youth Advocate. A 2025/2026 Grade 12 graduate of Ecole des Sciences Byimana, where I studied Mathematics, Chemistry, and Biology. My work brings together community impact, STEM education, debate, and music.</p>
            <div class="hero-ctas"><a class="button button-primary" href="#about">Explore my story <span aria-hidden="true">↓</span></a><a class="button button-secondary" href="mailto:m.gedeon4@isomo.rw">Write to me <span aria-hidden="true">↗</span></a></div>
            <div class="hero-note"><span class="note-line"></span><span>Learning with purpose. Leading with care.</span></div>
          </div>
          <div class="portrait-stage reveal delay-1" aria-label="Portrait placeholder with Mame Gedeon's initials">
            <div class="portrait-card"><div class="portrait-monogram" aria-hidden="true">MG</div><div class="portrait-label"><span>Scholar · Tutor · Advocate</span><span>Mame Gedeon</span></div></div>
            <div class="float-card"><strong>2025/2026</strong><span>MCB · GRADE 12</span></div>
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
              <p>I grew up in Kamabuye, where long walks to school and the well shaped the rhythm of each day. At fourteen, I lost my father, a teacher who believed education was something no one could take away. His faith in learning became a reason to keep moving forward.</p>
              <p>In Grade 8, MindLeaps helped cover my school fees through Grade 12 and opened new doors through ballet and contemporary dance, IT, English, and Chemistry support. Today, I teach there myself—helping younger learners build confidence, strengthen their studies, and discover what they can do.</p>
              <p>I taught myself guitar at eleven, practicing until music became a way to support choirs, perform with bands, and teach younger children. My story connects curiosity with service: I want to keep learning, share what I learn, and help others find their own path.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section education" id="education" aria-labelledby="education-title">
        <div class="section-inner">
          <div class="section-top">
            <div><div class="section-kicker">02 / Education &amp; results</div><h2 class="section-heading" id="education-title">Learning that<br><em>keeps opening doors.</em></h2><p class="section-intro">A completed Advanced Level journey in Mathematics, Chemistry, and Biology, with results confirmed in Rwanda’s 2025/2026 national examinations.</p></div>
            <span class="section-count">GRADE 12 · MCB</span>
          </div>
          <div class="education-layout">
            <article class="education-card" data-testid="card-education">
              <div class="education-card-kicker">Advanced Level · 2025/2026</div>
              <h3>Ecole des Sciences Byimana</h3>
              <p class="education-combination">Mathematics · Chemistry · Biology</p>
              <div class="education-facts"><span>Grade 12</span><span>Ruhango, Rwanda</span><span>Graduated July 2026</span></div>
              <div class="education-stamp"><span>National examinations</span><strong>PASS</strong></div>
            </article>
            <article class="results-card" aria-labelledby="results-title" data-testid="card-exam-results">
              <div class="results-header"><div><span class="education-card-kicker">Official results</span><h3 id="results-title">2025/2026 Rwanda National Examinations</h3></div><span class="results-date">13 SEP<br>2026</span></div>
              <div class="grade-grid">
                <div class="grade-row" data-testid="result-mathematics"><span>Mathematics</span><strong>A</strong></div>
                <div class="grade-row" data-testid="result-biology"><span>Biology</span><strong>A</strong></div>
                <div class="grade-row" data-testid="result-chemistry"><span>Chemistry</span><strong>A</strong></div>
                <div class="grade-row" data-testid="result-english"><span>English</span><strong>A</strong></div>
                <div class="grade-row" data-testid="result-entrepreneurship"><span>Entrepreneurship</span><strong>A</strong></div>
                <div class="grade-row" data-testid="result-general-studies"><span>General Studies &amp; Communication Skills</span><strong>S</strong></div>
              </div>
              <p class="results-note">Results shown as recorded on the uploaded confirmation of results.</p>
            </article>
          </div>
        </div>
      </section>
      <section class="section dark-section" id="activities" aria-labelledby="activities-title">
        <div class="section-inner">
          <div class="section-top"><div><div class="section-kicker">03 / Where I show up</div><h2 class="section-heading" id="activities-title">Work that starts<br><em>with people.</em></h2><p class="section-intro">Teaching, organizing, and making space for others to learn—these are the threads running through my community work.</p></div><span class="section-count">${String(activities.length).padStart(2, '0')} EXPERIENCES</span></div>
          <div class="activity-grid">${activityMarkup}</div>
        </div>
      </section>
      <section class="section projects" id="projects" aria-labelledby="projects-title">
        <div class="section-inner">
          <div class="section-top"><div><div class="section-kicker">04 / A few milestones</div><h2 class="section-heading" id="projects-title">Curiosity in<br><em>competition.</em></h2><p class="section-intro">Across a quiz stage, a debate floor, and a music performance, I keep learning by taking part.</p></div><span class="section-count">05 PROJECTS &amp; COMPETITIONS</span></div>
          <div class="project-list">${projectMarkup}</div>
        </div>
      </section>
      <section class="section skills" id="skills" aria-labelledby="skills-title">
        <div class="section-inner">
          <div class="section-kicker">05 / Things I bring</div><h2 class="section-heading" id="skills-title">A practical mix<br><em>of strengths.</em></h2>
          <div class="skills-layout"><p class="skills-note">From data and digital tools to communication, leadership, and the performing arts. Select a group to explore the proficiency bars.</p><div class="skill-groups">${skillMarkup}</div></div>
        </div>
      </section>
      <section class="section certificates" id="certificates" aria-labelledby="certificates-title">
        <div class="section-inner">
          <div class="section-top"><div><div class="section-kicker">06 / Portfolio attachments</div><h2 class="section-heading" id="certificates-title">Certificates &amp;<br><em>recognition.</em></h2><p class="section-intro">A place for achievement certificates and portfolio documents.</p></div><span class="section-count">DOCUMENTS</span></div>
          <div class="certificate-grid">${certificateMarkup}</div>
        </div>
      </section>
      <section class="section contact" id="contact" aria-labelledby="contact-title">
        <div class="section-inner">
          <div class="section-kicker">07 / Get in touch</div><h2 class="section-heading" id="contact-title">Let's make something<br><em>meaningful happen.</em></h2><p class="section-intro">For conversations about learning, youth initiatives, debate, or music, reach out directly.</p>
          <div class="contact-links">
            <a class="contact-link" href="mailto:m.gedeon4@isomo.rw" data-testid="link-email"><span><small>Email</small><br>m.gedeon4@isomo.rw</span><span aria-hidden="true">↗</span></a>
            <a class="contact-link" href="tel:+250794595041" data-testid="link-phone"><span><small>Phone</small><br>+250794595041</span><span aria-hidden="true">↗</span></a>
            <div class="contact-link"><span><small>Location</small><br>Ruhango / Nyamirambo, Rwanda</span><span aria-hidden="true">⌖</span></div>
          </div>
          <footer class="footer"><span>© 2026 Mame Gedeon</span><span class="footer-credit">Coded by Ayamikani Rukundo</span><a href="#home" class="footer-home">Back to top ↑</a></footer>
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
const sectionNavLinks = [...navMenu.querySelectorAll('a[href^="#"]')];
function setActiveNav(sectionId) {
  sectionNavLinks.forEach(link => {
    const active = link.hash === `#${sectionId}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
setActiveNav('home');
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  if (link.hash) setActiveNav(link.hash.slice(1));
  navMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}));
if ('IntersectionObserver' in window) {
  const navSectionObserver = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveNav(visible.target.id);
  }, { rootMargin: '-20% 0px -62% 0px', threshold: [0, .15, .35, .6] });
  sectionNavLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) navSectionObserver.observe(section);
  });
}
window.addEventListener('hashchange', () => setActiveNav(location.hash.slice(1) || 'home'));
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
