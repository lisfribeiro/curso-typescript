"use strict";
// string
let nome = "João";
console.log(nome);
// nome = 28
// numbers
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "idade é 27"
// console.log(typeof minhaIdade)
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuplas
let endereco = ['Av Principal', 99, ""];
console.log(endereco);
endereco = ['Rua importante', 1260, "Bloco A"];
console.log(endereco);
// enums
var Cor;
// enums
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// função
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
// tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 21
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
// Desafio 
let funcionario = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(horas) {
        if (horas <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ["Bia", "Carlos"],
    baterPonto(horas) {
        if (horas <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    }
};
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// nota = true
// checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    // while(true) {}
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
let altura = 12;
// altura = null
let alturaOpcional;
alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1);
let podeSerNulo = null; // any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map