const apprenants = require("./data");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function afficherMenu() {
  console.log("\nSAS PROGRESS CONSOLE");
  console.log("1. Afficher le tableau de bord");
  console.log("2. Afficher la liste des apprenants");
  console.log("3. Ajouter un apprenant");
  console.log("4. Consulter un apprenant");
  console.log("5. Ajouter ou modifier un résultat");
  console.log("6. Rechercher un apprenant");
  console.log("7. Filtrer par niveau");
  console.log("8. Trier par progression");
  console.log("9. Trier alphabétique");
  console.log("0. Quitter");
}
function demanderChoix() {

  afficherMenu();

  rl.question("Votre choix : ", function(choix) {

    if (choix === "0") {

      console.log("Au revoir !");
      rl.close();

    } else if (choix === "1") {

      afficherTableauDeBord();
      demanderChoix();

    } else if (choix === "2") {

      console.log("Liste des apprenants :");
      console.log(apprenants);
      demanderChoix();

    } else if (choix === "3") {

      ajouterApprenant();

    } else if (choix === "4") {

      consulterApprenant();

    } else if (choix === "5") {

      enregistrerResultat();

    } else if (choix === "6") {

      rechercherApprenant();

    } else if (choix === "7") {

      filtrerParNiveau();

    } else if (choix === "8") {

      trierParProgression(apprenants);
      console.log(apprenants);
      demanderChoix();

    } else if (choix === "9") {

      trierAlphabetique(apprenants);
      console.log(apprenants);
      demanderChoix();

    } else {

      console.log("Choix invalide");
      demanderChoix();

    }
  });
}
function afficherTableauDeBord() {

  console.log("\n--- TABLEAU DE BORD ---");

  console.log("Nombre total d'apprenants :", apprenants.length);

}
demanderChoix();