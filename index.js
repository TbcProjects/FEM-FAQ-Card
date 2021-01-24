const accordions = document.getElementsByClassName("accordion");

for (const acc of accordions) {
  acc.addEventListener("click", openAccordion);

  //
  function openAccordion(e) {
    let content = acc.nextElementSibling;
    let mHeight = content.style.maxHeight;
    let title = acc.firstElementChild;
    let icon = acc.lastElementChild;

    // open content
    if (mHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    // make title bold when active
    if (!mHeight) {
      title.classList.add("title-active");
    } else {
      title.classList.remove("title-active");
    }

    // rotate chevron 180deg
    if (!mHeight) {
      icon.classList.add("icon-active");
    } else {
      icon.classList.remove("icon-active");
    }
  }
}


