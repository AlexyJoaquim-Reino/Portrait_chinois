fetch('./js/data.json').then(function(response) { 
    response.json().then(function(data){ 


       //Image d'accueil
        
        var lienimage = data.footer.image_accueil;                                          //côté json// //contient le contenu de image_accueil, à savoir le lien//
        var RecuperationIdDivImage = document.getElementById("ImagePourAccueil");           //du côté de l'html// //On récupère l'ID de la div de l'image en question//
        RecuperationIdDivImage.src = lienimage;
                                                                                            //A l'intérieur de la div qu'on a récupéré, on met le lien de l'image//
                                                                                            // inner html = entre deux div //

       //Texte dans bouton//
        var textebouton = data.footer.boutonfooter;
        var RecuperationIDdivTexte = document.getElementById("bouton");
        RecuperationIDdivTexte = textebouton;



       // carousel
        for (var i = 0; i < data.carousel.images.length; i++){
            //Recuperation des données
            var image_carousel = data.carousel.images[i];
            var titre_carousel = data.carousel.titres[i];
            var texte_carousel = data.carousel.textes[i];

            //Concaténation du texte
            var nomImage = "carousel-image-" + (i + 1);
            var nomTitre = "carousel-titre-" + (i + 1);
            var nomTexte = "carousel-texte-" + (i + 1);

            //Recuperation des balises dans le html
            var divImage = document.getElementById(nomImage);
            var divTitre = document.getElementById(nomTitre);
            var divTexte = document.getElementById(nomTexte);

            //Injection des données dans le html
            divImage.src = image_carousel;
            divTitre.innerHTML = titre_carousel;
            divTexte.innerHTML = texte_carousel;
        }

        // Caractéristiques du formulaire //
        for (var i = 0; i < data.formulaire.titre_texte.length; i++){
            //Recuperation des données
            var titre_formulaire = data.formulaire.titre_texte[i];

            //Concaténation du texte
            var NOMTITRE = "texte" + (i + 1);

            //Recuperation des balises dans le html
            var divTitreFormulaire = document.getElementById(NOMTITRE);

            //Injection des données dans le html
            divTitreFormulaire.innerHTML= titre_formulaire;
        }


        //footer
        for (var i = 0; i < data.footer.TexteFooter.length; i++){
            //Recuperation des données
            var texte_footer = data.footer.TexteFooter[i];

            //Concaténation du texte
            var nomTexteFooter = "TexteFooter" + (i + 1);

            //Recuperation des balises dans le html
            var divTexteFooter = document.getElementById(nomTexteFooter);

            //Injection des données dans le html
            divTexteFooter.innerHTML = texte_footer;

        }
    
        for (var i = 0; i < data.footer.ImageFooter.length; i++){
            //Recuperation des données
            var image_footer = data.footer.ImageFooter[i];

            //Concaténation des images
            var nomImage = "image_footer" + (i + 1);

            //Recuperation des balises dans le html
            var divImage = document.getElementById(nomImage);

            //Injection des données dans le html
            divImage.src = image_footer;
        }


        // Recuperation des données
        var liencarte = data.footer.LienGoogleMap;    // On se dirige vers l'emplacement du lien et on stocke ce lien dans une variable (partie JSON) //
        var divA = document.getElementById("LienGoogleMap"); // On cherche dans le html l'ID de la div qui a pour nom "LienGoogleMap" et on la stocke dans une variable //
        divA.href = liencarte; // Dans la div qui a l'ID recherché, on stocke la variable qui contient le lien qu'on a recherché avec l'instruction data.footer.LienGoogleMap //

    




// Envoie des données dans un formulaire //

document.querySelector("#texte5").addEventListener('click', function(e) {
     

    var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais ... " + document.querySelector("#analogie").value + " je serais ... " + 
    + document.querySelector("#valeurAnalogie").value

    fetch(urlVisitee).then(function(response) {
        response.json().then(function (data) {
            console.log("Réponse reçue : ")
            console.log(data);
            if(data.status == "success"){
            document.querySelector("#messageApresEnvoi").innerHTML = "Votre message a bien été reçu";
            }else{
                document.querySelector("#messageApresEnvoi").innerHTML = "Problème, votre message n'a pas été reçu";
            }
            
        })
    })

});




    }) 
})