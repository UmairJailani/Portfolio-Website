const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);

const nextButton = document.querySelector(".carousel-button.right");

const prevButton = document.querySelector(".carousel-button.left");

document.getElementById("logo").addEventListener("click", function () {
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const targetSection = document.querySelector(this.getAttribute("href"));

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
});

const itemWidth = items[0].getBoundingClientRect().width;
let currentIndex = 0;

// Arrange items in a row (if not full width)
items.forEach((item, index) => {
  item.style.left = itemWidth * index + "px";
});

function updateCarousel(position) {
  track.style.transform = "translateX(-" + position + "px)";
}

// Move to next item
nextButton.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first item
  }
  updateCarousel(currentIndex * itemWidth);
});

// Move to previous item
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1; // Loop back to the last item
  }
  updateCarousel(currentIndex * itemWidth);
});
