/*
let zuccheroBianco = 100
let farina = 50
let ciotola = zuccheroBianco + farina

let a
let b = null
const pi = 3.14
let c = 99         //posso fare questo perchè javascript non è un linguaggio tipizzato 
console.log(c)     //il contenitore è "flessibile" è ciò mi consente di passare da numeri a stringhe senza problemi
c = "messaggio"    //posso fare questo perchè javascript non è un linguaggio tipizzato
console.log(c)
//var non si usa troppo perchè confonde e ha risultati inaspettati per via dello scop

//TIPI SEMPLICI
//valori primitivi

let numero = 10
let frase = "non mi piace"
let bool = true 
let nulla = null
let undefined
let infinity = Infinity
let infinity2 = -Infinity

//il booleano può avere tre valori (se considero anche il boolean undefined)

console.log(ciotola)
console.log(a)
console.log(b)
console.log(pi)
console.log(frase)
console.log(bool)
console.log(typeof bool)
console.log(typeof NaN) //NaN è un valore numerico accettabile (anche se descrive valori tipo sqrt(-1))
console.log(typeof infinity)
console.log(typeof infinity2)
console.log(frase.length)

//TIPI COMPLESSI 
//oggetti sono RACCOLTE di coppie "chiave" "valore". In altri linguaggi di programmazione si chiamano dizionari

const persona = {  //questo è un oggetto in js
    name: "John",
    age: 30,
    weight: 88.1
}

console.log(persona)
console.log(persona.name)

const libro = {      //non potremmo riassegnare una classe libro poichè abbiamo usato const.  
    numero: 3,       
    letto: false,
    tipo: "Fantasy",
    lettori: {
        nome: "Carlo",
        cognome: "Ramponi",
        anni: 12
    },
    prestito: true
}

libro.lettori.cognome = "Mazzotta"
console.log(libro.lettori.cognome)

delete libro.numero
libro.capitolo = 36

console.log(libro)

//operatore +

let pippo1 = 34
let pippo2 = "35"
let pippo3 = pippo1 + pippo2

console.log(pippo3)
console.log(parseInt(pippo2) + pippo1)//ANALISI DEL TIPO
console.log(parseInt(pippo2) + pippo1 + "")//se aggiungo un stringa vuota, mi fa la somma ma il risultato è una stringa
console.log(parseInt(pippo2) + pippo1 + pippo2)//così è più chiaro

//CONFRONTO

const height = 210
console.log(height < 200)
console.log(height == 191) 
//console.log(height = 191)  prova a rifare una riassegnazione con una const quindi mi darà errore
console.log("123"===123) //il triplo uguale controlla anche il tipo

const giostra = (height > 100) && (height <= 200) || (height == 210) //il bambino può magiare gelato solo se non è sulla giostra
const gelato = !giostra

console.log("Giostra", giostra)
console.log("Gelato", gelato)

const pianti = !(gelato || giostra) //se il bambino non ha ne un gelato e non è andato alle giostre frigna
                                    //concatenazione di valori booleni

*/

