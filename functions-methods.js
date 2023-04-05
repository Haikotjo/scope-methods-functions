// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

const domain = ["n.eeken@novi-education.nl", "t.mellink@novi.nl", "a.wiersma@outlook.com"]

const giveDomain = (number) => {
    const iNumber = 1 + domain[number].indexOf('@')
    const domainName = domain[number].substring(iNumber, domain[number].length)
    console.log(domainName)
}
giveDomain(2)


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

const email = ["n.eeken@novi-education.nl","t.mellink@novi.nl", "novi.nlaapjesk@outlook.com", "a.wiersma@outlook.com"]
    const typeOfEmail = () =>{
        for (let i = 0; i < email.length; i++) {
        if (email[i].includes('@novi-education')) {
            console.log(email[i] + ' ' + 'Student')
        } else if (email[i].includes('@novi.nl')) {
            console.log(email[i] + ' ' + 'Medewerker')
        } else {
            console.log(email[i] + ' ' + 'extern')
        }
    }
}
typeOfEmail()

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const eMailA = ["n.eeken@novi.nl", "tessmellink@novi.nl", "n.eekenanovi.nl", "n.eeken@novinl.", "tessmellink@novi,nl"]
console.log(eMailA)
const eMailCheck = () => {
    for (let i = 0; i < eMailA.length; i++) {
        if (eMailA[i].includes('@')) {
            if (eMailA[i].includes(',')) {

                console.log('geen , gebruiken')
            } else if (eMailA[i].charAt(eMailA[i].length - 1) === '.') {
                console.log('. op het eind')

            }
        } else {
            console.log('Geen @')
        }
    }

}

eMailCheck()
console.log('hallo')
