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








async function afficherCaptions() {
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
            return;
        }

        // Vérifier que `imageData` est un tableau
        if (!Array.isArray(imageData) || imageData.length === 0) {
            console.warn("Aucune donnée d'image à afficher.");
            return;
        }

        // Parcourir les données pour afficher les images et leurs légendes
        for (let i = 0; i < imageData.length; i++) {
            const imageInfo = imageData[i];

            // Créer l'élément image
            const imageElement = document.createElement("img");
            imageElement.src = imageInfo.imageUrl; // Source de l'image
            imageElement.alt = imageInfo.title || "Image"; // Texte alternatif

            // Créer un élément <figure>
            const figureElement = document.createElement("figure");

            // Ajouter l'image au <figure>
            figureElement.appendChild(imageElement);
            
            // Créer la légende si nécessaire
            if (imageInfo.title) {
                const captionElement = document.createElement("figcaption");
                captionElement.textContent = imageInfo.title; // Définir le texte de la légende

                figureElement.appendChild(captionElement); // Ajouter la légende au <figure>
            }

            // Ajouter le <figure> à la galerie
            sectionGallery.appendChild(figureElement);
        }
    } catch (error) {
        console.error("Erreur dans afficherCaptions :", error); // Gérer les erreurs
    }
}


// Appeler la fonction pour afficher les images et les légendes
afficherCaptions();

