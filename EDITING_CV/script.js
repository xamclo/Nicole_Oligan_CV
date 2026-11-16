/* =========================================================
   NICOLE OLIGAN — PORTFOLIO CONFIGURATION & INTERACTIONS
   ========================================================= */

const PROJECTS = [
  { num: "01", code: "EDIT_001", title: "Short-form 01", driveId: "1lytc33XWnxZaBJwsi-JXZj85IhoYwb4a", thumbnail: "assets/thumbs/edit_01.jpg" },
  { num: "02", code: "EDIT_002", title: "Short-form 02", driveId: "1GAIC3V6x1LsvN0_xUaI8TD3y-ftv9C2D", thumbnail: "assets/thumbs/edit_02.jpg" },
  { num: "03", code: "EDIT_003", title: "Short-form 03", driveId: "1wR5hq2O6Es57minrlP4eXzPISw79l17j", thumbnail: "assets/thumbs/edit_03.jpg" },
  { num: "04", code: "EDIT_004", title: "Short-form 04", driveId: "1Y2iYlDhzCKY-xTPE7JHnif5ZVIl2KtsJ", thumbnail: "assets/thumbs/edit_04.jpg" },
  { num: "05", code: "EDIT_005", title: "Short-form 05", driveId: "1cjOUM8aUq9K8Q7qN1r2c9JWylAW84iuX", thumbnail: "assets/thumbs/edit_05.jpg" },
  { num: "06", code: "EDIT_006", title: "Short-form 06", driveId: "1tYfBKjvCR4akLZf59lxPkkclz52FAUue", thumbnail: "assets/thumbs/edit_06.jpg" },
  { num: "07", code: "EDIT_007", title: "Short-form 07", driveId: "1k5ipPafRVNHj09SPB_O4vZa35x-0m2LN", thumbnail: "assets/thumbs/edit_07.jpg" },
  { num: "08", code: "EDIT_008", title: "Short-form 08", driveId: "16F4RXj_-YKMzRCmqgHD7FMTzQdSXC6Gu", thumbnail: "assets/thumbs/edit_08.jpg" },
  { num: "09", code: "EDIT_009", title: "Short-form 09", driveId: "1DZZM4PTlug-x1uFjCpaspJRbNymLKaeq", thumbnail: "assets/thumbs/edit_09.jpg" },
  { num: "10", code: "EDIT_010", title: "Short-form 10", driveId: "1LVjbX_0zj7BzFSZ5D7zruD5DLmAOZ2dL", thumbnail: "assets/thumbs/edit_10.jpg" },
  { num: "11", code: "EDIT_011", title: "Short-form 11", driveId: "1lGDn44_dcucXIRkTjT03PEUjlF4vhm3r", thumbnail: "assets/thumbs/edit_11.jpg" },
  { num: "12", code: "EDIT_012", title: "Short-form 12", driveId: "1GYeYj3iVZTl3_CiMYtcTbBfEgCLurUcf", thumbnail: "assets/thumbs/edit_12.jpg" },
  { num: "13", code: "EDIT_013", title: "Short-form 13", driveId: "1KVOJHkkfXY5Pym_y7syp57jlUiSl9gU4", thumbnail: "assets/thumbs/edit_13.jpg" },
  { num: "14", code: "EDIT_014", title: "Short-form 14", driveId: "1q9lHbbbYU2rWkp4tFg3KcB7x29KrEeCk", thumbnail: "assets/thumbs/edit_14.jpg" },
  { num: "15", code: "EDIT_015", title: "Short-form 15", driveId: "1SjR_fPyrN7qxFj9wy56RDTrCjVjcc4Fj", thumbnail: "assets/thumbs/edit_15.jpg" },
  { num: "16", code: "EDIT_016", title: "Short-form 16", driveId: "1vOO_8uj4JnCIEXWEuzogN4Qj2Vwy_JMh", thumbnail: "assets/thumbs/edit_16.jpg" },
  { num: "17", code: "EDIT_017", title: "Short-form 17", driveId: "1_dcblSmcGgxDiZcVkBwf94T7Ttq4bnJA", thumbnail: "assets/thumbs/edit_17.jpg" },
  { num: "18", code: "EDIT_018", title: "Short-form 18", driveId: "1g0Yem62_7VrzkWnoLVa-ymS5ZTHkZB_R", thumbnail: "assets/thumbs/edit_18.jpg" }
];

/* ---------- Navigation ---------- */
const nav = document.querySelector(".nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = navLinks ? Array.from(navLinks.querySelectorAll("a")) : [];

function onScroll() {
  if (window.scrollY > 24) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navAnchors.forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* Active section highlight */
const sections = ["about", "services", "process", "work", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          navAnchors.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === id));
        }
      });
    },
    { rootMargin: "-42% 0px -48% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Portfolio Gallery (18 Google Drive Videos) ---------- */
const workGrid = document.getElementById("workGrid");
const workCount = document.getElementById("workCount");

function renderProjects(list) {
  if (!workGrid) return;
  workGrid.innerHTML = "";
  if (workCount) {
    workCount.textContent = `${list.length} videos`;
  }

  list.forEach((item) => {
    const article = document.createElement("article");
    article.className = "vcard reveal";

    const thumbBtn = document.createElement("button");
    thumbBtn.type = "button";
    thumbBtn.className = "vcard__thumb";
    thumbBtn.setAttribute("aria-label", `Play ${item.num} — ${item.title}`);

    // Upper-left numbered badge
    const badge = document.createElement("span");
    badge.className = "vcard__num";
    badge.textContent = item.num;
    thumbBtn.appendChild(badge);

    // Representative video frame thumbnail (lazy loaded)
    const img = document.createElement("img");
    img.className = "vcard__img";
    img.src = item.thumbnail || `https://drive.google.com/thumbnail?id=${item.driveId}&sz=w1000`;
    img.alt = `${item.num} — ${item.title}`;
    img.loading = "lazy";
    img.decoding = "async";

    // Fallback to dark-brown numbered placeholder if thumbnail fails to load
    img.addEventListener("error", () => {
      img.remove();
      const fb = document.createElement("div");
      fb.className = "vcard__fallback";
      fb.textContent = item.num;
      thumbBtn.appendChild(fb);
    });
    thumbBtn.appendChild(img);

    // Bottom-right circular play button
    const play = document.createElement("span");
    play.className = "vcard__play";
    play.setAttribute("aria-hidden", "true");
    play.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg>`;
    thumbBtn.appendChild(play);

    // Project title underneath thumbnail
    const caption = document.createElement("p");
    caption.className = "vcard__title";
    caption.innerHTML = `<strong>${item.num}</strong> — ${item.title}`;

    const handleOpen = () => openModal(item);
    thumbBtn.addEventListener("click", handleOpen);
    caption.addEventListener("click", handleOpen);

    article.appendChild(thumbBtn);
    article.appendChild(caption);
    workGrid.appendChild(article);
  });
}

renderProjects(PROJECTS);

/* ---------- Video Lightbox Modal ---------- */
const modal = document.getElementById("modal");
const modalMedia = document.getElementById("modalMedia");
const modalTitle = document.getElementById("modalTitle");
const modalExt = document.getElementById("modalExt");
const modalBox = modal ? modal.querySelector(".modal__box") : null;

function openModal(item) {
  if (!modal || !modalMedia || !modalBox) return;

  const previewUrl = `https://drive.google.com/file/d/${item.driveId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${item.driveId}/view`;

  modalMedia.innerHTML = `
    <div class="modal__loader" id="modalLoader">
      <span class="modal__spinner" aria-hidden="true"></span>
      <span>Loading video…</span>
    </div>
  `;
  modalBox.classList.add("is-vertical");

  if (modalTitle) {
    modalTitle.textContent = `${item.num} — ${item.title}`;
  }
  if (modalExt) {
    modalExt.href = viewUrl;
  }

  const iframe = document.createElement("iframe");
  iframe.src = previewUrl;
  iframe.title = `${item.num} — ${item.title}`;
  iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  iframe.allowFullscreen = true;
  iframe.addEventListener("load", () => {
    const loader = document.getElementById("modalLoader");
    if (loader) loader.remove();
  });

  modalMedia.appendChild(iframe);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal || !modalMedia) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalMedia.innerHTML = "";
  document.body.style.overflow = "";
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-close")) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
}

/* ---------- Reveal on Scroll ---------- */
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}
