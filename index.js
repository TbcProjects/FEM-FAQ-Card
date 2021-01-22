const accordions = document.getElementsByClassName("accordion");
const accIcon = document.querySelectorAll(".accordion");
const accTitle = document.querySelectorAll(".accordion__title");

//
accIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const content = icon.nextElementSibling;
    if (content.style.maxHeight) {
      icon.classList.remove("active");
    } else {
      icon.classList.add("active");
    }
  });
});

accTitle.forEach((title) => {
  title.addEventListener("click", (e) => {
    const t = title.classList;

    if (!t.contains("title-active")) {
      t.add("title-active");
    } else {
      t.remove("title-active");
    }
  });
});

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    const content = accordions[i].nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
