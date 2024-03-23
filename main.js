const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const alt_txt = {
    pic1: "Picture 1",
    pic2: "Picture 2",
    pic3: "Picture 3",
    pic4: "Picture 4",
    pic5: "Picture 5"
};

/* Looping through images */

for (let i = 0; i< images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', alt_txt[i]);
    thumbBar.appendChild(newImage);

    newImage.onclick = function () {
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt');

        displayedImage.setAttribute('src', src);
        displayedImage.setAttribute('alt', alt);


    };
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
    }
};