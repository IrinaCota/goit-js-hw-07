let categoryItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  showCategoryInfo(item);
});

function showCategoryInfo(category) {
  let categoryTitle = category.querySelector("h2").textContent;
  let categoryElementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
}
