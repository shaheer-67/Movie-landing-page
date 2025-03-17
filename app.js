





// Arrow function for movie list scrolling
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const movieList = movieLists[i];
  const itemNumber = movieList.querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const screenWidth = window.innerWidth;
    let visibleMovies;
    let maxClicks;

    // Calculate the number of visible movies based on screen width
    if (screenWidth >= 1200) {
      visibleMovies = 4; // 4 movies visible on large screens
      maxClicks = 6; // Reset after 6 clicks for large screens
    } else if (screenWidth >= 940) {
      visibleMovies = 3; // 3 movies visible on medium screens
      maxClicks = 6; // Reset after 6 clicks for medium screens
    } else if (screenWidth >= 768) {
      visibleMovies = 2; // 2 movies visible on tablets (iPad)
      maxClicks = 3; // Reset after 3 clicks for tablets
    } else {
      visibleMovies = 1; // 1 movie visible on mobile phones
      maxClicks = 3; // Reset after 3 clicks for mobile phones
    }

    clickCounter++;

    // Check if the click counter exceeds the max allowed clicks for the screen size, then reset to the first movie
    if (clickCounter >= maxClicks) {
      movieList.style.transform = "translateX(0)"; // Reset to the first movie
      clickCounter = 0; // Reset the counter
    } else {
      // Check if we can move the list to the right
      if (itemNumber - (visibleMovies + clickCounter) >= 0) {
        movieList.style.transform = `translateX(${
          movieList.computedStyleMap().get("transform")[0].x.value - 300
        }px)`; // Move right
      } else {
        // Loop back to the start
        movieList.style.transform = "translateX(0)";
        clickCounter = 0; // Reset the counter
      }
    }
  });
});

// Toggle button for dark/light mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .sidebar, .left-menu-icons, .navbar-container, .movie-list-title, .toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });

  ball.classList.toggle("active");
});
