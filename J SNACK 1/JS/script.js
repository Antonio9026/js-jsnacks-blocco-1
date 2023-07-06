// Snack1
// Generatore di “nomi cognomi” casuali:
// il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


const nomi = ["Antonio ","Marco ","Paolo ","Luca ","Stefano "];
const cognomi = ["Galli ","Rossi ","Bianchi ","Stefanoni ","Belda "]


for (let i = 0; i < nomi.length && cognomi.length ; i++) {

   const randomName = nomi[ Math.floor(Math.random() * nomi.length)];
    // console.log(randomName);
    const randomSurname = cognomi[ Math.floor(Math.random() * cognomi.length)];
    // console.log(randomSurname);
    const listaInvitati = randomName + "" + randomSurname;
    console.log(listaInvitati);
};





