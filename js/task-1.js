let items = document.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  showCategoryInfo(item);
});

function showCategoryInfo(category) {
  let categoryTitle = category.querySelector("h2").textContent;
  let categoryElementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
}
/*
Покращення:

Змінна items могла б мати більш описову назву, таку як categoryItems, 
щоб краще представляти те, що вона вибирає.
В функції showCategoryInfo при отриманні кількості categoryElementsCount враховується 
також елемент h2, оскільки запит category.querySelectorAll("li") вибирає всі елементи 
li в межах category. Це включає в себе елементи li, що вказані у вкладеному ul, 
так і будь-які інші потенційні елементи li, які можуть бути добавлені до розмітки в 
межах category у майбутньому. Селектор повинен бути більш специфічним, щоб впевнитися, 
що рахуються лише елементи списку в межах вкладеного ul.
*/