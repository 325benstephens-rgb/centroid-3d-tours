/* Vercel Web Analytics, with a per-device "don't count me" switch.
   Visit any page with ?notrack to stop counting this browser, ?track to count it again.
   The choice is saved in this browser only; everyone else is counted as normal. */
(function () {
  var KEY = "centroid-notrack", off = false, msg = "";
  try {
    var url = new URL(location.href), q = url.searchParams;
    if (q.has("notrack")) { localStorage.setItem(KEY, "1"); msg = "Analytics off on this device. Your visits won’t be counted."; }
    if (q.has("track")) { localStorage.removeItem(KEY); msg = "Analytics back on for this device."; }
    if (msg) {                                   // tidy the address bar, keep any other params (e.g. ?beds=)
      q.delete("notrack"); q.delete("track");
      history.replaceState(history.state, "", url.pathname + (q.toString() ? "?" + q : "") + url.hash);
    }
    off = localStorage.getItem(KEY) === "1";
  } catch (e) {}                                 // storage blocked (private mode): just count normally

  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  if (!off) {
    var s = document.createElement("script");
    s.src = "/_vercel/insights/script.js";
    s.defer = true;
    document.head.appendChild(s);
  }

  if (msg) addEventListener("DOMContentLoaded", function () {
    var t = document.createElement("div");
    t.setAttribute("role", "status");
    t.textContent = msg;
    t.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:999;max-width:calc(100% - 32px);" +
      "background:rgba(29,29,31,.92);color:#f5f5f7;font:500 14px/1.35 -apple-system,BlinkMacSystemFont,Inter,sans-serif;" +
      "padding:10px 18px;border-radius:980px;box-shadow:0 10px 30px rgba(0,0,0,.3);text-align:center;pointer-events:none;transition:opacity .6s";
    document.body.appendChild(t);
    setTimeout(function () { t.style.opacity = "0"; }, 3500);
    setTimeout(function () { t.remove(); }, 4200);
  });
})();
