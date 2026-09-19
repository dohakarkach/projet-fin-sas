/*"const apprenants = require("./data");
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
demanderChoix();*/
/*const apprenants = require("./data");
const readline = require("readline");
const prompt = require("prompt-sync")();

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
demanderChoix();*/
/*const apprenants = require("./data");
const prompt = require("prompt-sync")();

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

  let continuer = true;

  while (continuer) {

    afficherMenu();

    let choix = prompt("Votre choix : ");

    if (choix === "0") {

      console.log("Au revoir !");
      continuer = false;

    } else if (choix === "1") {

      afficherTableauDeBord();

    } else if (choix === "2") {

      console.log("Liste des apprenants :");
      console.log(apprenants);

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

    } else if (choix === "9") {

      trierAlphabetique(apprenants);
      console.log(apprenants);

    } else {

      console.log("Choix invalide");

    }
  }
}

function afficherTableauDeBord() {

  console.log("\n--- TABLEAU DE BORD ---");

  console.log("Nombre total d'apprenants :", apprenants.length);

}

demanderChoix();*/

/*const apprenants = require("./data");
const prompt = require("prompt-sync")();
const {
  ajouterApprenant,
  enregistrerResultat,
  rechercherApprenant,
  filtrerParNiveau,
  trierParProgression,
  trierAlphabetique,
  consulterApprenant,
  afficherTableauDeBord
} = require("./progress");

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

  let continuer = true;

  while (continuer) {

    afficherMenu();

    let choix = prompt("Votre choix : ");

    if (choix === "0") {

      console.log("Au revoir !");
      continuer = false;

    } else if (choix === "1") {

      afficherTableauDeBord(apprenants);

    } else if (choix === "2") {

      console.log("Liste des apprenants :");
      console.log(apprenants);

    } else if (choix === "3") {

      let id = Number(prompt("ID du nouvel apprenant : "));
      let nomcomplet = prompt("Nom complet : ");
      let ville = prompt("Ville : ");

      let nouvelApprenant = {
        id: id,
        nomcomplet: nomcomplet,
        ville: ville,
        resultats: []
      };

      let succes = ajouterApprenant(apprenants, nouvelApprenant);

      if (succes) {
        console.log("Apprenant ajouté !");
      } else {
        console.log("Un apprenant avec cet ID existe déjà.");
      }

    } else if (choix === "4") {

      let idRecherche = Number(prompt("ID de l'apprenant à consulter : "));
      let trouve = consulterApprenant(apprenants, idRecherche);

      if (trouve) {
        console.log(trouve);
      } else {
        console.log("Aucun apprenant trouvé avec cet ID.");
      }

    } else if (choix === "5") {

      let idApprenant = Number(prompt("ID de l'apprenant : "));
      let apprenant = consulterApprenant(apprenants, idApprenant);

      if (!apprenant) {
        console.log("Aucun apprenant trouvé avec cet ID.");
      } else {

        let jour = Number(prompt("Jour (1-7) : "));
        let exercicesTermines = Number(prompt("Exercices terminés : "));
        let totalExercices = Number(prompt("Total d'exercices : "));
        let challengeTermine = prompt("Challenge terminé ? (oui/non) : ") === "oui";

        let resultat = {
          jour: jour,
          exercicesTermines: exercicesTermines,
          totalExercices: totalExercices,
          challengeTermine: challengeTermine
        };

        let succes = enregistrerResultat(apprenant, resultat);

        if (succes) {
          console.log("Résultat enregistré !");
        } else {
          console.log("Résultat invalide.");
        }
      }

    } else if (choix === "6") {

      let idRecherche = Number(prompt("ID à rechercher : "));
      let apprenant = rechercherApprenant(apprenants, idRecherche);

      if (apprenant) {
        console.log(apprenant);
      } else {
        console.log("Aucun apprenant trouvé avec cet ID.");
      }

    } else if (choix === "7") {

      let niveau = prompt("Niveau (solide / En progression / a renforcer) : ");
      let resultats = filtrerParNiveau(apprenants, niveau);
      console.log(resultats);

    } else if (choix === "8") {

      trierParProgression(apprenants);
      console.log(apprenants);

    } else if (choix === "9") {

      trierAlphabetique(apprenants);
      console.log(apprenants);

    } else {

      console.log("Choix invalide");

    }
  }
}

demanderChoix();*/
const apprenants = require("./data");
const prompt = require("prompt-sync")();
const {
  ajouterApprenant,
  enregistrerResultat,
  rechercherApprenant,
  filtrerParNiveau,
  trierParProgression,
  trierAlphabetique,
  consulterApprenant,
  afficherTableauDeBord
} = require("./progress");

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

  let continuer = true;

  while (continuer) {

    console.clear();
    afficherMenu();

    let choix = prompt("Votre choix : ");

    if (choix === "0") {

      console.log("Au revoir !");
      continuer = false;

    } else if (choix === "1") {

      afficherTableauDeBord(apprenants);
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else if (choix === "2") {

      console.log("Liste des apprenants :");
      console.log(apprenants);
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else if (choix === "3") {

      let id = Number(prompt("ID du nouvel apprenant : "));
      let nomcomplet = prompt("Nom complet : ");
      let ville = prompt("Ville : ");

      let nouvelApprenant = {
        id: id,
        nomcomplet: nomcomplet,
        ville: ville,
        resultats: []
      };

      let succes = ajouterApprenant(apprenants, nouvelApprenant);

      if (succes) {
        console.log("Apprenant ajouté !");
      } else {
        console.log("Un apprenant avec cet ID existe déjà.");
      }
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else if (choix === "4") {

      let idRecherche = Number(prompt("ID de l'apprenant à consulter : "));
      let trouve = consulterApprenant(apprenants, idRecherche);

      if (trouve) {
        console.log(trouve);
      } else {
        console.log("Aucun apprenant trouvé avec cet ID.");
      }
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else if (choix === "5") {

      let idApprenant = Number(prompt("ID de l'apprenant : "));
      let apprenant = consulterApprenant(apprenants, idApprenant);

      if (!apprenant) {
        console.log("Aucun apprenant trouvé avec cet ID.");
      } else {

        let jour = Number(prompt("Jour (1-7) : "));
        let exercicesTermines = Number(prompt("Exercices terminés : "));
        let totalExercices = Number(prompt("Total d'exercices : "));
        let challengeTermine = prompt("Challenge terminé ? (oui/non) : ") === "oui";

        let resultat = {
          jour: jour,
          exercicesTermines: exercicesTermines,
          totalExercices: totalExercices,
          challengeTermine: challengeTermine
        };

        let succes = enregistrerResultat(apprenant, resultat);

        if (succes) {
          console.log("Résultat enregistré !");
        } else {
          console.log("Résultat invalide.");
        }
      }
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else if (choix === "6") {

      let idRecherche = Number(prompt("ID à rechercher : "));
      let apprenant = rechercherApprenant(apprenants, idRecherche);

      if (apprenant) {
        console.log(apprenant);
      } else {
        console.log("Aucun apprenant trouvé avec cet ID.");
      }
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else if (choix === "7") {

      let niveau = prompt("Niveau (solide / En progression / a renforcer) : ");
      let resultats = filtrerParNiveau(apprenants, niveau);
      console.log(resultats);
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else if (choix === "8") {

      trierParProgression(apprenants);
      console.log(apprenants);
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else if (choix === "9") {

      trierAlphabetique(apprenants);
      console.log(apprenants);
      prompt("\nAppuyez sur Entrée pour continuer...");

    } else {

      console.log("Choix invalide");
      prompt("\nAppuyez sur Entrée pour continuer...");

    }
  }
}

demanderChoix();