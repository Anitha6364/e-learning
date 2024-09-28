// Optionally, you can dynamically add images using JavaScript
window.onload = function() {
    // Example of dynamically adding an image
    var img = document.createElement('img');
    img.src = 'images/dynamic-course.jpg';
    img.alt = 'Dynamic Course Image';
    img.width = 300;
    img.height = 200;
    document.querySelector('section').appendChild(img);
};
