//Pablo Vinícius Vieira Santos

const listaPeriodo = [];
const listaTurma = [];
const listaCargaHoraria = [];
const listaNotas = [];
const listaFrequencia = [];


const form = document.querySelector(".formulario");

const formulario = form.addEventListener("submit", (enviar) => {
  
  enviar.preventDefault();

 
  const anoPeriodoLetivo = document.querySelector("#ano-periodo-letivo").value;
  const disciplinaCurricular = document.querySelector("#disciplina-curricular").value;
  const cargaHoraria = document.querySelector("#carga-horaria").value;
  const frequenciaCurricular = document.querySelector("#frequencia-curricular").value;
  const notaCurricular = document.querySelector("#nota-curricular").value;

 
  listaPeriodo.push(anoPeriodoLetivo);
  listaTurma.push(disciplinaCurricular);
  listaCargaHoraria.push(parseInt(cargaHoraria));
  listaFrequencia.push(parseFloat(frequenciaCurricular));
  listaNotas.push(parseFloat(notaCurricular));



  form.reset();

  const anoPeriodoAluno = document.querySelector(".a-p-l");
  const addAnoPeriodoAluno = exibeAnoPeriodo(listaPeriodo);
  anoPeriodoAluno.innerText = addAnoPeriodoAluno;

  const disciplinaAluno = document.querySelector(".disciplina-codigo");
  const addDisciplinaAluno = exibeDisciplinaAluno(listaTurma);
  disciplinaAluno.innerText = addDisciplinaAluno;

  
  const chAluno = document.querySelector(".c-h");
  const addChAluno = exibeCargaHoraria(listaCargaHoraria);
  chAluno.innerText = addChAluno;

  
  const frequenciaDoAluno = document.querySelector(".frequencia-do-aluno");
  const addFrequencia = exibeFrequenciaAluno(listaFrequencia);
  frequenciaDoAluno.innerText = addFrequencia;

  
  const notaDoAluno = document.querySelector(".nota-do-aluno");
  const addNotaAluno = calculaNotaAluno(listaNotas);
  notaDoAluno.innerText = addNotaAluno;

  const tempoDeCurso = document.querySelector(".tempo-de-curso");
  const addTempoDeCurso = calculaTempoDeCurso(listaPeriodo);
  tempoDeCurso.innerText = addTempoDeCurso;


});
function exibeAnoPeriodo(anoPeriodoArray) {
  return anoPeriodoArray;
}

function exibeDisciplinaAluno(disciplinaAlunoArray) {
  return disciplinaAlunoArray;
}

function exibeCargaHoraria(cargaHorariaArray) {
  return cargaHorariaArray;
}


function calculaNotaAluno(notaArray) {
  return notaArray;
}


function exibeFrequenciaAluno(frequenciaArray) {
  return frequenciaArray;
}
