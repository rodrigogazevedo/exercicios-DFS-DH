let alunos = [
  { id: 1, nomeAluno: 'Rodrigo', nomeCurso: 'Desenvolvedor Full Stack' },
];

let AlunosController = {
  index: (req, res) => {
    alunos = req.query;
    res.render('cadastroaluno', alunos);
  },

  dadosalunos: (req, res) => {
    // let aluno = ({ nomeAluno: nome, nomeCurso: curso } = req.query);
    // alunos = req.query;
    let id = alunos.length + 1;
    let aluno = { id, ...req.query };
    alunos.push(aluno);
    res.send(alunos);
  },
};

module.exports = AlunosController;
