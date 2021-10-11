const reqBtns = document.querySelectorAll('.ramen_search__req-link');
const display = document.querySelector('.ramen_search__display');
const getNumber = document.getElementById('get_display_number');


reqBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const reqestyType = e.currentTarget.dataset.id;
    if (reqestyType === 'get') {
      getData();
    }
  });
});

const getData = async () => {
  let response = await fetch('http://localhost:4000/api/ramen', {
    method: "GET", 
    mode: 'cors',
  });
  let data = await response.json();
  displayData(data);
}

// function for display data
const displayData = (data) => {
  let html = data.map(data => `
    <ul style="padding: 8px; border-bottom: solid 1px #e4e4e4; list-style: none; font-size: 1.4rem; line-height: 1.5">
      <li>ID: ${data.id}</li>
      <li style="font-weight: 700; font-size: 1.6rem">Shop Name (JP): ${data.shop_name_jp}</li>
      <li>Shop Name (EN): ${data.shop_name_en}</li>
      <li>Shop Location: ${data.shop_location}</li>
      <li>Shop Location: ${data.payment_method === 1 ? 'Cash Only' : 'Cash and credit card'}</li>
    </ul>
  `).join('');
  display.innerHTML = html;
}