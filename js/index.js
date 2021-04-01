  class Personne {
    constructor(nom, prenom, age, description, experience, realisation) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
      this.description = description;
      this.experience = experience;
      this.realisation = realisation;
    }
  }

  function loadPersonneJSON(unePersonne){
    var res =  new Personne(unePersonne.firstname, unePersonne.lastname, unePersonne.age, unePersonne.job, unePersonne.experience, unePersonne.realisation);
    return res;
  }

  let moi;
  let aymeric;
  let erwan;

  let tab = [];
  let cpt = 0;

  $.getJSON("../js/charles.json").done(function(data){
    moi = loadPersonneJSON(data);
    tab.push(moi);
    changementPersonne();
  });

  $.getJSON("../js/erwan.json").done(function(data){
    erwan = loadPersonneJSON(data);
    tab.push(erwan);
  });

  $.getJSON("../js/aymeric.json").done(function(data){
    aymeric = loadPersonneJSON(data);
    tab.push(aymeric);
  });
  
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

function changementPersonne(){
    $('.card-title').html(tab[cpt].prenom + " " + tab[cpt].nom);
    $('.card-subtitle').html(tab[cpt].description);
    $('.card-text').html(tab[cpt].age);

    var exp = "";
    for(expe of tab[cpt].experience){
      exp += expe.name + " du " + expe.date + " au " + expe.datefin + " : " + expe.description +"</br></br>";
    };
    $('#pbord').html(exp);

    $('#realisation').html(tab[cpt].realisation.title + " : " + tab[cpt].realisation.description );
  }