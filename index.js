const API_KEY = "dfy2-jsvJHP0wxASDypbOYjeZt2J1Lwou2XJpPM_OAk";

function appendImageElement(keyword, index) {
    const imagEle = document.createElement('img');
    //imagEle.src = `https://unsplash.com/?${keyword}&sig=${index}`;
    imagEle.src = `https://api.unsplash.com/search/photos?${keyword}&sig=${index}`;

    const galleryEle = document.querySelector('.gallery');
    galleryEle.appendChild(imagEle);
}

function clearGallery() {
    const galleryEle = document.querySelector('.gallery');
    galleryEle.innerHTML = ''; // Clear previous images
}

function searchPhotos(event){
    const keyword = event.target.value;

    if(event.key === 'Enter' && keyword.trim() !== '') {
        clearGallery(); // Clear previous images
        // Fetch and display 9 images based on the keyword
        // For demonstration, we will just append dummy images
        // In a real application, you would fetch images from an API
        for (let i = 0; i < 9; i++) {
            appendImageElement(keyword, i);
        }
    }
    console.log(keyword);
}

function run() {
    const inputEle = document.querySelector('input');
    inputEle.addEventListener('keydown', searchPhotos);
}

run();

