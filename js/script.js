// CONSEGNA
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

const student = {
    "nome": "Giorgio",
    "cognome": "Piersanti",
    "eta": 19
}

// Senza ciclo 
// console.log(studente.nome);
// console.log(studente.cognome);
// console.log(studente.eta);

// Con ciclo 
// for ( let key in student ) {
//     console.log(student[key]);
// }

// Parte 2 
const students = [

    {
        "nome": "Marco",
        "cognome": "Fornaroli",
        "eta": 15
    },
    {
        "nome": "Silvio",
        "cognome": "Rossi",
        "eta": 16
    },
    {
        "nome": "Filippo",
        "cognome": "Verdini",
        "eta": 15
    },
    {
        "nome": "Giancarlo",
        "cognome": "Sabatini",
        "eta": 19
    }

];

// for ( let i = 0; i < students.length; i++ ) {
//     thisStudent = students[i];
    
//     for ( let key in thisStudent ) {
//         console.log( key + ":" + thisStudent[key]);
//     }
// }

// Parte 3 
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
let userStudentName = prompt('Dimmi il tuo nome');
let userStudentLastName = prompt('Dimmi il tuo cognome');
let userStudentAge = parseInt( prompt('Dimmi la tua eta') );

const userStudent = {
    "nome": userStudentName,
    "cognome": userStudentLastName,
    "eta": userStudentAge
};

students.push(userStudent);

for ( let i = 0; i < students.length; i++ ) {
    thisStudent = students[i];
    console.log( thisStudent.nome + " " + thisStudent.cognome );
}