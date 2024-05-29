//ЗАВДАННЯ 5

window.addEventListener('click', function(event) {
    const placeDiv = document.getElementById('place');
    const clickedInside = placeDiv.contains(event.target);
    console.log(clickedInside);
});
