const worksEndpoint = 'http://localhost:5678/api/works';

fetch(worksEndpoint)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Données récupérées:', data);

/**Création des éléments */
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

/** Création des sous-éléments de l'élément "catégorie" */
        const idElement = document.createElement("p");
        idElement.innerText  = 'id';

        const nameElement = document.createElement("p");
        nameElement = "name";

/**Récupération de la section Gallery */
        const sectionGallery = document.querySelector(".gallery");

/**Ajout des éléments à la section gallery */
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


