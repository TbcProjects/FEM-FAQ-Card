const accordions = document.getElementsByClassName("accordion");
const accTitle = document.querySelectorAll(".accordion__title");
const accIcon = document.querySelectorAll(".accordion__icon");

// query accordion, title and icon
// create master function to call on listener

for (const acc of accordions) {
  acc.addEventListener("click", openAccordion);

  function openAccordion() {
    openContent();
    highLight();
    rotateIcon();
  }

  const openContent = () => {
    let content = acc.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  const highLight = () => {
    accTitle.forEach((title) => {
      let classes = title.classList;
      if (classes.contains("title-active")) {
        classes.remove("title-active");
      } else {
        classes.add("title-active");
      }
    });
  };

  const rotateIcon = () => {
    accIcon.forEach((icon) => {
      let classes = icon.classList;
      if (classes.contains("icon-active")) {
        classes.remove("icon-active");
      } else {
        classes.add("icon-active");
      }
    });
  };
}

// Checkers
console.log(accIcon);
