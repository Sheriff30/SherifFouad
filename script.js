const bio = document.querySelector(".bio");
const project = document.querySelector(".projects");
const aboutBTN = document.querySelector(".aboutbtn");
const projectBTN = document.querySelector(".projectbtn");

function handleIntersection1(entries, observer) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      console.log("hi");
      aboutBTN.id = "active";
      projectBTN.removeAttribute("id");
    } else {
      aboutBTN.removeAttribute("id");
      projectBTN.id = "active";
    }
  });
}

// Create an Intersection Observer
const observer1 = new IntersectionObserver(handleIntersection1, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
});

// Observe the content element
observer1.observe(bio);
/////////////////////////////////////////////////////////////////////////////

function handleIntersection2(entries, observer) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      projectBTN.id = "active";
      aboutBTN.removeAttribute("id");
    } else {
      projectBTN.removeAttribute("id");
      aboutBTN.id = "active";
    }
  });
}

// Create an Intersection Observer
const observer2 = new IntersectionObserver(handleIntersection2, {
  root: null,
  rootMargin: "0px",
  threshold: "0.5",
});

// Observe the content element
observer2.observe(project);
