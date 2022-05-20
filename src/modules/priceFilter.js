import getData from './getData';
import renderGoods from './renderGoods';
import { searchPriceMin, searchPriceMax } from './filters';

const priceFilter = () => {
  let priceMin = document.getElementById('min');
  let priceMax = document.getElementById('max');

  priceMin.addEventListener('input', (event) => {
    const value = event.target.value;
    getData(value).then((data) => {
      renderGoods(searchPriceMin(data, value));
    });
  });

  priceMax.addEventListener('input', (event) => {
    const value = event.target.value;
    getData(value).then((data) => {
      renderGoods(searchPriceMax(data, value));
    });
  });
};

export default priceFilter;
