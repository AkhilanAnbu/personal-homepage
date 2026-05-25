const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

function filterProjects(selectedCategory) {
  projectCards.forEach((card) => {
    const categories = card.dataset.category;

    if (selectedCategory === "all" || categories.includes(selectedCategory)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    filterProjects(selectedCategory);
  });
});
