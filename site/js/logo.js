/* Logo: the 12 red dots are the corners of an icosahedron. On load they spin around
   the vertical axis, then ease to a stop in the flat logo pose. Hovering spins it once more. */
(function () {
  const svg = document.querySelector(".logo-dots");
  if (!svg || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const g = svg.querySelector("g");
  const dots = [...g.querySelectorAll("circle")].map(el => ({ el, x: +el.getAttribute("cx"), y: +el.getAttribute("cy"), z: +el.dataset.z }));
  const R = 41, FRONT = [255, 90, 92], BACK = [96, 30, 32];

  function draw(a, cue) {            // a = rotation (radians), cue = 0..1 depth effect strength
    const cos = Math.cos(a), sin = Math.sin(a);
    for (const d of dots) {
      const x = d.x * cos + d.z * sin, z = -d.x * sin + d.z * cos, zn = z / R;
      const k = 1 + .1 * cue * zn, shade = cue * (1 - zn) / 2 * .85;
      d.depth = z;
      d.el.setAttribute("cx", (x * k).toFixed(2));
      d.el.setAttribute("cy", (d.y * k).toFixed(2));
      d.el.setAttribute("r", (9.5 * (1 + .2 * cue * zn)).toFixed(2));
      d.el.setAttribute("fill", "rgb(" + FRONT.map((f, i) => Math.round(f + (BACK[i] - f) * shade)) + ")");
    }
    dots.slice().sort((p, q) => p.depth - q.depth).forEach(d => g.appendChild(d.el));   // back to front
  }

  let spinning = false;
  function spin(turns, ms) {
    spinning = true;
    const from = -turns * 2 * Math.PI, t0 = performance.now();
    requestAnimationFrame(function frame(now) {
      const t = Math.min(1, (now - t0) / ms), a = from * Math.pow(1 - t, 3);   // fast start, slow stop
      draw(a, Math.min(1, Math.abs(a) / (Math.PI / 3)));
      if (t < 1) requestAnimationFrame(frame); else spinning = false;
    });
  }
  spin(2, 3400);
  svg.closest("a").addEventListener("mouseenter", () => { if (!spinning) spin(1, 1900); });
})();
