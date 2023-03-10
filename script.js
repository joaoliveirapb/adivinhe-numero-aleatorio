const generateNumberButton = document.querySelector('#generate-number-button');

function generateNumber() {
  const minNumberInput = document.querySelector('#min-number');
  const maxNumberInput = document.querySelector('#max-number');
  const minNumber = parseInt(minNumberInput.value);
  const maxNumber = parseInt(maxNumberInput.value);
  const guessTheNumber = document.querySelector('.guess-the-number');
  const guessNumberInput = document.querySelector('#guess-number');

  if(minNumberInput.value === '' || maxNumberInput.value === '') return alert('Preencha todos os campos para gerar o número!')

  if(minNumber > maxNumber) {
    if(!guessTheNumber.classList.contains('invisible')) {
      guessTheNumber.classList.add('invisible');
      minNumberInput.value = '';
      maxNumberInput.value = '';
    }
    return alert('É necessário que o número máximo seja maior que o mínino para que seja gerado o número!');
  }

  if(minNumber === maxNumber) return alert('Não é possível gerar o número pois os campos estão com o mesmo valor');

  const generatedNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

  guessTheNumber.classList.remove('invisible');

  const kickButton = document.querySelector('#kick-button').addEventListener('click', () => {
    const guessNumber = Number(guessNumberInput.value);

    if(guessNumberInput.value === '') return alert('Preecha o campo Adivinhe para tentar adivinhar o número!');

    if(guessNumber === generatedNumber) document.querySelector('#result-about-guess').textContent = 'Acertou! ✅';

    if(generatedNumber > guessNumber) document.querySelector('#result-about-guess').textContent = 'Errou! O número é maior ⬆️';

    if(generatedNumber < guessNumber) document.querySelector('#result-about-guess').textContent = 'Errou! O número é menor ⬇️';
  })

  document.querySelector('#result-about-guess').textContent = '';
  guessNumberInput.value = '';

  console.log(generatedNumber)
}

generateNumberButton.addEventListener('click', generateNumber);