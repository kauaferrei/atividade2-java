


alert("Olá, Agora é outra Atividade, você terá que falar dois números e nós iremos fazer contas com eles. \n Vamos nessa??");

let numero1 = Number(prompt("Digite um número decimal (sem vírgulas)"));
let numero2 = Number(prompt("Digite outro Número decimal (sem vírgulas)"));

let resultado = numero1 + numero2;
alert(`O resultado na conta de Adição${numero1} + ${numero2} é ${resultado}\n `);


let resultadoSubtração = numero1 - numero2;
alert(`O resultado na conta de Subtração de ${numero1} - ${numero2} é ${resultadoSubtração}`);


let resultadoMultiplicação = numero1 * numero2;
alert(`O resultado na conta de Multiplicação de ${numero1} X ${numero2} é ${resultadoMultiplicação}`);

let resultadoDivisão = numero1 / numero2;
alert(`O resultado na conta de Divisão de ${numero1} / ${numero2} é ${resultadoDivisão} `);
