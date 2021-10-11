const display = document.querySelector('.ramen_search__display');
// btns
const reqBtns = document.querySelectorAll('.ramen_search__req-link');
const submitBtns = document.querySelectorAll('.ramen_search__submit-btn');
// fieldset for each method
const fields = document.querySelectorAll('.ramen_search__input-container');
// inputs for each method;
const getNumber = document.getElementById('get_display_number');
const deleteId = document.getElementById('delete_id');
const postShopInfo = document.getElementById('post_shop_info');
const putShopId = document.getElementById('put_shop_id');
const putShopInfo = document.getElementById('put_shop_info');

// switches inputs when menu clicked
reqBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const requestType = e.currentTarget.dataset.id;
    if (requestType === 'get') {
      fields.forEach(field => {
        if (field.dataset.id === 'get') {
          field.classList.remove('hidden');
        } else {
          field.classList.add('hidden');
        }
      });
    } else if (requestType === 'delete') {
      fields.forEach(field => {
        if (field.dataset.id === 'delete') {
          field.classList.remove('hidden');
        } else {
          field.classList.add('hidden');
        }
      });
    } else if (requestType === 'post') {
      fields.forEach(field => {
        if (field.dataset.id === 'post') {
          field.classList.remove('hidden');
        } else {
          field.classList.add('hidden');
        }
      });
    } else {
      fields.forEach(field => {
        if (field.dataset.id === 'put') {
          field.classList.remove('hidden');
        } else {
          field.classList.add('hidden');
        }
      });
    }
  });
});

// controls behavior when btn is clicked
submitBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const requestType = e.currentTarget.dataset.id;
    if (requestType === 'get') {
      getData(getNumber.value);
    } else if (requestType === 'delete') {
      deleteData(deleteId.value);
    } else if (requestType === 'post') {
      postData(postShopInfo.value);
    } else {
      putData(putShopId.value, putShopInfo.value);
    }
  });
});

const getData = async (param) => {
  let response = await fetch(`http://localhost:4000/api/ramen/${param}`, {
    method: "GET", 
    mode: 'cors',
  });
  let data = await response.json();
  displayData(data);
};

const deleteData = async (param) => {
  let response = await fetch(`http://localhost:4000/api/ramen/${param}`, {
    method: "DELETE", 
    mode: 'cors',
  });
  let data = await response.json();
  displayData(data);
};

const postData = async (param) => {
  let response = await fetch(`http://localhost:4000/api/ramen`, {
    method: "POST", 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: param
  });
  let data = await response.json();
  displayData(data)
};

const putData = async (id, body) => {
  let response = await fetch(`http://localhost:4000/api/ramen/${id}`, {
    method: "PUT", 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body
  });
  let data = await response.json();
  displayData(data);
};

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