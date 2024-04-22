// const { default: Fetch } = require ("happy-dom/lib/fetch/Fetch.js");
const ramenDetail = document.querySelector("#ramen-detail");
const ramenMenu = document.querySelector("#ramen-menu");

// Display the Ramens
const displayRamens = () => {
  document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/ramens")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((ramen) => {
          const img = document.createElement("img");
          img.src = ramen.image;
          img.alt = ramen.name;
          ramenMenu.appendChild(img);

          img.addEventListener("click", () => handleClick(ramen));
        });
      })
      .catch((error) => console.error("Error fetching ramens:", error));
  });
};

// Details of clicked Ramen
const handleClick = (ramen) => {
  const detailImage = ramenDetail.querySelector(".detail-image")
  const nameDetail = ramenDetail.querySelector(".name")
  const restaurantDetail = ramenDetail.querySelector(".restaurant")
  const ratingDetail = document.querySelector("#rating-display")
  const commentDetail = document.querySelector("#comment-display")

  detailImage.src = ramen.image
  nameDetail.textContent = ramen.name
  restaurantDetail.textContent = ramen.restaurant
  ratingDetail.textContent = ramen.rating
  commentDetail.textContent = ramen.comment
}

// Submit new Ramen
const addSubmitListener = () => {
  const newRamenForm = document.querySelector("#new-ramen")
  newRamenForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = newRamenForm.querySelector("#new-name").value
    const restaurant = newRamenForm.querySelector("#new-restaurant").value
    const image = newRamenForm.querySelector("#new-image").value
    const rating = newRamenForm.querySelector("#new-rating").value
    const comment = newRamenForm.querySelector("#new-comment").value

    const newRamen = {name, restaurant, image, rating, comment}
    displayNewRamen(newRamen)
  })
}

const displayNewRamen = (ramen) => {
  const img = document.createElement("img");
  img.src = ramen.image;
  img.alt = ramen.name;
  const ramenMenu = document.getElementById("ramen-menu");
  ramenMenu.appendChild(img);

  img.addEventListener("click", () => {
    updateDetailView(ramen)
  })
};

const updateDetailView = (ramen) => {
  const detailImage = ramenDetail.querySelector(".detail-image")
  const nameDetail = ramenDetail.querySelector(".name")
  const restaurantDetail = ramenDetail.querySelector(".restaurant")
  const ratingDetail = document.querySelector("#rating-display")
  const commentDetail = document.querySelector("#comment-display")

  detailImage.src = ramen.image
  nameDetail.textContent = ramen.name
  restaurantDetail.textContent = ramen.restaurant
  ratingDetail.textContent = ramen.rating
  commentDetail.textContent = ramen.comment
};


const main = () => {
  displayRamens();
  addSubmitListener();
  // Invoke addSubmitListener here
};

main();

// Export functions for testing

export { displayRamens, addSubmitListener, handleClick, main, updateDetailView};
