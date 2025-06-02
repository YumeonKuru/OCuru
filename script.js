document.addEventListener("DOMContentLoaded", () => {
  const pages = {
    home: document.getElementById("home-page"),
    kuru: document.getElementById("kuru-page"),
  };

  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");
  const wipe = document.getElementById("wipe-effect");

  const ocList = [
    { name: "Maiya", img: "images/maiya.png", link: "https://example.com/maiya" },
    { name: "Shia", img: "images/Shia.png", link: "https://example.com/shia" },
  ];

  const renderOCList = (list) => `
    <h2>Kuru's OC List</h2>
    <div class="oc-list">
      ${list.map(oc => `
        <div class="oc-item">
          <a href="${oc.link}" target="_blank">
            <img src="${oc.img}" alt="${oc.name}" />
            <span>${oc.name}</span>
          </a>
        </div>
      `).join('')}
    </div>
  `;

  const renderContact = () => `
    <h2>Contact Me</h2>
    <p>Email:Kuru6149@gmail.com</p>
    <p><a href="https://x.com/isurokuru">✖️Twitter</a></p>
    <p><a href="https://discord.gg/vrgPwKVM6b" target="_blank">🎮Discord</a></p>
  `;

  const showPage = (id) => {
  Object.values(pages).forEach(p => p.classList.add("hidden"));
  if (pages[id]) pages[id].classList.remove("hidden");
  wipe.style.transform = "translateX(0)";
  closePopup();
};


  const openPopup = (type) => {
  popupContent.innerHTML = type === "oc" ? renderOCList(ocList) : renderContact();
  overlay.classList.toggle("hidden", false);
  popup.classList.toggle("hidden", false);
  requestAnimationFrame(() => popup.classList.add("show"));
};

const closePopup = () => {
  popup.classList.remove("show");
  setTimeout(() => {
    overlay.classList.add("hidden");
    popup.classList.add("hidden");
  }, 150);
};

  document.querySelectorAll("[data-page]").forEach(btn =>
    btn.addEventListener("click", () => showPage(btn.dataset.page))
  );

  document.querySelectorAll("[data-popup]").forEach(btn =>
    btn.addEventListener("click", () => openPopup(btn.dataset.popup))
  );

  document.getElementById("closePopup").addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);
});
