const worksEndpoint = 'http://localhost:5678/api/';

function category() {
    const sectionGallery = document.querySelector(".gallery");
    const sectionPortfolio = document.querySelector("#portfolio");
     let divButton = document.createElement("div")
    divButton.setAttribute("class","filtres")

    let Button = document.createElement("button")
    Button.setAttribute("class","button")
    Button.innerText="Tous"

    divButton.append(Button)

    
   sectionPortfolio.insertBefore(divButton,sectionGallery)
} 

async function afficheButton() {
    let response = await fetch(worksEndpoint+"categories")
    let categories = await response.json()
   
        for(let i = 0; i < categories.length; i++){
            console.log(categories[i].name)
category()
}}
afficheButton()


/**
fetch(worksEndpoint +works)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Données récupérées:', data);


// Création des sous-éléments de l'élément "catégorie" 
const nameElement = document.createElement("p");
nameElement = "name";


//Création des éléments 
        const imageElement = document.createElement("img");
        imageElement.src = "http://localhost:5678/images/abajour-tahina1651286843956.png";

        const titleElement = document.createElement("figcaption");
        titleElement.innerText = "title";

        const idElement = document.createElement("p");
        idElement.innerText  = 'id';

        const categoryIdElement = document.createElement("p");
        categoryIdElement = "categoryId";

        const userIdElement = document.createElement("p");
        userIdElement = "userId"

        const categoryElement = document.createElement("p");
        categoryElement = "category";


//Récupération de la section Gallery 
        const sectionGallery = document.querySelector(".gallery");

//Ajout des éléments à la section gallery
        sectionGallery.appendChild(imageElement);
        sectionGallery.appendChild(titleElement);
        sectionGallery.appendChild(idElement);
        sectionGallery.appendChild(categoryIdElement);
        sectionGallery.appendChild(userIdElement);
        sectionGallery.appendChild(categoryElement);
    })


    .catch((error) => {
        console.error('Erreur lors de la récupération des fichiers:', error);
    });
*/

