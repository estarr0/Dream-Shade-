const PALETTES = {
  red: { 
    label: 'Red', base: '#e63232', textDark: '#7d1010', shades: [
      { name: 'Snow Blush', hex: '#fde8e8' }, { name: 'Rose Mist', hex: '#f5b8b8' },
      { name: 'Strawberry', hex: '#ee7a7a' }, { name: 'Crimson', hex: '#e63232' },
      { name: 'Ruby', hex: '#b52020' }, { name: 'Burgundy', hex: '#7d1010' }, { name: 'Oxblood', hex: '#430808' }
    ] 
  },
  yellow: { 
    label: 'Yellow', base: '#f5a623', textDark: '#3a1f00', shades: [
      { name: 'Cream', hex: '#fffbea' }, { name: 'Butter', hex: '#fdedb0' },
      { name: 'Honey', hex: '#fcd56a' }, { name: 'Amber', hex: '#f5a623' },
      { name: 'Goldenrod', hex: '#d48000' }, { name: 'Mustard', hex: '#9a5e00' }, { name: 'Bronze', hex: '#5c3600' }
    ] 
  },
  blue: { 
    label: 'Blue', base: '#1a6fe6', textDark: '#042c53', shades: [
      { name: 'Ice', hex: '#e8f1fd' }, { name: 'Periwinkle', hex: '#a8c4f5' },
      { name: 'Cornflower', hex: '#5a94e8' }, { name: 'Cobalt', hex: '#1a6fe6' },
      { name: 'Royal', hex: '#1050b5' }, { name: 'Navy', hex: '#0a3070' }, { name: 'Midnight', hex: '#051830' }
    ] 
  },
  green: { 
    label: 'Green', base: '#2ea84a', textDark: '#0a2e12', shades: [
      { name: 'Mint', hex: '#e6f9ec' }, { name: 'Sage', hex: '#a8ddb5' },
      { name: 'Fern', hex: '#5ec476' }, { name: 'Emerald', hex: '#2ea84a' },
      { name: 'Forest', hex: '#1b6e30' }, { name: 'Moss', hex: '#0e4019' }, { name: 'Darkwood', hex: '#06200d' }
    ] 
  },
  purple: { 
    label: 'Purple', base: '#7c3fe8', textDark: '#2a1060', shades: [
      { name: 'Lavender', hex: '#f0e8fd' }, { name: 'Lilac', hex: '#cba8f5' },
      { name: 'Wisteria', hex: '#a870ee' }, { name: 'Violet', hex: '#7c3fe8' },
      { name: 'Plum', hex: '#5522b0' }, { name: 'Indigo', hex: '#330e7a' }, { name: 'Nightshade', hex: '#1a053e' }
    ] 
  },
  orange: { 
    label: 'Orange', base: '#f47c20', textDark: '#4a2400', shades: [
      { name: 'Peach', hex: '#fef0e6' }, { name: 'Apricot', hex: '#fcc99a' },
      { name: 'Tangerine', hex: '#f8a05c' }, { name: 'Orange', hex: '#f47c20' },
      { name: 'Terracotta', hex: '#c45810' }, { name: 'Rust', hex: '#8a3500' }, { name: 'Mahogany', hex: '#491600' }
    ] 
  },
};

const allShades = Object.entries(PALETTES).flatMap(([key, p]) => p.shades.map(s => ({ ...s, palette: key })));
let mixSelected = [];
let activeTab = 'red';
let galleryFilter = 'all';

// COLOR CALCULATOR UTILITIES
function hexToRgb(h) {
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, '0')).join('');
}

function blendHexes(hexes) {
  if (!hexes.length) return null;
  const sums = hexes.map(hexToRgb).reduce((a, c) => [a[0] + c[0], a[1] + c[1], a[2] + c[2]], [0, 0, 0]);
  return rgbToHex(...sums.map(v => Math.round(v / hexes.length)));
}

// ARTISTIC LAB SHADE GENERATOR
function generateArtisticName(hex) {
  const [r, g, b] = hexToRgb(hex);
  const l = r * 0.299 + g * 0.587 + b * 0.114;
  const max = Math.max(r, g, b), d = max - Math.min(r, g, b);
  
  if (d < 28) return l > 210 ? 'Soft Alabaster' : l > 140 ? 'Vintage Grey' : 'Deep Obsidian';
  
  if (r === max) {
    return g > b ? (b < 80 ? 'Ember Terracotta' : 'Sun-Kissed Apricot') : 'Velvet Crimson';
  }
  if (g === max) {
    return r > b ? 'Muted Olive' : 'Electric Forest';
  }
  if (b === max) {
    return r > g ? 'Royal Nightshade' : 'Arctic Ocean';
  }
  return 'Industrial Blend';
}

// INTERACTIVE TAB SYSTEM BUILDER
function buildTabs() {
  const tabsEl = document.getElementById('palette-tabs');
  const viewsEl = document.getElementById('palette-views');
  if (!tabsEl || !viewsEl) return;

  Object.entries(PALETTES).forEach(([key, p], i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = p.label;
    btn.style.setProperty('--c', p.base);
    if (i === 0) {
      btn.style.background = p.base;
      btn.style.borderColor = p.base;
      btn.style.color = p.textDark || '#fff';
    }
    btn.dataset.key = key;
    btn.onclick = () => switchTab(key);
    tabsEl.appendChild(btn);

    const view = document.createElement('div');
    view.className = 'palette-view' + (i === 0 ? ' active' : '');
    view.id = 'view-' + key;
    view.innerHTML = `<div class="palette-header" style="background:${p.base}"><span class="palette-header-name" style="color:${p.textDark || '#fff'}">${p.label}</span></div><div class="shades-grid" id="shades-${key}"></div>`;
    viewsEl.appendChild(view);

    p.shades.forEach(shade => {
      const card = document.createElement('div');
      card.className = 'shade-card';
      card.innerHTML = `
        <div class="shade-swatch" style="background:${shade.hex}">
          <div class="shade-drip" style="background:${shade.hex}"></div>
        </div>
        <div class="shade-info">
          <div class="shade-info-left">
            <div class="shade-name">${shade.name}</div>
            <div class="shade-hex">${shade.hex}</div>
          </div>
          <button class="add-btn" title="Add to mixer">+</button>
        </div>`;
      card.querySelector('.add-btn').onclick = (e) => {
        e.stopPropagation();
        addShade({ ...shade, palette: key });
      };
      document.getElementById('shades-' + key)?.appendChild(card);
    });
  });
}

function switchTab(key) {
  const p = PALETTES[key];
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
  });
  document.querySelectorAll('.palette-view').forEach(v => v.classList.remove('active'));
  
  const btn = document.querySelector(`.tab-btn[data-key="${key}"]`);
  if (btn) {
    btn.classList.add('active');
    btn.style.background = p.base; 
    btn.style.borderColor = p.base; 
    btn.style.color = p.textDark || '#fff';
  }
  document.getElementById('view-' + key)?.classList.add('active');
}

// STUDIO LAB FILTERED GALLERY BUILDER
function buildGallery() {
  const filterEl = document.getElementById('gallery-filter');
  if (!filterEl) return;

  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active'; 
  allBtn.textContent = 'All';
  allBtn.onclick = () => filterGallery('all');
  filterEl.appendChild(allBtn);

  Object.entries(PALETTES).forEach(([key, p]) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn'; 
    btn.textContent = p.label; 
    btn.dataset.key = key;
    btn.onclick = () => filterGallery(key);
    filterEl.appendChild(btn);
  });
  renderGallery();
}

function filterGallery(key) {
  galleryFilter = key;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.key === key || (key === 'all' && b.textContent === 'All'));
  });
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const shades = galleryFilter === 'all' ? allShades : allShades.filter(s => s.palette === galleryFilter);
  shades.forEach(s => {
    const c = document.createElement('div'); 
    c.className = 'gallery-card';
    c.innerHTML = `<div class="gallery-swatch" style="background:${s.hex}"></div><div class="gallery-info"><div class="gallery-name">${s.name}</div><div class="gallery-hex">${s.hex}</div></div>`;
    c.onclick = () => addShade(s);
    grid.appendChild(c);
  });
}

// LIQUID MIXER OPERATION ENGINE
function addShade(shade) {
  if (mixSelected.find(s => s.hex === shade.hex)) return;
  mixSelected.push(shade);
  updateMixer(shade.hex);
}

function removeShade(i) {
  mixSelected.splice(i, 1);
  updateMixer(null);
}

function updateMixer(lastHex) {
  const chips = document.getElementById('chips-area');
  const list = document.getElementById('mixer-added-list');
  const preview = document.getElementById('preview-box');
  const hexEl = document.getElementById('preview-hex');
  const nameEl = document.getElementById('preview-cname');
  const sugg = document.getElementById('suggestions-row');

  if (!chips || !list || !preview || !hexEl || !nameEl || !sugg) return;

  chips.innerHTML = ''; 
  list.innerHTML = ''; 
  sugg.innerHTML = '';

  if (!mixSelected.length) {
    chips.innerHTML = '<span class="empty-hint">No shades added yet — click + on any shade above</span>';
    preview.style.background = '#141414'; 
    hexEl.textContent = '—'; 
    nameEl.textContent = 'Add shades to mix';
    return;
  }

  mixSelected.forEach((s, i) => {
    const chip = document.createElement('div'); 
    chip.className = 'chip';
    chip.innerHTML = `<span class="chip-dot" style="background:${s.hex}"></span>${s.name}<button class="chip-x" onclick="removeShade(${i})">&#x2715;</button>`;
    chips.appendChild(chip);

    const item = document.createElement('div'); 
    item.className = 'mixer-item' + (s.hex === lastHex ? ' just-added' : '');
    item.innerHTML = `<div class="mixer-dot" style="background:${s.hex}"><div class="pour-drop" style="background:${s.hex}"></div></div><div class="mixer-item-name">${s.name}</div><div class="mixer-item-hex">${s.hex}</div>`;
    list.appendChild(item);
    if (s.hex === lastHex) setTimeout(() => item.classList.remove('just-added'), 700);
  });

  const blended = blendHexes(mixSelected.map(s => s.hex));
  const stream = document.getElementById('pour-stream');
  
  if (stream) {
    stream.style.background = lastHex || blended;
    stream.style.top = '-100%';
    preview.classList.remove('pouring');
    void preview.offsetWidth; // Force DOM layout reflow for animation reset
    
    if (lastHex) {
