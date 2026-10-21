(function () {
  var button = document.getElementById("email-link");
  if (!button) return;

  var email = "joeabruzek@gmail.com";
  var resetTimer;

  button.addEventListener("click", function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(function () {});
    }

    button.classList.add("is-copied");
    clearTimeout(resetTimer);
    resetTimer = setTimeout(function () {
      button.classList.remove("is-copied");
    }, 2000);
  });
})();

(function () {
  var yearEl = document.getElementById("copyright-year");
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
})();
