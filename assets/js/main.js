function Calculator() {
  this.display = document.querySelector('.display');

  this.start = () => this.clickButtons();

  this.clickButtons = () => {
    document.addEventListener('click', (event) => {
      const el = event.target;

      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.count();
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => (this.display.value = '');

  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.count = () => {
    try {
      const result = eval(this.display.value);

      if (!result) {
        alert('Conta Inválida');
        return;
      }

      this.display.value = result;
    } catch {
      alert('Conta Inválida');
    }
  };
}

const calculator = new Calculator();
calculator.start();

addEventListener('keypress', (evt) => {
  evt.preventDefault();
});
