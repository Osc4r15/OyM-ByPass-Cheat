(function() {
  Object.defineProperty(document, "hidden", { value: false });
  Object.defineProperty(document, "visibilityState", { value: "visible" });

  document.addEventListener("visibilitychange", e => {
    e.stopImmediatePropagation();
  }, true);

  window.addEventListener("blur", e => {
    e.stopImmediatePropagation();
  }, true);

  window.addEventListener("focus", e => {
    e.stopImmediatePropagation();
  }, true);
})();
