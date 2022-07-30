const initiales: string[]= [
    'JL',
    'MPB',
    'T',
    'P',
    'O',
    'V',
    'JL',
    'O'
]

console.log(`Le tableau contient : ${initiales.length} éléments`)

// Créer un tableau vide
const uniqueValues: string[] = []

// Première boucle pour parcourir chacun des éléments du premier tableau
for (let indice1: number = 0; indice1 < initiales.length; indice1++) {
    const initialeDuPremierTableau: string = initiales[indice1]
    let initialePresenteDansLeSecondTableau: number = 0
    // Seconde boucle pour parcourir chacun des éléments du second tableau
    for (let indice2: number = 0; indice2 < uniqueValues.length; indice2++) {
        const initialeDuSecondTableau: string = uniqueValues[indice2]
        if (initialeDuPremierTableau === initialeDuSecondTableau) {
            initialePresenteDansLeSecondTableau = 1
            break
        }
    }
    // Vérifier si je peux ajouter l'initiale dans le second tableau
    if (initialePresenteDansLeSecondTableau === 0) {
        uniqueValues.push(initialeDuPremierTableau)
    }
}

console.log(`uniqueValues doit contenir ${uniqueValues.length} éléments`)


const sujets: string[] = [
    'je', 'tu', 'il', 'elle' 
]

const verbes: string[] = [
    'mange', 'détruit', 'boit', 'exécute', 'nettoie', 'rape'
]

const complements: string[] = [
    'des fourmis', 'du fromage', 'des nains', 'du kfé'
]

const randomize = (max: number) => Math.floor(Math.random() * max) + 1

function random(max: number) {
    return Math.floor(Math.random() * max) + 1
}

// Test
for (let occ: number = 0; occ <= 5; occ++) {
    const sujet = sujets[randomize(sujets.length - 1)]
    const verbe = verbes[randomize(verbes.length - 1)]
    const cpl = complements[randomize(complements.length - 1)]

    console.log(`${sujet} ${verbe} ${cpl}`)
}

let highest = 30
console.log(Math.floor(Math.random()*highest) + 1)

function getRandom(highest: number) {
    return Math.floor(Math.random()*highest) + 1
}

const getRandomAsArrow = (highest: number) => {
    return Math.floor(Math.random()*highest) + 1
}

console.log(getRandom(12))

console.log(getRandomAsArrow(18))