module.exports = {
    curso: {
        nomeCurso: 'Curso Js',
        notaAprovacao: 7,
        faltasMaximas: 10,
        listaEstudantes: [],
        novoEstudante: function (estudante) {
            this.listaEstudantes.push(estudante);
        },
        horaDaVerdade: function (aluno) {
            let media = aluno.calcularMedia();
            let resultado = false;

            if ((aluno.quantidadeFaltas < this.faltasMaximas && media >= this.notaAprovacao) || 
                (aluno.quantidadeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1))
            ) {
                resultado = true;
            } 

            return resultado;
        },
        listDaVerdade: function () {
            let verdade = [];
            for (let i = 0; i < this.listaEstudantes.length; i++) {
                verdade.push(this.horaDaVerdade(this.listaEstudantes[i]));
            }

            return verdade;
        }
    }
}