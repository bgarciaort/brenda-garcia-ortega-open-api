  /** Cat API */    
    
    const API_KEY = "live_SoDfrxb9DUlzHsVFF9SFTIFVGwbgOR5mkOFV21ojwjOrV1Ah8GLCr56RVtgWLIhf"; 
    const CAT_API_URL = "https://api.thecatapi.com/v1/images/search?limit=1";

    function fetchCatImage(){
    fetch(CAT_API_URL, {
        headers: {
            "x-api-key": API_KEY 
        }
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json(); 
      })

    .then(data => {
        const imgElement = document.createElement('img');
        imgElement.src = data[0].url;
        const kittyContainer = document.getElementById('cat-container');
        kittyContainer.innerHTML = ''; 
        kittyContainer.appendChild(imgElement);
    })

    .catch(error => {
        console.error("An error occurred fetching your cat image:", error);
    });

  }
fetchCatImage();

/** Button */

document.getElementById('cat-button').addEventListener('click', fetchCatImage);

/** Footer */

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Brenda García Ortega ${thisYear}`;
copyright.style.fontSize = "15px" 
copyright.style.textAlign = 'right';
copyright.style.marginRight = '20px';
footer.appendChild(copyright);


/** Breed Specific End Point - Bengal Cat  */

const CAT_API_BREED_URL = "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng"; 

function fetchBengalImage(){
    fetch(CAT_API_BREED_URL, {
        headers: {
            "x-api-key": API_KEY 
        }
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json(); 
    })
    .then(data => {
        const imgElement = document.createElement('img');
        imgElement.src = data[0].url;
        const bengalContainer = document.getElementById('bengal-container');
        bengalContainer.innerHTML = ''; 
        bengalContainer.appendChild(imgElement);
    })
    .catch(error => {
        console.error("An error occurred fetching your bengal cat:", error);
    });
}

fetchBengalImage();

document.getElementById('bengal-button').addEventListener('click', fetchBengalImage);
