alert("Agora vamos para a ùltima!!!")

let mediaHtml = Number(prompt("Digite a média que você tirou no HTML (Números Inteiros & de 1 a 10)"));
let mediaCss = Number(prompt("Digite a média que você tirou no CSS (Números Inteiros & de 1 a 10)"));
let mediaJava = Number(prompt("Digite a média que você tirou no Java (Números Inteiros & de 1 a 10)"));

let resultado = mediaHtml + mediaCss + mediaJava;
let notafinal = resultado / 3;

alert(`A sua Média final das 3 matérias foi de: ${notafinal}`)