import getData from './getData';
import renderGoods from './renderGoods';
import { searchDiscount } from './filters';

const discountFilter = () => {
  const checkStock = document.querySelector('#discount-checkbox');
  const checkInput = document.querySelector('.filter-check_checkmark');

  let isOpen = false;

  checkStock.addEventListener('click', (event) => {
    isOpen = !isOpen;
    if (isOpen) {
      checkInput.classList.add('checked');
    } else {
      checkInput.classList.remove('checked');
    }

    const value = event.target.value;
    getData(value).then((data) => {
      renderGoods(searchDiscount(data, value));
    });
  });
};

export default discountFilter;
