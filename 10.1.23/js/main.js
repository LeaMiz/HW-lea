var result = []
var listeEleves = []


for(let i=1; i < 5 ; i++) {
    var nomEleve = prompt("Prenom de l'eleve" + i);
    var noteEleve = prompt("Note de l'eleve" + i); 
    listeEleves.push(nomEleve);
    result.push(noteEleve);
}
for (let i=0; i <result.length; i++){
    if(result [i]>=70)
    {
        examValid = true ;
        document.write("<h2>Indice : " + (i) + "Prenom de l'eleve: " + listeEleves[i] + "Note: "+result[i] + "</h2>");
    }

} 
