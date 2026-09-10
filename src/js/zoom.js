/* Click-to-enlarge, as a progressive enhancement.
   Enlargeable images are already anchors pointing at the full-resolution file,
   so with this script absent (or failed) they still open in a new tab. Here we
   intercept the click and show the image in a <dialog> instead, which keeps the
   visitor on the page. Native <dialog> gives us Esc-to-close and focus trapping
   for free. */
(function () {
  var links = document.querySelectorAll("a.fig__frame--zoom");
  if (!links.length || typeof HTMLDialogElement === "undefined") return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.innerHTML =
    '<button class="lightbox__close" type="button" aria-label="Close">&times;</button>' +
    '<img class="lightbox__img" alt="">' +
    '<p class="lightbox__caption caption"></p>';
  document.body.appendChild(dialog);

  var img = dialog.querySelector(".lightbox__img");
  var cap = dialog.querySelector(".lightbox__caption");

  function close() {
    dialog.close();
    img.removeAttribute("src");
  }

  dialog.querySelector(".lightbox__close").addEventListener("click", close);

  /* Clicking the backdrop (i.e. outside the image) closes it. */
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) close();
  });
  dialog.addEventListener("close", function () {
    img.removeAttribute("src");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      /* Let modified clicks (new tab, download) behave normally. */
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      var source = link.querySelector("img");
      var figcap = link.parentElement.querySelector("figcaption");
      img.src = link.getAttribute("href");
      img.alt = source ? source.alt : "";
      cap.textContent = figcap ? figcap.textContent : (source ? source.alt : "");
      cap.hidden = !cap.textContent;
      dialog.showModal();
    });
  });
})();
