/* Buttons lean a few pixels toward the cursor (mouse/trackpad only, motion allowed). */
(function () {
  if (!matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
  document.querySelectorAll(".btn, .submit").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty("--tx", (((e.clientX - r.left) / r.width - .5) * 8).toFixed(1) + "px");
      b.style.setProperty("--ty", (((e.clientY - r.top) / r.height - .5) * 6).toFixed(1) + "px");
    });
    b.addEventListener("pointerleave", () => { b.style.removeProperty("--tx"); b.style.removeProperty("--ty"); });
  });
})();
