let funcionario1 = { //inferência de tipo
    code: 10,
    name: "John"
};

let funcionario2: {codigo: number, nome: string} = { // delimitando o tipo
    codigo: 10,
    nome: "John" 
}

interface Funcionario {
    codigo: number,
    nome: string
}

let funcionario3: Funcionario = {
    codigo: 200,
    nome: "John"
}