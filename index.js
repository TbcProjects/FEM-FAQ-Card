const accordions = document.getElementsByClassName("accordion");
const icons = document.getElementsByClassName("fa-chevron-down");

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
