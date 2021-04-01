class Personne {
    constructor(nom, prenom, age, description) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age
      this.description = description;
    }
  }

  let moi = new Personne("Capiaux", "Charles", "20 ans", "Développeur en alternance chez Compufirst");
  let r_one = new Personne("Le Goff", "Erwan", "22 ans", "Egalement developpeur chez compufirst");
  let aymeric = new Personne("Trouillard", "Aymeric", "vieux", "Un autre developpeur chez compufirst")

  let tab = [];
  let cpt = 0;

  tab.push(moi);
  tab.push(r_one);
  tab.push(aymeric);

  changementPersonne();
  

  $('#next').click(function() {
    cpt++;
    if(cpt == tab.length){
        cpt = 0;
    }
    changementPersonne();
    });

    $('#prev').click(function() {
        if(cpt == 0){
            cpt = tab.length;
        }
        
        cpt--;
        changementPersonne();
        });

  $('#recur').click(function() {
    recursive(10);
    });

function changementPersonne(){
    $('.card-title').html(tab[cpt].prenom + " " + tab[cpt].nom);
        $('.card-subtitle').html(tab[cpt].description);
        $('.card-text').html(tab[cpt].age);
}

/*function loadPersonneJSON(monObjet){
  let res = new Personne(monObjet.);
  return res;
}*/