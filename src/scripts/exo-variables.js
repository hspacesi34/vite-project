let var1 = "var1";
let var2 = "var2";
let varTab = ["val1", "val2", "val3"];

class varObjet {
    constructor(propriete1, propriete2) {
        this.propriete1 = propriete1;
        this.propriete2 = propriete2;
    }
}

console.log("var1", var1);
console.log("var2", var2);
console.log("varTab", varTab[0]);

let objet = new varObjet("val1", "val2");

console.log("varObjet", objet.propriete1);

    //!---------------------------------------------------------------------------
        //!----------------------- EXERCICE Variables --------------------------------
        //!---------------------------------------------------------------------------
        //! EXO 1 VARIABLES         //TODO: On doit se débrouiller pour créer une variable, 
        //TODO: Lui Assigner une valeur (genre un nombre ou une chaine de caractère)
        //TODO: On doit afficher cette Variable dans la console du navigateur
        //Déclaration
        let monNumFetiche;
        // Assignation
        monNumFetiche = 77;
        // Déclaration + Assignation
        let maVariable = 11;
        let uneAutreVariable = 'Steven Seagal';
        let monTabloClient = ['Client1', maVariable, 109];
        
        let uneVariableObjet = {
            // ↓ Propriétés de l'objet (auxquelles on assigne 
            //des valeur mais avec les : pas le =)
            'ChuckNorris': 99,
            'StevenSIgal': 100,
            'BruceWillis': 'DieHard',
            unePropriete: 'lol'
        };

        let maFonctionHello = function () {
            console.log('Coucou');
        }

        console.log(maVariable);
        console.log('-------TYPE OF -------');
        console.log(typeof maVariable);
        console.log(typeof 123);
        console.log(typeof "yoyoyo");
        console.log(uneAutreVariable);
        console.log(monTabloClient);
        console.log(monTabloClient[1]);
        console.log(uneVariableObjet);
        console.log(uneVariableObjet.BruceWillis);//Notation en point
        console.log(uneVariableObjet.unePropriete);//Notation en point
        console.log(uneVariableObjet['ChuckNorris']);//tableau associatif
        console.log(uneVariableObjet['unePropriete']);//tableau associatif
        console.log('HELLO WORLD');
        maFonctionHello();
        console.log(maFonctionHello);
        console.log(0.1+0.2);