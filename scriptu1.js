const product = [
  {
    id: 0,
    image: 'image/cocacola.png',
    title: 'Coca Cola',
    price: 42,
  },
  {
    id: 1,
    image: 'image/sprite.png',
    title: 'Sprite',
    price: 40,
  },
  {
    id: 2,
    image: 'image/fanta.png',
    title: 'Fanta',
    price: 39,
  },
  {
    id: 3,
    image: 'image/okijelly.png',
    title: 'Oki Jelly',
    price: 12,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];


let i = 0;
document.getElementById('root').innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price} gram</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Tambahkan</button>" +
      `</div></div>`
    );
  })
  .join('');

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0;
  globalThis.total=0;
  document.getElementById('count').innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = 'Your cart is empty';
    document.getElementById('total').innerHTML = 'Rp ' + 0 + ''; // CEK DI SINI
  } else {
    document.getElementById('cartItem').innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById('total').innerHTML = total + ' gram';
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}></div>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price} gram</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join('');
  } 

  localStorage.setItem('gulaHariIni', total);
}

function gluAlert() {
  if(total > 50) {
    document.getElementById("p_alert").innerHTML = "Konsumsi gula harian anda berlebihan !";
  }
  else {
    document.getElementById("p_alert").innerHTML = "Konsumsi gula harian anda normal.";
  }
}

// SCRIPT CHART JS
function chart_js(){

let chartjs_total = parseInt(localStorage.getItem('gulaHariIni')) || 0;

// let chartjs_total = total;

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Hari ke 1'],
      datasets: [{
        label: 'Konsumsi gula harian mu',
        data: [chartjs_total],
        borderWidth: 1,
        backgroundColor: '#f54542',
        borderColor: '#f54542', 
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
          display: true,
          text: 'Konsumsi gula harian (gram)',  // ← Keterangan di sumbu Y
          font: {
            size: 14,
          }
        }
      }
    }
  }
});

// RELOAD HALAMAN
}

window.onload = function() {
  chart_js(); // panggil saat halaman dibuka
}

// Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function logout() {
  window.location.href='index.html';
}