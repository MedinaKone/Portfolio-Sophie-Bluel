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
    })
    .catch((error) => {
        console.error('Erreur lors de la récupération des fichiers:', error);
    });
