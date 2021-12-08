let curso = require('./curso');

function Aluno(nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.faltas = function () {
        this.quantidadeFaltas += 1;
    },
    this.calcularMedia = function () {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }
}

let aluno1 = new Aluno('Marinho', 10, [7.8, 8, 8]);
let aluno2 = new Aluno('Carlos', 5, [6, 5, 7]);
let aluno3 = new Aluno('Jean', 8, [8, 6, 7]);

curso.curso.novoEstudante(aluno1);
curso.curso.novoEstudante(aluno2);
curso.curso.novoEstudante(aluno3);

console.log(curso.curso.listDaVerdade())