// Находим все слайдеры на странице
document.querySelectorAll(".slider-container").forEach(container => {
  const slider = container.querySelector(".slider");
  const prev = container.querySelector(".prev");
  const next = container.querySelector(".next");

  if (!slider || !prev || !next) return; // если чего-то нет — пропускаем

  // ширина карточки + зазор (берём первую карточку)
  const card = slider.querySelector(".product");
  const cardWidth = card ? card.offsetWidth + 22 : 300; 

  // листаем на 2 карточки
  prev.addEventListener("click", () => {
    slider.scrollBy({ left: -(cardWidth * 2), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    slider.scrollBy({ left: cardWidth * 2, behavior: "smooth" });
  });
});
