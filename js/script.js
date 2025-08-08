hamburger = document.querySelector('.hamburger');
hamburger.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

// Chart JS
 const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1 kali per hari / lebih', '1-6 kali per minggu', '3 kali per bulan / kurang'],
      datasets: [{
        label: 'Proporsi Penduduk Usia 3 Tahun ke Atas Berdasarkan Kebiasaan Konsumsi Minuman Manis (2023)',
        data: [47.5, 43.3, 9.2],
        borderWidth: 1,
        backgroundColor: '#f54542',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
          display: true,
          text: 'Persen',  // ← Keterangan di sumbu Y
          font: {
            size: 14,
          }
        }
        }
      }
    }
  });