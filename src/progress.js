
const apprenants = require("./data");

function normaliserNom(nom){
return nom.trim().toLowerCase()
}

function validerResultat(resultat)
{
  if (resultat.jour<1||resultat.jour>7){return false;}
  if (resultat.exercicesTermines<0){return false;}
  if(resultat.exercicesTermines>resultat.totalExercices){return false;}
  return true;
}

function ajouterApprenant(appretants,nouvelApprenant){
for (let i=0;i<appretants.length;i++){

  if(appretants[i].id===nouvelApprenant.id){return false;}
}

appretants.push (nouvelApprenant);
return true;}

function enregistrerResultat(apprenant,resultat){
  if(
validerResultat(resultat)===true){apprenant.resultats.push(resultat);return true;}else{return false; }
   }

function rechercherApprenant(apprenant,rechercher){
  
  for(let i=0;i<apprenant.length;i++){
    if(apprenant[i].id===rechercher)
     return apprenant[i];
    
  }
  return null;
}

function calculerProgression(apprenant){
  let totalExercices=0;
  let totalTermines=0;
  for(let i=0;i<apprenant.resultats.length;i++){
    totalTermines = totalTermines + apprenant.resultats[i].exercicesTermines;
    totalExercices = totalExercices + apprenant.resultats[i].totalExercices;}
    if (totalExercices===0){return 0;}

let progression = (totalTermines / totalExercices) * 100;
return progression;
}

function filtrerParNiveau(apprenant, niveau) {

  let resultats = [];

  for (let i = 0; i < apprenant.length; i++) {

    let progression = calculerProgression(apprenant[i]);

    if (progression >= 80 && niveau === "solide") {
      resultats.push(apprenant[i]);
    }

    if (progression >= 50 && progression < 80 && niveau === "En progression") {
      resultats.push(apprenant[i]);
    }

    if (progression < 50 && niveau === "a renforcer") {
      resultats.push(apprenant[i]);
    }
  }

  return resultats;
}



function trierParProgression(apprenant) {

  apprenant.sort(function(a, b) {

    return calculerProgression(b) - calculerProgression(a);

  });

  return apprenant;
}

function trierAlphabetique(apprenant) {

  apprenant.sort(function(a, b) {

    let nomA = normaliserNom(a.nomcomplet);
    let nomB = normaliserNom(b.nomcomplet);

    if (nomA < nomB) return -1;
    if (nomA > nomB) return 1;
    return 0;

  });

  return apprenant;
}

function consulterApprenant(apprenant, id) {

  for (let i = 0; i < apprenant.length; i++) {
    if (apprenant[i].id === id) {
      return apprenant[i];
    }
  }
  return null;

}

function afficherTableauDeBord(apprenants) {

  console.log("\n--- TABLEAU DE BORD ---");
  console.log("Nombre total d'apprenants :", apprenants.length);

  for (let i = 0; i < apprenants.length; i++) {

    let apprenant = apprenants[i];
    let progression = calculerProgression(apprenant);
    let challengesTermines = 0;

    for (let j = 0; j < apprenant.resultats.length; j++) {

      if (apprenant.resultats[j].challengeTermine === true) {
        challengesTermines++;
      }
    }

    console.log("ID :", apprenant.id);
    console.log("Nom :", apprenant.nomComplet);
    console.log("Ville :", apprenant.ville);
    console.log("Progression :", progression.toFixed(1) + "%");
    console.log("Challenges terminés :", challengesTermines);
    console.log("---");
  }
}
module.exports = {
  normaliserNom,
  validerResultat,
  ajouterApprenant,
  enregistrerResultat,
  rechercherApprenant,
  calculerProgression,
  filtrerParNiveau,
  trierParProgression,
  trierAlphabetique,
  consulterApprenant,
  afficherTableauDeBord
};