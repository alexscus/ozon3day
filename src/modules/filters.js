export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    // переводим все в нижн регистр при поиске
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

export const searchPriceMin = (goods, value) => {
  return goods.filter((goodsItem) => {
    let resultCart = goodsItem.price > value;
    if (value === '') {
      return goodsItem;
    } else {
      return resultCart;
    }
  });
};

export const searchPriceMax = (goods, value) => {
  return goods.filter((goodsItem) => {
    let resultCart = goodsItem.price < value;
    if (value === '') {
      return goodsItem;
    } else {
      return resultCart;
    }
  });
};

export const searchDiscount = (goods, value) => {
  return goods.filter((goodsItem) => {
    const openDiscount = document
      .querySelector('.filter-check_checkmark')
      .classList.contains('checked');

    if (openDiscount) {
      return goodsItem.sale === true;
    } else {
      return goodsItem;
    }
  });
};
