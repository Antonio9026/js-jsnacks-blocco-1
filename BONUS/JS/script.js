
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// creo gli array elementi 
const primoEL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const secondoEl = [1, 2, 3, 4, 5]



for (let i = 0; i < primoEL.length; i++) {
    if (secondoEl.length < primoEL.length) {
        secondoEl.push(Math.floor(Math.random() * 10))
    }else{
       
    }
};
console.log(secondoEl);
