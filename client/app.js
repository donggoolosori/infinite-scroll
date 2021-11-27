const userInfoBox = document.querySelector('.user-info-box');

const url = 'http://localhost:3000/api/user';

const fetchData = (url) => {
  const response = fetch(url);
  return response.then((res) => res.json());
};

window.onload(() => {
  const data = await fetchData(url);
  console.log(data);
});
