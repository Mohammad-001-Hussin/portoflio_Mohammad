

// Programmeertalen
const langs = [
  { name: "HTML", tag: "<html/>" },
  { name: "JavaScript", tag: "const js = () =>" },
  { name: "PHP", tag: "<?php echo ?>" },
  { name: "SQL", tag: "SELECT * FROM" },
  { name: "Laravel", tag: "Route::get('/')" },
];

// Tekst die in de ticker (lopende balk) langskomt
const tickerItems = ["HTML", "JAVASCRIPT", "PHP", "SQL", "LEARNING IN PROGRESS", "SYSTEM ONLINE"];

// Eigenschappen en talen
const traits = ["Communicatief", "Gemotiveerd", "Flexibel", "Doorzettingsvermogen", "Samenwerken"];
const talen = ["Arabisch (Vloeiend)", "Engels", "Nederlands"];

// Werkervaring (met opsomming)
const werkBullets = [
  "Hardwarematige reparaties uitgevoerd aan smartphones, laptops en diverse consumentenelektronica",
  "Nauwkeurig demonteren en assembleren van verschillende soorten apparaten en hardwarecomponenten",
  "Vervangen van defecte onderdelen en het uitgebreid testen van de volledige functionaliteit na elke reparatie",
  "Oplossen van technische storingen door te werken met fijne elektronica en specialistisch gereedschap",
];
const werk = [
  { date: "Sep 2023 – Feb 2024", title: "IT Systems and Devices Specialist", place: "FixPhones, Zuidhorn", bullets: werkBullets },
];

// Onderwijs (tijdlijn)
const onderwijs = [
  { date: "2025 – Heden", title: "Software Developer | MBO 4", place: "Alfa-college | Boumaboulevard 573, 9723 ZS Groningen" },
  { date: "2023 – 2025", title: "Allround Medewerker IT-Systems and Devices | MBO 3", place: "Alfa-college | Boumaboulevard 573, 9723 ZS Groningen" },
  { date: "2020 – 2021", title: "Schakelklas | MBO/HAVO", place: "Alfa-college | Admiraal de Ruyterlaan 2, 9726 GR Groningen" },
  { date: "2018 – 2020", title: "ISK – Internationale Schakelklas", place: "Mellisseweg 2, 9731 BX Groningen" },
];

// Projecten
const projecten = [
  { id: "0x01", title: "Responsieve Portfolio Website", desc: "Portfolio website in HTML, CSS en JavaScript.", tags: ["HTML", "CSS", "JavaScript"] },
  { id: "0x02", title: "Interactieve Webgame", desc: "Een interactieve webgame gebouwd met HTML, CSS en JavaScript.", tags: ["HTML", "CSS", "JavaScript"] },
  { id: "0x03", title: "Functionele Webshop", desc: "Een functionele webshop met PHP en SQL voor de backend en databasebeheer.", tags: ["PHP", "SQL"] },
  { id: "0x04", title: "Cybersecurity", desc: "Basisprincipes van cybersecurity om webapplicaties veiliger te maken.", tags: ["Security"] },
];

// Hobby's
const hobbys = ["Fitnessen", "Zwemmen"];

// Contact
const contact = [
  { label: "// telefoon", value: "+31 06 24728903", href: "tel:+31624728903" },
  { label: "// e-mail", value: "givarahussin99@gmail.com", href: "mailto:givarahussin99@gmail.com" },
  { label: "// locatie", value: "Borgweg 22, 9804 RR Noordhorn", href: "https://maps.google.com/?q=Borgweg+22+9804+RR+Noordhorn" },
];


//  Kleine helper om snel een stukje HTML te maken

function el(html) {
  const div = document.createElement("div");
  div.innerHTML = html.trim();
  return div.firstElementChild;
}


//  Inhoud op de pagina zetten


// Programmeertalen
const langGrid = document.getElementById("langGrid");
langs.forEach((l) => {
  langGrid.appendChild(el(`
    <div class="card">
      <span class="sweep"></span>
      <p class="lang-tag">${l.tag}</p>
      <h3 class="lang-name">${l.name}</h3>
      <span class="badge">Beginner</span>
    </div>
  `));
});

// Eigenschappen
const traitsGrid = document.getElementById("traitsGrid");
traits.forEach((t, i) => {
  traitsGrid.appendChild(el(`
    <div class="mini-card">
      <p class="mini-label">// eigenschap 0${i + 1}</p>
      <p class="mini-value">${t}</p>
    </div>
  `));
});

// Talen
const talenGrid = document.getElementById("talenGrid");
talen.forEach((t, i) => {
  talenGrid.appendChild(el(`
    <div class="mini-card">
      <p class="mini-label">// taal 0${i + 1}</p>
      <p class="mini-value">${t}</p>
    </div>
  `));
});

// Tijdlijn-functie (hergebruikt voor werk en onderwijs)
function buildTimeline(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach((it) => {
    let bulletsHtml = "";
    if (it.bullets) {
      bulletsHtml = `<ul class="timeline-bullets">${it.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`;
    }
    container.appendChild(el(`
      <div class="timeline-item">
        <span class="timeline-dot"></span>
        <div class="card">
          <p class="timeline-date">${it.date}</p>
          <h3 class="timeline-title">${it.title}</h3>
          <p class="timeline-place">${it.place}</p>
          ${bulletsHtml}
        </div>
      </div>
    `));
  });
}
buildTimeline("werkTimeline", werk);
buildTimeline("onderwijsTimeline", onderwijs);

// Projecten
const projectGrid = document.getElementById("projectGrid");
projecten.forEach((p) => {
  const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
  projectGrid.appendChild(el(`
    <div class="card project-card">
      <span class="sweep"></span>
      <p class="project-id">${p.id}</p>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">${tags}</div>
    </div>
  `));
});

// Hobby's
const hobbyGrid = document.getElementById("hobbyGrid");
hobbys.forEach((h, i) => {
  hobbyGrid.appendChild(el(`
    <div class="mini-card">
      <p class="mini-label">// hobby 0${i + 1}</p>
      <p class="mini-value">${h}</p>
    </div>
  `));
});

// Contact
const contactGrid = document.getElementById("contactGrid");
contact.forEach((c) => {
  contactGrid.appendChild(el(`
    <a href="${c.href}" class="mini-card">
      <p class="mini-label">${c.label}</p>
      <p class="mini-value">${c.value}</p>
    </a>
  `));
});

// Ticker vullen (twee keer zodat het rondje naadloos doorloopt)
const tickerTrack = document.getElementById("tickerTrack");
for (let copy = 0; copy < 2; copy++) {
  tickerItems.forEach((item) => {
    tickerTrack.appendChild(el(`<span>${item} <span class="sep">//</span></span>`));
  });
}

// Jaartal in de footer
document.getElementById("year").textContent = new Date().getFullYear();


//  Effect 1: de typende terminal-regel

const typing = "$ whoami && ./init.sh --load-skills";
const typedSpan = document.getElementById("typed");
let typeIndex = 0;
function typeStep() {
  if (typeIndex > typing.length) return;
  typedSpan.textContent = typing.slice(0, typeIndex);
  typeIndex++;
  setTimeout(typeStep, 50);
}
typeStep();


//  Effect 2: onthullen van secties bij het scrollen

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));


//  Effect 3: opstijgende lichtpuntjes (zweven langzaam naar boven)

// We maken 16 kleine puntjes. Elk krijgt een eigen plek, grootte, kleur,
// vertraging en snelheid, zodat ze niet allemaal tegelijk bewegen.
for (let i = 0; i < 16; i++) {
  const left = (i * 61 + 7) % 100;        // horizontale plek (0 - 100%)
  const delay = ((i * 1.7) % 9).toFixed(1); // wanneer het puntje start
  const duration = 7 + (i % 5) * 2;         // hoe lang het omhoog zweeft (traag)
  const size = 2 + (i % 3);                 // grootte in pixels
  const color = i % 2 ? "var(--secondary)" : "var(--primary)"; // roze of groen

  const bit = document.createElement("span");
  bit.className = "bit";
  bit.style.left = left + "%";
  bit.style.width = size + "px";
  bit.style.height = size + "px";
  bit.style.setProperty("--c", color);
  bit.style.animationDelay = delay + "s";
  bit.style.animationDuration = duration + "s";
  document.body.appendChild(bit);
}

