function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");
  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  // remove tab description
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  // remove active tab
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// **** project section **** toggle description if image was clicked also remove other descriptions if any are opened
const projectImage = document.querySelectorAll(".project-image");

projectImage.forEach(function (projectImage) {
  projectImage.addEventListener("click", function () {
    if (window.innerWidth <= 576) {
      const clickedImageContainer = document.querySelector(
        ".project-image.clicked"
      );
      if (clickedImageContainer && clickedImageContainer !== projectImage) {
        clickedImageContainer.classList.remove("clicked");
      }
      projectImage.classList.toggle("clicked");
    }
  });
});
