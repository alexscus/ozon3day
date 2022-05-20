const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');

  const openCart = () => {
    cartModal.style.display = 'flex';
  };
  const closeCart = () => {
    cartModal.style.display = '';
  };

  // cartBtn.onclick = openCart;
  cartBtn.addEventListener('click', openCart);

  // cartCloseBtn.onclick = closeCart;
  cartCloseBtn.addEventListener('click', closeCart);

  // console.dir(cartCloseBtn);
};

export default cart;
