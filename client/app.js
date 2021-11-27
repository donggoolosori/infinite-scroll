const userInfoBox = document.querySelector('.user-info-box');
const footer = document.querySelector('footer');

const fetchData = (url) => {
  const response = fetch(url);
  return response.then((res) => res.json());
};

const drawItems = async (url, offset) => {
  const data = await fetchData(`${url}/${offset}`);

  const element = data.reduce((prev, { name, email, gender }) => {
    return (
      prev +
      `
      <div class="user-info">
        <h1>${name}</h1>
        <div class="email-gender">
          ${email} (${gender})
        </div>
      </div>
    `
    );
  }, '');

  userInfoBox.insertAdjacentHTML('beforeend', element);
};

const getloadItems = () => {
  const url = 'http://localhost:3000/api/user';
  let offset = 0;

  return () => {
    drawItems(url, offset);
    offset += 20;
  };
};

const loadItems = getloadItems();

const io = new IntersectionObserver(
  (entry) => {
    if (entry[0].isIntersecting) {
      loadItems();
    }
  },
  { threshold: 0.5 }
);

loadItems();

io.observe(footer);
