let pizzeriaName = "Chez JOJOPIZZA";

let customer = {
    "firstname":"",
    "lastname":"",
    "adress":"",
    "tel":""
}

let pizza = {
    "name":"",
    "description":"",
    "price":""
}

customer.firstname = "Jeff";
customer.lastname = "Lebest";
customer.adress = "18, rue quelque part";
customer.tel = "0606060606";

pizza.name = "Degueu";
pizza.description = "Bah, dégueu";
pizza.price = "gratuit";

let blagueNulle = `Qu'est ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils ? "Suis ta pâte et tout ira bien."`;

let sumUpPhrase = `Bonjour Mr/Mme ${customer.firstname} ${customer.lastname}, votre pizza : ${pizza.name} est en cours de préparation.
Elle vous sera livrée d'ici 30minutes au ${customer.adress}.
Merci d'avoir commandé(e) chez la pizzeria "${pizzeriaName}".
---
${blagueNulle}
`;

console.log(sumUpPhrase);
