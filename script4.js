//ЗАВДАННЯ 7
// Отримання елемента ul#categories
const categoriesList = document.getElementById('categories');

// Отримання всіх елементів li.item
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

// Перебір кожного елемента li.item
categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const itemCount = item.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryTitle}, Number of items: ${itemCount}`);
});
