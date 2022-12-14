// string
let nome: string = "João"
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = "idade é 27"
// console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ['Av Principal', 99, ""]
console.log(endereco)

endereco = ['Rua importante', 1260, "Bloco A"]
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 10, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)

console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)


// função
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log("Oi")
    // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(2, 2))

// tipo função
let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)

// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 21
// }

usuario = {
    idade: 31,
    nome: 'Maria'
}

console.log(usuario)

// Desafio 

let funcionario: Funcionario = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(horas: number): string {
        if (horas <= 8) {
            return "Ponto normal"
        } else {
            return "Fora do horário"
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// funcionario = {}

// tipos personalizados
// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}


let funcionario2: Funcionario = {
    supervisores: ["Bia", "Carlos"],
    baterPonto(horas: number): string {
        if (horas <= 8) {
            return "Ponto normal"
        } else {
            return "Fora do horário"
        }
    }
}