const worksEndpoint = 'http://localhost:5678/api/';

// Fonction pour créer un bouton avec un nom donné
function createButton(name) {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.innerText = name; // Nom affiché sur le bouton
    return button; // Retourne le bouton créé
}

// Fonction pour ajouter des boutons au conteneur
function category(categoryNames) {
    const sectionGallery = document.querySelector(".gallery");
    const sectionPortfolio = document.querySelector("#portfolio");

    let divButton = document.createElement("div");
    divButton.setAttribute("class", "filtres");

    // Créer des boutons pour chaque nom de catégorie
    categoryNames.forEach((name) => {
        const button = createButton(name);
        divButton.appendChild(button); // Ajouter le bouton au div
    });

    sectionPortfolio.insertBefore(divButton, sectionGallery); // Insérer le conteneur avant la galerie
}

// Fonction asynchrone pour obtenir les catégories de l'API et créer des boutons
async function afficheButton() {
    try {
        const response = await fetch(worksEndpoint + "categories");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des catégories");
        }

        const categories = await response.json(); // Obtenir les données de l'API
        
        // Créer un tableau de noms de catégories
        const categoryNames = categories.map(category => category.name);
        
        // Ajouter le bouton "Tous" et d'autres boutons basés sur les catégories
        category(["Tous", ...categoryNames]); // Ajouter le bouton "Tous" au début du tableau de noms
        
    } catch (error) {
        console.error("Erreur lors de l'affichage des boutons :", error);
    }
}

// Appeler la fonction pour afficher les boutons
afficheButton();




// Fonction asynchrone pour obtenir des données de l'API et afficher les images
async function afficherImages() {
    try {
        // Récupérer les données de l'API
        const response = await fetch("http://localhost:5678/api/works/");

        // Vérifier si la réponse est correcte
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données.");
        }

        // Convertir la réponse en tableau d'objets
        const imageData = await response.json();

        // Obtenir la section de galerie une seule fois
        const sectionGallery = document.querySelector('.gallery');

        if (!sectionGallery) {
            console.error("Section .gallery introuvable.");
            return; // Quitter si la section n'existe pas
        }

        // Vérifier si les données sont un tableau et s'il y a des éléments
        if (!Array.isArray(imageData) || imageData.length === 0) {
            console.warn("Aucune image à afficher.");
            return;
        }

        // Parcourir les données pour afficher les images
        for (let i = 0; i < imageData.length; i++) {
            let imageElement = document.createElement("img"); // Créer un élément image
            imageElement.src = imageData[i].imageUrl; // Définir la source de l'image avec la propriété `imageUrl`
            imageElement.alt = `Image ${i + 1}`; // Texte alternatif pour l'accessibilité

            imageElement.onerror = () => {
                console.error("Impossible de charger l'image :", imageData[i].imageUrl); // Gérer les erreurs de chargement
            };

            sectionGallery.appendChild(imageElement); // Ajouter l'image à la section
        }
    } catch (error) {
        console.error("Erreur dans afficherImages :", error); // Gérer les erreurs
    }
}

// Appel de la fonction pour afficher les images
afficherImages();

