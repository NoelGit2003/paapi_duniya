// // JavaScript is not needed if you want the images to change automatically.

// // If you want to manually control the image transition, you can use JavaScript.
// // Here's a basic example of how to achieve that:
// const images = document.querySelectorAll('.image-slider img');
// let currentIndex = 0;

// function showImage(index) {
//     images.forEach((image, i) => {
//         if (i === index) {
//             image.classList.add('active');
//         } else {
//             image.classList.remove('active');
//         }
//     });
// }

// function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
// }

// // You can then trigger the `nextImage` function based on user interaction or a timer.
// // For example, to automatically change the image every 5 seconds:
// setInterval(nextImage, 5000);
