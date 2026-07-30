/* ---------- Data ---------- */
const books = [
  {
    lvl: 1,
    title: "Je parle français-I",
    sub: "First sounds & letters",
    bg: "linear-gradient(155deg,#7fd9a0,#3fae72)",
    icon: "🔤",
    cover: "/images/book1.jpg",
    best: true,
    rating: "4.9",
  },
  {
    lvl: 2,
    title: "Je parle français-II",
    sub: "First words & everyday objects",
    bg: "linear-gradient(155deg,#ff9edb,#e35bc4)",
    icon: "🍎",
    cover: "/images/book2.jpg",
    best: true,
    rating: "4.9",
  },
  {
    lvl: 3,
    title: "Je parle français-III",
    sub: "Numbers & colours",
    bg: "linear-gradient(155deg,#8fb3ff,#4c73e0)",
    icon: "🔢",
    cover: "/images/book3.jpg",
    best: false,
    rating: "4.7",
  },
  {
    lvl: 4,
    title: "Petit Dictionnaire Illustré",
    sub: "Family & friends",
    bg: "linear-gradient(155deg,#ffcf8f,#e39a3d)",
    icon: "👨‍👩‍👧",
    cover: "/images/dictionary.jpg",
    best: false,
    rating: "4.8",
  },
  {
    lvl: 5,
    title: "Corrigé des exercices Je parle français-I",
    sub: "Around the house",
    bg: "linear-gradient(155deg,#c3a0ff,#8a5be0)",
    icon: "🏠",
    cover: "/images/corrige-1.webp",
    best: false,
    rating: "4.6",
  },
  {
    lvl: 6,
    title: "Corrigé des exercices Je parle français-II",
    sub: "Food & the market",
    bg: "linear-gradient(155deg,#ffb199,#e0603d)",
    icon: "🥖",
    cover: "/images/corrige-2.webp",
    best: false,
    rating: "4.7",
  },
  {
    lvl: 7,
    title: "L'Alphabet en image",
    sub: "Seasons & weather",
    bg: "linear-gradient(155deg,#9fe0e6,#3ea8b0)",
    icon: "🍂",
    cover: "/images/alphabet-image.jpg",
    best: false,
    rating: "4.6",
  },
  {
    lvl: 8,
    title: "Conjuguez en français",
    sub: "Short stories to read aloud",
    bg: "linear-gradient(155deg,#ffe08f,#e0a83d)",
    icon: "📖",
    cover: "/images/verbs.webp",
    best: true,
    rating: "4.9",
  },
  {
    lvl: 9,
    title: "Le Chat Botté",
    sub: "Grammar through games",
    bg: "linear-gradient(155deg,#a0d9ff,#4c9be0)",
    icon: "🎲",
    cover: "/images/story-2.jpg",
    best: false,
    rating: "4.5",
  },
  {
    lvl: 10,
    title: "Le Vilain Petit Canard",
    sub: "Everyday conversation",
    bg: "linear-gradient(155deg,#ffa0c8,#e0508f)",
    icon: "💬",
    cover: "/images/story-1.jpg",
    best: false,
    rating: "4.8",
  },
];

const testimonials = [
  {q:"My daughter started counting to twenty in French within a week — she asks to do her Bonjour Cahiers page before dinner now.", who:"Anjali Mehra", role:"Parent, Vasant Kunj", avatarBg:"var(--mint)"},
  {q:"We switched our Class 3–5 French curriculum to this series two years ago. The flashcards alone saved us a term of prep.", who:"Ritu Kapoor", role:"French Teacher, Delhi Public School", avatarBg:"var(--pink)"},
  {q:"Camille understands Indian classrooms — the examples use festivals and food kids already know. That's rare in a language series.", who:"Farhan Sheikh", role:"Principal, Green Valley School", avatarBg:"#ffcf8f"},
];

const screens = [
  {word:"le chat", en:"the cat", icon:"🐱", sent:"Le chat est noir. — The cat is black.", bg:"var(--mint-tint)"},
  {word:"la pomme", en:"the apple", icon:"🍎", sent:"J'aime la pomme rouge. — I like the red apple.", bg:"var(--pink-tint)"},
  {word:"le soleil", en:"the sun", icon:"☀️", sent:"Le soleil brille aujourd'hui. — The sun is shining today.", bg:"#FFF3D6"},
  {word:"ma famille", en:"my family", icon:"👨‍👩‍👧‍👦", sent:"Voici ma famille. — Here is my family.", bg:"var(--mint-tint)"},
];

const stores = [
  {name:"Amazon.in", icon:"🛒"}, {name:"Flipkart", icon:"🛍️"}, {name:"Amazon Kindle", icon:"📱"}, /* {name:"Bonjour Cahiers Store", icon:"🏪"} */
];
const socials = [
  {name:"Instagram", icon:"📸"}, {name:"YouTube", icon:"▶️"}, {name:"Facebook", icon:"👍"}
];

/* ---------- Renderers ---------- */
function starRow(rating){
  return `<span class="stars">★★★★★ <span>${rating} avg. rating</span></span>`;
}

function renderBest(){
  const el = document.getElementById('bestGrid');
  el.innerHTML = books.filter(b=>b.best).map(b=>`
    <div class="book-card">
      <span class="ribbon">Bestseller</span>
      <div class="cover" style="background:${b.bg}">
        <img src="${b.cover}" alt="${b.title}" />
        <span class="lvl">${b.lvl}</span>
        <div class="cov-title">${b.title}<br><span style="opacity:.75;font-weight:600;font-size:.78rem;">Niveau ${b.lvl}</span></div>
        <div class="stripe"></div>
      </div>
      <div class="book-meta">
        <h3>${b.title}</h3>
        <p class="sub">${b.sub}</p>
        <div class="book-foot">
          ${starRow(b.rating)}
          <a class="link-arrow" href="#buy">Buy now →</a>
        </div>
      </div>
    </div>`).join('');
}

function renderFilters(){
  const row = document.getElementById('filterRow');
  const cats = ["All levels","Beginner (1–3)","Everyday life (4–6)","Stories & grammar (7–9)","Fluency (10)"];
  row.innerHTML = cats.map((c,i)=>`<button class="filter-pill ${i===0?'active':''}" data-i="${i}">${c}</button>`).join('');
  row.querySelectorAll('.filter-pill').forEach(btn=>{
    btn.addEventListener('click',()=>{
      row.querySelectorAll('.filter-pill').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const i = +btn.dataset.i;
      const ranges = [[1,10],[1,3],[4,6],[7,9],[10,10]];
      renderLib(ranges[i]);
    });
  });
}

function renderLib(range=[1,10]){
  const el = document.getElementById('libGrid');
  el.innerHTML = books.filter(b=>b.lvl>=range[0] && b.lvl<=range[1]).map(b=>`
    <div class="lib-card">
      <div class="lib-cover" style="background:${b.bg}"><img src="${b.cover}" alt="${b.title}"/></div>
      <h4>${b.title}</h4>
      <p>Niveau ${b.lvl}</p>
      <div class="lib-buy">
        <a class="mini-btn" href="#buy">Details</a>
        <a class="mini-btn" style="background:var(--pink-tint);color:var(--pink-deep);" href="#buy">Buy</a>
      </div>
    </div>`).join('');
}

function renderScreens(){
  const el = document.getElementById('screensTrack');
  el.innerHTML = screens.map(s=>`
    <div class="screen">
      <div class="spiral">${Array(8).fill('<i></i>').join('')}</div>
      <p class="page-title">Aujourd'hui, je découvre…</p>
      <div class="flash" style="background:${s.bg}">
        <div style="font-size:2.4rem;">${s.icon}</div>
        <div class="word-fr">${s.word}</div>
        <div class="word-en">${s.en}</div>
      </div>
      <div class="sent">${s.sent}</div>
    </div>`).join('');
}

function renderTesti(){
  const el = document.getElementById('testiGrid');
  el.innerHTML = testimonials.map(t=>`
    <div class="testi-card">
      ${starRow('5.0')}
      <p class="quote">“${t.q}”</p>
      <div class="testi-who">
        <svg class="avatar" viewBox="0 0 42 42"><circle cx="21" cy="21" r="21" fill="${t.avatarBg}"/><circle cx="21" cy="17" r="7" fill="#fff" opacity=".85"/><ellipse cx="21" cy="34" rx="12" ry="9" fill="#fff" opacity=".85"/></svg>
        <div><strong>${t.who}</strong><span>${t.role}</span></div>
      </div>
    </div>`).join('');
}

function renderStores(){
  document.getElementById('storeList').innerHTML = stores.map(s=>`<a class="store-btn" href="#">${s.icon} ${s.name}</a>`).join('');
  document.getElementById('socialList').innerHTML = socials.map(s=>`<a class="social-btn" href="#">${s.icon} ${s.name}</a>`).join('');
}

function renderBookStack(){
  const track = document.querySelector('.book-stack-track');
  if (!track) return;

  const stackItems = [
    { img: "images/book1.jpg", label: "Je parle français-I" },
    { img: "images/book2.jpg", label: "Je parle français-II" },
    { img: "images/book3.jpg", label: "Je parle français-III" },
    { img: "images/corrige-1.webp", label: "Corrigé des exercices-I" },
    { img: "images/corrige-2.webp", label: "Corrigé des exercices-II" },
    { img: "images/story-2.jpg", label: "Le Chat Botté" },
    { img: "images/story-1.jpg", label: "Le Vilain Petit Canard" },
    { img: "images/verbs.webp", label: "Conjuguez en français" },
    { img: "images/dictionary.jpg", label: "Petit Dictionnaire Illustré" },
    { img: "images/alphabet-image.jpg", label: "L'Alphabet en image" },
  ];

  const markup = stackItems.map(item=>`
    <div class="book-stack-card">
      <img src="${item.img}" alt="${item.label}">
      
    </div>`).join('');

  track.innerHTML = markup;

  if (typeof gsap !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const cards = Array.from(track.querySelectorAll('.book-stack-card'));
    const positions = [
        { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
        { x: -10, y: 0, rotation: -8, scale: 0.9, opacity: 0.82 },
      { x: -20, y: 0, rotation: -16, scale: 0.82, opacity: 0.75 },
      { x: 10, y: 0, rotation: 8, scale: 0.9, opacity: 0.82 },
      { x: 20, y: 0, rotation: 16, scale: 0.82, opacity: 0.75 },
    ];

    
    // gsap.set(cards, { opacity: 0.75, scale: 0.9, transformOrigin: 'center bottom' });
    const playShuffle = () => {
        const [first, ...rest] = cards;
        cards.splice(0, cards.length, ...rest, first);
      cards.forEach((card, index) => {
        const pos = positions[index] || positions[index % positions.length];
        card.style.zIndex = String(cards.length - index);

        const tl = gsap.timeline({ defaults: { ease: 'back.out' } });
        tl.to(card, { opacity: pos.opacity, scale: pos.scale, x: pos.x, y: pos.y, rotation: pos.rotation, duration: 0.8 })
        //   .to(card, { opacity: 0.95, scale: 0.96, x: 0, y: 0, rotation: 0, duration: 0.5 }, '+=0.5');
    });
    
    
};

const masterTl = gsap.timeline({ repeat: -1, repeatDelay: 6 });
masterTl.call(playShuffle, [], 0)
//   .call(playShuffle, [], 2.8)
//   .call(playShuffle, [], 5.6);
}
console.info("render stack")
}

renderBest();
renderFilters();
renderLib();
renderScreens();
renderTesti();
renderStores();
renderBookStack();

/* mobile nav */
document.querySelector('.nav-toggle').addEventListener('click', ()=>{
  const nav = document.querySelector('nav.links');
  const open = nav.style.display === 'flex';
  nav.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:70px;left:0;right:0;background:var(--paper);padding:20px 28px;gap:16px;border-bottom:1px solid var(--line);';
});
