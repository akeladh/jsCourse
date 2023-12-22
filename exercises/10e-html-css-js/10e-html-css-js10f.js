function toggle(element){
  const buttonElement = document.querySelector(element);
  if (!buttonElement.classList.contains('is-toggle-f')){
    buttonElement.classList.add('is-toggle-f');
  }else{
    buttonElement.classList.remove('is-toggle-f')
  }
}