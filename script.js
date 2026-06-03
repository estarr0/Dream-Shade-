/* ============================================
   YOUR DREAM SHADE — styles.css
   ============================================ */

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: #0d0d0d;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #f0ece4;
  min-height: 100vh;
}

/* ── NAV ── */
nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.1rem 2.5rem;
  background: #0d0d0d;
  border-bottom: 0.5px solid #2a2a2a;
}
.logo {
  font-size: 17px; font-weight: 800;
  letter-spacing: 0.06em; color: #fff; text-decoration: none;
}
.logo span { color: #e63232; }
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a {
  font-size: 11px; letter-spacing: 0.12em;
  text-transform: uppercase; color: #777;
  text-decoration: none; transition: color 0.2s; cursor: pointer;
}
.nav-links a:hover { color: #fff; }

/* ── HERO ── */
.hero {
  display: flex; align-items: stretch;
  min-height: 360px;
  border-bottom: 0.5px solid #2a2a2a;
}
.hero-left {
  flex: 1; padding: 3.5rem 2.5rem;
  display: flex; flex-direction: column; justify-content: center;
}
.hero-tag {
  font-size: 10px; letter-spacing: 0.22em;
  text-transform: uppercase; color: #555; margin-bottom: 1rem;
}
.hero-h1 {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800; line-height: 1.04; color: #fff; margin-bottom: 1rem;
}
.hero-h1 em { font-style: normal; color: #e63232; }
.hero-sub {
  font-size: 14px; color: #777; line-height: 1.75;
  max-width: 340px; margin-bottom: 2rem;
}
.cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-primary {
  padding: 13px 30px; background: #e63232; color: #fff;
  font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; border: none; cursor: pointer;
  border-radius: 2px; transition: background 0.2s;
  text-decoration: none; display: inline-block;
}
.btn-primary:hover { background: #c42020; }
.btn-ghost {
  padding: 13px 30px; background: transparent; color: #aaa;
  font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; border: 0.5px solid #333;
  cursor: pointer; border-radius: 2px; transition: all 0.2s;
  text-decoration: none; display: inline-block;
}
.btn-ghost:hover { border-color: #888; color: #fff; }
.hero-right {
  width: 300px; display: flex; flex-direction: column;
  border-left: 0.5px solid #2a2a2a; overflow: hidden;
}
.strip-block {
  flex: 1; display: flex; align-items: center; justify-content: center;
  font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
  font-weight: 700; transition: flex 0.45s ease; cursor: pointer; min-height: 44px;
}
.strip-block:hover { flex: 4; }

/* ── SHARED SECTIONS ── */
.section { padding: 2.5rem 2.5rem; }
.section-title {
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  color: #444; margin-bottom: 1.6rem;
  border-bottom: 0.5px solid #1e1e1e; padding-bottom: 0.8rem;
}
.section-heading {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800; color: #fff; margin-bottom: 0.6rem;
}
.section-sub { font-size: 13px; color: #666; margin-bottom: 2rem; line-height: 1.7; }

/* ── PALETTES ── */
#palettes { border-bottom: 0.5px solid #2a2a2a; }
.palette-tabs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.6rem; }
.tab-btn {
  padding: 7px 18px; background: transparent;
  border: 0.5px solid #2a2a2a; color: #666;
  font-size: 11px; letter-spacing: 0.08em; cursor: pointer;
  border-radius: 100px; transition: all 0.2s;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
.tab-btn:hover { border-color: #555; color: #ccc; }
.tab-btn.active { color: #fff; border-color: transparent; }
.palette-view { display: none; }
.palette-view.active { display: block; animation: fadeUp 0.35s ease; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.palette-header {
  height: 100px; display: flex; align-items: flex-end;
  padding: 1.2rem 1.4rem; margin-bottom: 1.2rem;
  border-radius: 6px; position: relative; overflow: hidden;
}
.palette-header-name {
  font-size: 22px; font-weight: 800; letter-spacing: 0.04em;
  position: relative; z-index: 1;
}
.shades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 8px;
}
.shade-card {
  background: #111; border: 0.5px solid #1e1e1e;
  border-radius: 6px; overflow: hidden; cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
}
.shade-card:hover { transform: translateY(-3px); border-color: #333; }
.shade-swatch { height: 70px; position: relative; overflow: hidden; }
.shade-drip {
  position: absolute; bottom: -8px; left: 50%;
  transform: translateX(-50%);
  width: 12px; height: 20px;
  border-radius: 50% 50% 55% 55%;
  filter: brightness(0.8);
  transition: height 0.3s, bottom 0.3s;
}
.shade-card:hover .shade-drip { height: 30px; bottom: -2px; }
.shade-info {
  padding: 8px 10px;
  display: flex; align-items: center; justify-content: space-between;
}
.shade-info-left .shade-name { font-size: 11px; font-weight: 500; color: #ccc; }
.shade-info-left .shade-hex { font-size: 10px; color: #444; margin-top: 2px; }
.add-btn {
  background: none; border: 0.5px solid #2a2a2a; color: #555;
  font-size: 16px; width: 26px; height: 26px; border-radius: 50%;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all 0.15s; flex-shrink: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1;
}
.add-btn:hover { background: #e63232; border-color: #e63232; color: #fff; }

/* ── MIXER ── */
#mixer { border-bottom: 0.5px solid #2a2a2a; background: #0a0a0a; }
.mixer-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.chips-area {
  display: flex; flex-wrap: wrap; gap: 6px;
  min-height: 36px; margin-bottom: 1.2rem;
}
.chip {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 5px 10px 5px 8px;
  background: #151515; border: 0.5px solid #2a2a2a;
  border-radius: 100px; font-size: 11px; color: #bbb;
}
.chip-dot { width: 11px; height: 11px; border-radius: 50%; flex-shrink: 0; }
.chip-x {
  background: none; border: none; color: #444;
  cursor: pointer; font-size: 14px; padding: 0 2px; line-height: 1;
  transition: color 0.15s; font-family: 'Helvetica Neue', Arial, sans-serif;
}
.chip-x:hover { color: #e63232; }
.empty-hint { font-size: 12px; color: #333; font-style: italic; }
.mixer-added-list { display: flex; flex-direction: column; gap: 7px; margin-bottom: 1rem; }
.mixer-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; background: #111;
  border-radius: 5px; border: 0.5px solid #1e1e1e;
}
.mixer-dot {
  width: 30px; height: 30px; border-radius: 5px;
  flex-shrink: 0; position: relative; overflow: hidden;
}
.pour-drop {
  position: absolute; bottom: -100%; left: 50%;
  transform: translateX(-50%);
  width: 9px; border-radius: 4px 4px 7px 7px;
  background: inherit;
  transition: bottom 0.55s cubic-bezier(.2, 1.4, .6, 1);
}
.mixer-item.just-added .pour-drop { bottom: 0; }
.mixer-item-name { font-size: 12px; color: #aaa; flex: 1; }
.mixer-item-hex { font-size: 10px; color: #444; }
.preview-box {
  height: 180px; border-radius: 8px; border: 0.5px solid #222;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: background 0.55s; position: relative; overflow: hidden; margin-bottom: 1rem;
}
.pour-stream {
  position: absolute; top: -100%; left: 50%;
  transform: translateX(-50%);
  width: 28px; border-radius: 0 0 14px 14px; height: 65%;
  transition: top 0.6s cubic-bezier(.2, 1.2, .6, 1); z-index: 0;
}
.preview-box.pouring .pour-stream { top: 0; }
.preview-hex {
  font-size: 15px; font-weight: 700; letter-spacing: 0.08em;
  color: #fff; position: relative; z-index: 1;
}
.preview-cname {
  font-size: 11px; color: rgba(255,255,255,0.5);
  margin-top: 5px; position: relative; z-index: 1;
}
.suggestions-label {
  font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase; color: #444; margin-bottom: 8px;
}
.suggestions-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }
.sug-card {
  border-radius: 5px; overflow: hidden; cursor: pointer;
  border: 0.5px solid #1e1e1e; transition: transform 0.18s;
}
.sug-card:hover { transform: translateY(-2px); }
.sug-swatch { height: 48px; }
.sug-info { padding: 5px 7px; background: #111; }
.sug-name { font-size: 9px; color: #888; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ── GALLERY ── */
#gallery-section { border-bottom: 0.5px solid #2a2a2a; }
.gallery-filter { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.4rem; }
.filter-btn {
  padding: 6px 16px; background: transparent;
  border: 0.5px solid #2a2a2a; color: #555;
  font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
  cursor: pointer; border-radius: 100px; transition: all 0.2s;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
.filter-btn:hover { border-color: #555; color: #ccc; }
.filter-btn.active { background: #fff; color: #0d0d0d; border-color: #fff; }
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 8px;
}
.gallery-card {
  border-radius: 6px; overflow: hidden; cursor: pointer;
  border: 0.5px solid #1e1e1e; transition: transform 0.2s;
}
.gallery-card:hover { transform: translateY(-3px); }
.gallery-swatch { height: 80px; }
.gallery-info { padding: 8px 10px; background: #111; }
.gallery-name { font-size: 10px; font-weight: 500; color: #bbb; }
.gallery-hex { font-size: 9px; color: #3a3a3a; margin-top: 2px; }

/* ── ABOUT ── */
#about { border-bottom: 0.5px solid #2a2a2a; background: #080808; }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
.about-text p { font-size: 14px; color: #666; line-height: 1.85; margin-bottom: 1.2rem; }
.about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.stat-box {
  background: #111; border: 0.5px solid #1e1e1e;
  border-radius: 6px; padding: 1.2rem;
}
.stat-num { font-size: 2rem; font-weight: 800; color: #fff; }
.stat-num span { color: #e63232; }
.stat-label {
  font-size: 11px; color: #444;
  letter-spacing: 0.08em; text-transform: uppercase; margin-top: 4px;
}

/* ── SHOP ── */
#shop { border-bottom: 0.5px solid #2a2a2a; }
.shop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.shop-card {
  background: #111; border: 0.5px solid #1e1e1e;
  border-radius: 8px; overflow: hidden; transition: border-color 0.2s;
}
.shop-card:hover { border-color: #333; }
.shop-swatch { height: 110px; display: flex; align-items: center; justify-content: center; }
.shop-body { padding: 1rem; }
.shop-name { font-size: 13px; font-weight: 600; color: #ddd; margin-bottom: 4px; }
.shop-desc { font-size: 11px; color: #555; line-height: 1.6; margin-bottom: 1rem; }
.shop-price { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 0.8rem; }
.shop-btn {
  width: 100%; padding: 9px; background: transparent;
  border: 0.5px solid #333; color: #888;
  font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
  cursor: pointer; border-radius: 3px; transition: all 0.2s;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
.shop-btn:hover { background: #e63232; border-color: #e63232; color: #fff; }

/* ── CONTACT ── */
#contact { background: #080808; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
.contact-info p { font-size: 14px; color: #555; line-height: 1.8; margin-bottom: 1.4rem; }
.contact-detail { display: flex; flex-direction: column; gap: 12px; }
.cd-item { display: flex; align-items: center; gap: 12px; }
.cd-label {
  font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase; color: #333; min-width: 60px;
}
.cd-value { font-size: 13px; color: #888; }
.contact-form { display: flex; flex-direction: column; gap: 12px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.form-input {
  background: #111; border: 0.5px solid #222; color: #ddd;
  padding: 11px 14px; font-size: 13px; border-radius: 4px;
  outline: none; transition: border-color 0.2s;
  font-family: 'Helvetica Neue', Arial, sans-serif; width: 100%;
}
.form-input:focus { border-color: #444; }
.form-input::placeholder { color: #333; }
textarea.form-input { resize: vertical; min-height: 100px; }
.form-submit {
  padding: 13px; background: #e63232; color: #fff;
  font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; border: none; cursor: pointer;
  border-radius: 3px; transition: background 0.2s;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
.form-submit:hover { background: #c42020; }

/* ── FOOTER ── */
footer {
  padding: 1.5rem 2.5rem;
  display: flex; align-items: center; justify-content: space-between;
  border-top: 0.5px solid #1a1a1a;
}
.footer-logo { font-size: 14px; font-weight: 800; letter-spacing: 0.06em; color: #333; }
.footer-logo span { color: #e63232; }
.footer-copy { font-size: 10px; color: #333; letter-spacing: 0.06em; }

/* ── RESPONSIVE ── */
@media (max-width: 700px) {
  .mixer-layout, .about-grid, .contact-grid { grid-template-columns: 1fr; }
  .hero-right { display: none; }
  .form-row { grid-template-columns: 1fr; }
  nav { padding: 1rem 1.2rem; }
  .section { padding: 1.8rem 1.2rem; }
}

