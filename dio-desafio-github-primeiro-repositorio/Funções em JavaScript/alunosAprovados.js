const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: 1,
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: 1,
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: 2,
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: 2,
    },
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i=0; i<arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));