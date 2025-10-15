let var1 = "var1";
let var2 = "var2";
let varTab = ["val1", "val2", "val3"];

class varObjet {
    constructor(propriete1, propriete2) {
        this.propriete1 = propriete1;
        this.propriete2 = propriete2
    }
}

console.log("var1", var1);
console.log("var2", var2);
console.log("varTab", varTab[0]);

let objet = new varObjet("val1", "val2")

console.log("varObjet", objet.propriete1);
