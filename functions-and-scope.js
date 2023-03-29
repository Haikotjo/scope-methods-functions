// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const gradesA = [6, 4, 5]
const gradesB = [8, 9, 4, 6, 10]
console.log(grades)

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// Met een arrow function en return value
const cumLaude = () => {
    let cumLaude = null
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            cumLaude ++
        }
    }
    return cumLaude
}
console.log(cumLaude())

// Normale function met console log inplaats van return value
function cumLaudeA() {
    let counter = null
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            counter ++
        }
    }
    console.log(counter)
}
cumLaudeA()

// Met een nieuwe array en felicitaties

const OnlyCumLaudeArray = []
const cumLaudeArray = () => {

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            OnlyCumLaudeArray.push(grades[i])
        }
    }
    return OnlyCumLaudeArray
}
cumLaudeArray()
for (let i = 0; i < OnlyCumLaudeArray.length; i++) {
    console.log('Gefeliciteerd! Je hebt een ' + OnlyCumLaudeArray[i] + ' gehaald.')
}



// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function moreCumLaude(conditon, gradeList ) {
    let newGradList =[]
    for (let i = 0; i < grades.length; i++) {
        if (gradeList[i] >= conditon) {
            newGradList.push(gradeList[i])
        }
    }
    return newGradList
}

const cumLaudeGardelist = moreCumLaude(8, grades)
console.log(cumLaudeGardelist)
const cumLaudeGardelistA = moreCumLaude(8, gradesA)
console.log(cumLaudeGardelistA)
const cumLaudeGardelistB = moreCumLaude(8, gradesB)
console.log(cumLaudeGardelistB)

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// Ik Ben niet zo goed in het omscchrijven an de stapjes. Ik probeer dingen uit ik weer niet helemaal van te voren wat ik doe

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

const avarage = (gradeList) => {
    let total = null
    for (let i = 0; i < gradeList.length; i++) {
        total += gradeList[i]
    }
    return total / gradeList.length
}
const avarageGrade = avarage(grades)
console.log(avarageGrade)

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

const avarageTwo = (gradeList) => {
    let total = null
    for (let i = 0; i < gradeList.length; i++) {
        total += gradeList[i]
    }
    return total / gradeList.length
}
const avarageGradeTwo = avarageTwo(grades)
const rounded = avarageGradeTwo.toFixed(2)
console.log(rounded)


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

const findHighestGrade = (gradeList) => {
    let high = gradeList[0]
    for (let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] > high) {
            high = gradeList[i]
        }
    }
    return high;
}
let highestGrade = findHighestGrade(gradesB)
console.log(highestGrade)

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
