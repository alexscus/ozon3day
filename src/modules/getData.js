const getData = (str) => {
  return fetch(
    `https://test-1df2e-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => {
    return response.json();
  });
};

export default getData;
