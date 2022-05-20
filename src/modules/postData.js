const postData = () => {
  return fetch('http://localhost:3000/goods', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Ведьмак 3',
      price: 3000,
      sale: true,
      img: 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg',
      category: 'Игры и софт',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json());
  //////////удаление//////////////
  // return fetch('http://localhost:3000/goods/24', {
  //   method: 'DELETE',
  // }).then((res) => res.json());
  //////////добавление////////////
  // return fetch('http://localhost:3000/goods', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     title: 'Ведьмак 3',
  //     price: 3000,
  //     sale: true,
  //     img: 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg',
  //     category: 'Игры и софт',
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // }).then((res) => res.json());
  /////////обновить все//////////////
  // return fetch('http://localhost:3000/goods/25', {
  //   method: 'PATCH',
  //   body: JSON.stringify({
  //     title: 'Ведьмак 3',
  //     price: 4999,
  //     sale: true,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // }).then((res) => res.json());
  /////////обновление часть//////////
  // return fetch('http://localhost:3000/goods/24', {
  //   method: 'PUT',
  //   body: JSON.stringify({
  //     title: 'Ведьмак три',
  //     price: 3500,
  //     sale: true,
  //     img: 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg',
  //     category: 'Игры и софт',
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // }).then((res) => res.json());
};

export default postData;
