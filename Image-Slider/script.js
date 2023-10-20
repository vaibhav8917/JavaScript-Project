const images = document.querySelectorAll('.container img');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function displayImage(index) {
    if(index < 0){
        currentIndex = images.length -1;
    }
    else if(index >= images.length){
        currentIndex = 0;
    }

    images.forEach((img) => img.style.display = 'none');

    images[currentIndex].style.display = "block";

    dots.forEach((dot, i) => {
        if (i == index) {
            dot.classList.add('active');
            console.log(i);
        } else {
            dot.classList.remove('active');
        }
    });
}

displayImage(currentIndex);

next.addEventListener('click', () => {
    currentIndex++;
    displayImage(currentIndex);
});

previous.addEventListener('click', () => {
    currentIndex--;
    displayImage(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        displayImage(currentIndex);

        
    })
})



