const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5); // pega a data do dia atual, transforma em pt-br e recorta os 5 digitos finais (/2023) 
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert('Dia já incluso');
    return
  }

  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem('App@Habits', JSON.stringify(nlwSetup.data));
}

/*
  const data = {
  run: ['01-01', '01-02', '01-06'],
  takePills: ['01-03'],
  journal: ['01-02']
}
*/

const data = JSON.parse(localStorage.getItem('App@Habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
