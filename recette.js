// recette.js
// fonction pour la liste des membres
function membre() {
    const liste=document.createElement("section")
    liste.id = "liste"
    liste.style.marginTop = "3cm"
    const titre = document.createElement("h3");
    titre.textContent = "liste des membres";
    const tableau = document.createElement("table")

}
// Fonction principale pour l'étape suivante
function recette(event) {
    if (event) event.preventDefault();

    // Vérifier les cases obligatoires
    const obligatoires = document.querySelectorAll('#form-ingredient input[required]');
    let toutesCochees = true;

    obligatoires.forEach(caseObligatoire => {
        if (!caseObligatoire.checked) {
            toutesCochees = false;
        }
    });

    if (!toutesCochees) {
        alert("Veuillez cocher tous les ingrédients obligatoires avant de continuer !");
        return;
    }

    // Éviter les doublons
    if (document.getElementById("preparation")) {
        return;
    }

    // Créer la nouvelle section
    const nouvelleSection = document.createElement("section");
    nouvelleSection.id = "preparation";
    nouvelleSection.style.marginTop = "3cm";

    const titre = document.createElement("h3");
    titre.textContent = "Processus de préparation du Koki";

const texte = document.createElement("p");
texte.innerText =
    "1. Trier soigneusement les haricots pour enlever les impuretés, puis les faire tremper plusieurs heures afin de ramollir la peau.\n\n" +
    "2. Éplucher les haricots en les frottant entre les mains dans l’eau, puis rincer plusieurs fois pour retirer les peaux.\n\n" +
    "3. Écraser les haricots au mortier ou les mixer jusqu’à obtenir une pâte lisse et homogène.\n\n" +
    "4. Ajouter l’huile de palme préalablement chauffée, du sel et éventuellement du piment, puis bien mélanger.\n\n" +
    "5. Incorporer progressivement de l’eau pour ajuster la consistance : la pâte doit être souple mais pas trop liquide.\n\n" +
    "6. Préparer les feuilles de bananier (les assouplir à la vapeur ou au feu doux pour éviter qu’elles se déchirent).\n\n" +
    "7. Verser la pâte dans les feuilles, former des paquets bien fermés et les attacher avec des fibres naturelles ou du raphia.\n\n" +
    "8. Disposer les paquets dans une marmite, ajouter de l’eau au fond et cuire à la vapeur pendant environ 2 à 3 heures.\n\n" +
    "9. Vérifier la cuisson : le koki doit être ferme au toucher et se découper facilement.\n\n" +
    "10. Servir chaud, accompagné de banane plantain mûre, de manioc ou de macabo.";


    nouvelleSection.appendChild(titre);
    nouvelleSection.appendChild(texte);

    document.querySelector("main").appendChild(nouvelleSection);
}

// Appliquer le style barré et couleur quand une case est cochée
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const label = checkbox.parentElement;
            if (checkbox.checked) {
                label.classList.add("checked");
            } else {
                label.classList.remove("checked");
            }
        });
    });

    // Lier la fonction recette au formulaire accompagnements
    document.getElementById("form-accompagnements").addEventListener("submit", recette);
});



// Exemple de liste de membres
const membres = [
    { nom: "DJUIKAM", prenom: "MIGUELLE", matricule: "23A047CM", filiere: "GEME" },
    { nom: "DJIOFANG", prenom: "ERIC", matricule: "23A046CM", filiere: "GEME" },
    { nom: "JIONGWETH MBA", prenom: "KRIS", matricule: "23A075CM", filiere: "GEME" },
    { nom: "MANGOUA DJOKO", prenom: "YVES", matricule: "25B003CM", filiere: "GEME" },
    { nom: "OWONO BEKONO", prenom: "FRANCIS", matricule: "25B025CM", filiere: "GEME" },
    { nom: "NOUBISSIE", prenom: "DJIBRIL", matricule: "25B028CM", filiere: "GEME" }

];

// Fonction pour afficher la liste
function afficherListe(event) {
    if (event) event.preventDefault();

    // Vérifier si la section existe déjà
    if (document.getElementById("liste-membres")) {
       table.remove();
    }


    // Créer une nouvelle section
    const section = document.createElement("section");
    section.id = "liste-membres";
    section.style.marginTop = "2cm";

    const titre = document.createElement("h3");
    titre.textContent = "Liste des membres";

    // Créer un tableau
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.color = "white";
    table.style.backgroundColor = "rgb(52, 81, 96)"

    // En-tête du tableau
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Nom", "Prénom", "Matricule", "Filiere"].forEach(colonne => {
        const th = document.createElement("th");
        th.textContent = colonne;
        th.style.border = "1px solid white";
        th.style.padding = "8px";
        th.style.backgroundColor = "rgb(2, 105, 156)";
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Corps du tableau
    const tbody = document.createElement("tbody");

    membres.forEach(membre => {
        const row = document.createElement("tr");

        Object.values(membre).forEach(valeur => {
            const td = document.createElement("td");
            td.textContent = valeur;
            td.style.border = "1px solid white";
            td.style.padding = "8px";
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Ajouter tout dans la section
    section.appendChild(titre);
    section.appendChild(table);

    // Ajouter la section dans le main
    document.querySelector("main").appendChild(section);
}

// ⚠️ Lier la fonction au bouton "Liste des membres"
document.addEventListener("DOMContentLoaded", () => {
    const boutonListe = document.getElementById("btn-liste"); // ton bouton doit avoir cet id
    if (boutonListe) {
        boutonListe.addEventListener("click", afficherListe);
    }
});

