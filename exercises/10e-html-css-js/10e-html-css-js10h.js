function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value)*100;
  let totalCostElement = document.querySelector('.js-total-cost');

  if (cost < 4000 && cost > 0){
    totalCostElement.classList.remove('red-font');
    cost += 1000;
    totalCostElement.innerHTML = `$${cost/100}`;
  }else{
    totalCostElement.classList.add('red-font');
    totalCostElement.innerHTML = `Error: cost cannot be less than $0`
  }
}
function handleCostKeydown(event){
if (event.key === 'Enter'){
  calculateTotal();
}
}