/* ============================================================
   MOVPRIME — main.js
   GSAP + ScrollTrigger + Lenis
   ============================================================ */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loaderBar');
  const pct = document.getElementById('loaderPct');
  let p = 0;
  const tick = setInterval(() => {
    p = Math.min(100, p + Math.random() * 18);
    bar.style.width = p + '%';
    pct.textContent = Math.round(p);
    if (p >= 100) {
      clearInterval(tick);
      setTimeout(() => { loader.classList.add('is-done'); startIntro(); }, 250);
    }
  }, 110);

  /* ---------- LENIS SMOOTH SCROLL ---------- */
  let lenis;
  if (!reduce) {
    lenis = new Lenis({ duration: 1.1, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: 0 }); }
      });
    });
  }

  /* ---------- CUSTOM CURSOR ---------- */
  const cur = document.getElementById('cursor');
  const dot = document.getElementById('cursorDot');
  if (cur && !matchMedia('(hover:none)').matches) {
    let cx = 0, cy = 0, x = 0, y = 0;
    addEventListener('mousemove', e => {
      dot.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
      cx = e.clientX; cy = e.clientY;
    });
    const render = () => {
      x += (cx - x) * 0.18; y += (cy - y) * 0.18;
      cur.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      requestAnimationFrame(render);
    };
    render();
    document.querySelectorAll('[data-cursor],a,button').forEach(el => {
      el.addEventListener('mouseenter', () => cur.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cur.classList.remove('is-hover'));
    });
  }

  /* ---------- HERO GRID (svg) ---------- */
  const grid = document.querySelector('.hero__grid');
  if (grid) {
    let g = '';
    for (let i = 0; i <= 1440; i += 80) g += `<line x1="${i}" y1="0" x2="${i}" y2="900" stroke="rgba(255,255,255,.04)"/>`;
    for (let j = 0; j <= 900; j += 80) g += `<line x1="0" y1="${j}" x2="1440" y2="${j}" stroke="rgba(255,255,255,.04)"/>`;
    grid.innerHTML = g;
  }

  /* ---------- HERO PARTICLES (data motes) ---------- */
  const cvs = document.getElementById('heroParticles');
  if (cvs && !reduce) {
    const ctx = cvs.getContext('2d');
    let W, H, parts;
    const resize = () => {
      W = cvs.width = cvs.offsetWidth * devicePixelRatio;
      H = cvs.height = cvs.offsetHeight * devicePixelRatio;
      parts = Array.from({ length: 70 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
        r: Math.random() * 1.6 + .4
      }));
    };
    resize(); addEventListener('resize', resize);
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      for (const a of parts) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r * devicePixelRatio, 0, 7);
        ctx.fillStyle = 'rgba(198,255,54,.5)'; ctx.fill();
      }
      for (let i = 0; i < parts.length; i++)
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x, dy = parts[i].y - parts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 130 * devicePixelRatio) {
            ctx.beginPath(); ctx.moveTo(parts[i].x, parts[i].y); ctx.lineTo(parts[j].x, parts[j].y);
            ctx.strokeStyle = `rgba(0,224,255,${.12 * (1 - d / (130 * devicePixelRatio))})`;
            ctx.lineWidth = devicePixelRatio; ctx.stroke();
          }
        }
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ---------- HERO LIVE READOUT ---------- */
  const rPath = document.getElementById('readoutPath');
  if (rPath) {
    const W = 320, H = 90;
    const animateReadout = () => {
      let d = `M0 ${H / 2}`;
      for (let xx = 0; xx <= W; xx += 8) {
        const t = xx / W;
        const yy = H / 2 - (Math.sin(t * 12 + Date.now() / 400) * 18 + Math.sin(t * 5) * 10);
        d += ` L${xx} ${Math.max(6, Math.min(H - 6, yy))}`;
      }
      rPath.setAttribute('d', d);
    };
    setInterval(animateReadout, 90); animateReadout();
    const mVel = document.getElementById('mVel'), mAcc = document.getElementById('mAcc'), mJerk = document.getElementById('mJerk');
    setInterval(() => {
      mVel.textContent = (24 + Math.random() * 9).toFixed(1);
      mAcc.textContent = (2.5 + Math.random() * 3).toFixed(1);
      mJerk.textContent = Math.round(70 + Math.random() * 28);
    }, 700);
  }

  /* ---------- INTRO (after loader) ---------- */
  function startIntro() {
    const tl = gsap.timeline();
    tl.to('.hero__title .line__inner', { y: 0, duration: 1.1, stagger: .12, ease: 'expo.out' })
      .from('.nav', { y: -40, opacity: 0, duration: .8, ease: 'expo.out' }, '-=.8')
      .to('.hero__eyebrow', { opacity: 1, y: 0, duration: .6 }, '-=.7')
      .to('.hero__sub', { opacity: 1, y: 0, duration: .6 }, '-=.5')
      .to('.hero__actions', { opacity: 1, y: 0, duration: .6 }, '-=.45')
      .to('.hero__stats', { opacity: 1, y: 0, duration: .6 }, '-=.4')
      .from('.hero__readout', { opacity: 0, x: 30, duration: .7 }, '-=.5');
    gsap.set(['.hero__eyebrow', '.hero__sub', '.hero__actions', '.hero__stats'], { y: 20 });
  }
  if (reduce) gsap.set('.hero__title .line__inner', { y: 0 });

  /* ---------- NAV STUCK ---------- */
  ScrollTrigger.create({ start: 60, end: 'max',
    onUpdate: s => document.getElementById('nav').classList.toggle('is-stuck', s.progress > 0 || scrollY > 60) });
  ScrollTrigger.create({ trigger: 'body', start: 'top -60',
    onToggle: s => document.getElementById('nav').classList.toggle('is-stuck', s.isActive) });

  /* ---------- COUNTERS ---------- */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count, suf = el.dataset.suffix || '';
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => gsap.to({ v: 0 }, {
        v: target, duration: 1.6, ease: 'power2.out',
        onUpdate() { el.textContent = Math.round(this.targets()[0].v) + suf; }
      })
    });
  });

  /* ---------- GENERIC REVEALS ---------- */
  gsap.utils.toArray('.reveal-up').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: .9, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  /* ---------- MARQUEE ---------- */
  const mt = document.querySelector('.marquee__track');
  if (mt && !reduce) {
    gsap.to(mt, { xPercent: -50, duration: 22, ease: 'none', repeat: -1 });
  }

  /* ---------- MANIFESTO WORD HIGHLIGHT + STRIKE ---------- */
  const words = gsap.utils.toArray('.manifesto .word');
  const strike = document.querySelector('.manifesto .strike');
  if (words.length && !reduce) {
    gsap.to(words, {
      opacity: 1, stagger: .08, ease: 'none',
      scrollTrigger: { trigger: '.manifesto', start: 'top 70%', end: 'bottom 75%', scrub: true }
    });
    // strike-through on "caro" once it scrolls into view
    ScrollTrigger.create({
      trigger: '.manifesto', start: 'top 50%', once: true,
      onEnter: () => strike?.classList.add('is-struck')
    });
  } else if (words.length) {
    // reduced motion: reveal everything, no scrub
    gsap.set('.manifesto .word', { opacity: 1 });
    strike?.classList.add('is-struck');
  }

  /* ---------- MÉTRICAS CHART (the showpiece) ---------- */
  const curve = document.getElementById('chartCurve');
  if (curve) {
    const W = 1000, H = 420, pad = 40;
    // build an acceleration-like path
    const pts = [];
    const N = 120;
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const x = pad + t * (W - pad * 2);
      const base = H - pad;
      const v =
        Math.exp(-Math.pow((t - .28) / .07, 2)) * 1.0 +   // peak 1 (explosion)
        Math.exp(-Math.pow((t - .52) / .05, 2)) * 0.75 +
        Math.exp(-Math.pow((t - .74) / .09, 2)) * 0.9 +
        Math.sin(t * 30) * 0.04;
      const y = base - v * (H - pad * 2) * 0.78;
      pts.push([x, y]);
    }
    const dCurve = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
    curve.setAttribute('d', dCurve);

    // area (integral)
    const area = document.getElementById('chartArea');
    area.setAttribute('d', dCurve + ` L${pts[pts.length-1][0]} ${H-pad} L${pts[0][0]} ${H-pad} Z`);

    // grid
    let gg = '';
    for (let i = 0; i <= 6; i++){const yy=pad+i*((H-pad*2)/6);gg+=`<line x1="${pad}" y1="${yy}" x2="${W-pad}" y2="${yy}"/>`;}
    for (let i = 0; i <= 10; i++){const xx=pad+i*((W-pad*2)/10);gg+=`<line x1="${xx}" y1="${pad}" x2="${xx}" y2="${H-pad}"/>`;}
    document.getElementById('chartGrid').innerHTML = gg;

    // stroke-dash setup
    const len = curve.getTotalLength();
    curve.style.strokeDasharray = len;
    curve.style.strokeDashoffset = len;

    const dot = document.getElementById('chartDot');
    const tan = document.getElementById('chartTangent');

    const tl = gsap.timeline({
      scrollTrigger: { trigger: '.metricas__stage', start: 'top 70%', end: 'bottom 80%', scrub: 1 }
    });
    tl.to(curve, { strokeDashoffset: 0, ease: 'none', duration: 4 })
      .to(area, { opacity: 1, duration: 1.5 }, '-=1.5')
      .to(dot, { opacity: 1, duration: .3 }, 0)
      .to(tan, { opacity: 1, duration: .3 }, 1)
      .to({ t: 0 }, {
        t: 1, ease: 'none', duration: 4,
        onUpdate() {
          const tt = this.targets()[0].t;
          const pos = curve.getPointAtLength(len * tt);
          dot.setAttribute('cx', pos.x); dot.setAttribute('cy', pos.y);
          // derivative tangent
          const a = curve.getPointAtLength(Math.max(0, len * tt - 6));
          const b = curve.getPointAtLength(Math.min(len, len * tt + 6));
          const ang = Math.atan2(b.y - a.y, b.x - a.x);
          const L = 70;
          tan.setAttribute('x1', pos.x - Math.cos(ang) * L);
          tan.setAttribute('y1', pos.y - Math.sin(ang) * L);
          tan.setAttribute('x2', pos.x + Math.cos(ang) * L);
          tan.setAttribute('y2', pos.y + Math.sin(ang) * L);
        }
      }, 0);
    if (reduce) { curve.style.strokeDashoffset = 0; area.style.opacity = 1; }
  }

  /* ---------- MODALIDADES HORIZONTAL PIN ---------- */
  const track = document.getElementById('modTrack');
  if (track && !reduce && innerWidth > 820) {
    const getScroll = () => track.scrollWidth - innerWidth + (innerWidth * 0.06);
    gsap.to(track, {
      x: () => -getScroll(),
      ease: 'none',
      scrollTrigger: {
        trigger: '.modalidades',
        start: 'top top',
        end: () => '+=' + getScroll(),
        scrub: 1,
        pin: '.modalidades__sticky',
        invalidateOnRefresh: true
      }
    });
  } else if (track) {
    // mobile: simple horizontal scroll
    track.style.overflowX = 'auto';
    track.parentElement.style.height = 'auto';
    document.querySelector('.modalidades__sticky').style.height = 'auto';
    document.querySelector('.modalidades__sticky').style.padding = '80px 0';
  }

  /* ---------- DASHBOARD SPARK BARS ---------- */
  const spark = document.getElementById('dashSpark');
  if (spark) {
    let html = '';
    const vals = [30, 45, 38, 60, 52, 70, 64, 80, 72, 88, 78, 95, 84];
    vals.forEach(() => html += '<i></i>');
    spark.innerHTML = html;
    ScrollTrigger.create({
      trigger: '.dash', start: 'top 80%', once: true,
      onEnter: () => {
        spark.querySelectorAll('i').forEach((b, i) => {
          gsap.to(b, { height: vals[i] + '%', duration: .8, delay: i * .05, ease: 'expo.out' });
        });
      }
    });
  }

  /* ---------- BTN MAGNETIC ---------- */
  if (!matchMedia('(hover:none)').matches) {
    document.querySelectorAll('.btn').forEach(b => {
      b.addEventListener('mousemove', e => {
        const r = b.getBoundingClientRect();
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .35, duration: .4 });
      });
      b.addEventListener('mouseleave', () => gsap.to(b, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.4)' }));
    });
  }

  ScrollTrigger.refresh();
})();
