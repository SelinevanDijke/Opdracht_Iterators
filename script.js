// Maak array colors + variabelen
const colors = [" yellow", " blue", " red", " orange"];
let arrayLength = colors.length;
let amountColors = 0;

// While loop die stopt wanneer alle kleuren zijn geprint
while (amountColors < colors.length) {
    console.log("These are my favorite colors in a while loop:");
    console.log(colors[amountColors]);
    amountColors++
}

// For loop die stopt wanneer alle kleuren zijn geprint
for (let i = 0; i < arrayLength; i++) {
    console.log("These are my favorite colors in a for loop");
    console.log(colors[1]);
}

// For each methode
colors.forEach(element => console.log(element));

// Vragen beantwoorden:
// For loop: 4, while loop: 5
// For each: 1
// De derde methode is het makkelijkst leesbaar. Het is korter waardoor je het beter begrijpt.
// 5 properties loggen met een loop
var obj = {
    name: "Seline",
    age: "22",
    country: "The Netherlands",
    height: "167 cm",
    pet: "Kees"
}

for(var propt in obj){
    console.log(propt + ': ' + obj[propt]);
}