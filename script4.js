// Отримання елемента ul#categories
const categoriesList = document.getElementById('categories');

// Отримання всіх елементів li.item
const categoryItems = categoriesList.querySelectorAll('.item');

// Виведення кількості категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Перебір кожного елемента li.item
categoryItems.forEach(item => {
    // Отримання тексту заголовку h2
    const categoryTitle = item.querySelector('h2').textContent;
    // Отримання кількості вкладених елементів li
    const itemCount = item.querySelectorAll('ul li').length;
    // Виведення заголовку і кількості елементів у категорії
    console.log(`Category: ${categoryTitle}, Number of items: ${itemCount}`);
});
