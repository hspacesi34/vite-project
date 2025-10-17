// EXO IMC
class Imc {
    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
        this.imc = this.calculImc();
    }

    calculImc() {
        let imc = (this.poids) / (this.taille*this.taille);
        return imc.toFixed(2);
    }

    display() {
        let phrase = `${this.nom} (${this.poids} kg, ${this.taille} CM) a un IMC de: ${this.imc}`;
        return console.log(phrase);
    }
}

let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55)
]

list.forEach(personne => personne.display());

// EXO PME

class Pme {
    constructor(nom, equipe, revenus, fraisFixe, fraisAchat) {
        this._nom = nom;
        this._equipe = equipe;
        this._revenus = revenus;
        this._fraisFixe = fraisFixe;
        this._fraisAchat = fraisAchat;
        this._coutInitial = this.calculInitial();
        this._coutTotalEquipe = this.calculCoutTotalEquipe();
        this._bilan = this.calculBilan();
    }

    calculInitial() {
        return this._fraisFixe + this._fraisAchat;
    }
    calculCoutTotalEquipe() {
        let salaire = 0;
        this._equipe.forEach(salarie => salaire+= (salarie._salaire += salarie._salaire * salarie._charges));
        return salaire;
    }
    calculBilan() {
        let bilan = this._revenus - (this._coutInitial + this._coutTotalEquipe);
        return bilan;
    }
    displayBilan() {
        return console.log(`
--------------------MA PME--------------------
${this._nom} : Cout Initial : ${this._coutInitial}
${this._nom} : Cout Total Equipe : ${this._coutTotalEquipe}
${this._nom} : VENTES : ${this._revenus}
${this._nom} : BILAN : ${this._bilan}
`)
    }
}

class Employee {
    constructor(nom, prenom, age, salaire) {
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._salaire = salaire * 12;
        this._charges = 0.9;
    }
}

// // Scénario
const pme = new Pme (
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee ("Duval", "Paul", 30, 2000),
    new Employee ("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.displayBilan();

// EXO COMPTES BANCAIRES
class CompteBancaire {
    constructor(nom, solde) {
        this._nom = nom;
        this._solde = solde;
    }

    credit(somme) {
        this._solde += somme;
        console.log(`Ajout de: ${somme} pour ${this._nom}`);
    }
    retrait(somme) {
        if (this._solde < somme) {
            throw new Error(`Retrait de: ${somme} refusé avec solde: ${this._solde}`);
        } else {
            this._solde -= somme;
            console.log(`Retrait de: ${somme} pour ${this._nom}`);
        }
    }
    virement(destinataire, somme) {
        if (this._solde < somme) {
            throw new Error(`Virement de: ${this._nom} vers: ${destinataire._nom} pour ${somme} refusé avec solde: ${this._solde}`);
        } else {
            this._solde -= somme;
            destinataire._solde += somme;
            console.log(`Virement de: ${somme} de: ${this._nom} vers: ${destinataire._nom}`);
        }
    }
    displayAccount() {
        return console.log(`titulaire: ${this._nom}, solde: ${this._solde} euros`);
    }
}

let clients = {
    "Alex":new CompteBancaire("Alex", 0),
    "Clovis":new CompteBancaire("Clovis", 0),
    "Marco":new CompteBancaire("Marco", 0)
}

// Scénario
try {
    for (const client in clients) { clients[client].credit(1000) }
    clients["Alex"].retrait(100);
    clients["Marco"].virement(clients["Clovis"], 300);
    clients["Alex"].retrait(1200);
} catch (error) {
    console.log(error.message);
} finally {
    clients["Alex"].displayAccount();
    clients["Clovis"].displayAccount();
    clients["Marco"].displayAccount();
}
console.log("-------------------EXO UI COMPTES BANCAIRES-------------------");

// EXO UI COMPTES BANCAIRES
let dropdown = document.getElementById("dropdown");
let displayClient = document.getElementById("display-client");

for (const client in clients) {
    let newLi = document.createElement("li");
    newLi.classList.add("client-el");
    dropdown.appendChild(newLi);
    newLi.innerText = clients[client]._nom;
}

let liste = document.querySelectorAll(".client-el");
let dropdownActual = document.getElementById("dropdown-actual");

liste.forEach(client => {
    client.addEventListener("click", (e) => {
        dropdownActual.textContent = e.target.textContent;
        displayClient.innerHTML = `
        <h2 id="client-solde">Solde pour ${e.target.textContent}: ${clients[e.target.textContent]._solde}</h2>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Montant à créditer</legend>
            <input id="input-credit" type="text" class="input" placeholder="Tapez ici" />
            <button id="input-credit-btn" class="btn">Confirmer</button>
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Montant à retirer</legend>
            <input id="input-debit" type="text" class="input" placeholder="Tapez ici" />
            <button id="input-debit-btn" class="btn">Confirmer</button>
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Montant à virer sur un autre compte</legend>
            <input id="input-virement" type="text" class="input" placeholder="Tapez ici" />
            <legend class="fieldset-legend">Nom du destinataire</legend>
            <input id="input-virement-dest" type="text" class="input" placeholder="Tapez ici" />
            <button id="input-virement-btn" class="btn">Confirmer</button>
        </fieldset>
        <p id="msg-validation"></p>
        `;

        let inputCredit = document.getElementById("input-credit");
        let inputCreditBtn = document.getElementById("input-credit-btn");
        let inputDebit = document.getElementById("input-debit");
        let inputDebitBtn = document.getElementById("input-debit-btn");
        let inputVirement = document.getElementById("input-virement");
        let inputVirementDest = document.getElementById("input-virement-dest");
        let inputVirementBtn = document.getElementById("input-virement-btn");
        let clientSolde = document.getElementById("client-solde");
        let msgValidation = document.getElementById("msg-validation");

        inputCreditBtn.addEventListener("click", () => {
            clients[e.target.textContent].credit(+inputCredit.value);
            clientSolde.textContent = `Solde pour ${e.target.textContent}: ${clients[e.target.textContent]._solde}`;
            msgValidation.innerHTML = `Crédit de ${inputCredit.value} bien effectué!`;
        })
        inputDebitBtn.addEventListener("click", () => {
            try {
                clients[e.target.textContent].retrait(+inputDebit.value);
                clientSolde.textContent = `Solde pour ${e.target.textContent}: ${clients[e.target.textContent]._solde}`;
                msgValidation.innerHTML = `Retrait de ${inputDebit.value} bien effectué!`;
            } catch (error) {
                msgValidation.innerHTML = error.message;
            }
        })
        inputVirementBtn.addEventListener("click", () => {
            try {
                clients[e.target.textContent].virement(clients[inputVirementDest.value], +inputVirement.value);
                clientSolde.textContent = `Solde pour ${e.target.textContent}: ${clients[e.target.textContent]._solde}`;
                msgValidation.innerHTML = `Virement de ${inputVirement.value} vers ${inputVirementDest.value} bien effectué!`;
            } catch (error) {
                msgValidation.innerHTML = error.message;
            }
        })
    })
})

// EXO GESTION MAGASIN
class Produit {
    constructor(nom, prix, quantite) {
        this._nom = nom;
        this._prix = prix;
        this._quantite = quantite;
        this._disponibilite = this.disponible();
    }

    disponible() {
        return this._quantite > 0;
    }
}

class Magasin {
    constructor(tabProduits) {
        this._tabProduits = tabProduits;
    }

    ajouterProduit(produit) {
        this._tabProduits.push(produit);
    }
    chercherProduit(nom) {
        let produitTrouve = false;
        this._tabProduits.forEach(produit => { 
            if (produit._nom == nom) {
                produitTrouve = true;
            }
         });
        if (!produitTrouve) {
            throw new Error("produit non trouvé");
        }
    }
}

let listeProduits = [
    new Produit("Pomme", 1, 10),
    new Produit("Poirre", 2, 20),
    new Produit("Tomate", 3, 5)
]

let magasin = new Magasin(listeProduits);
console.log(magasin._tabProduits);
magasin.ajouterProduit(new Produit("Huitre", 5, 2));
console.log(magasin._tabProduits);
magasin.chercherProduit("Pomme");