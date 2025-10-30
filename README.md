# Pertemuan 7
Halo, Sebelumnya saya Ahmad Rizky Pramudia Pratama dengan NIM 312410272 Dari
Kelas TI.24.A4. Disini saya akan menkoding beberapa hal dengan menggunakan kode
Bootstrap

# Refaktur Layout Web Praktikum 4
Disini saya akan mengambil layout web dari praktikum 4, dan saya akan buat ulang
menggunakan Bootstrap Grid System

Berikut adalah kodenya

```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Portfolio Sederhana</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#">Portfolio Saya</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

<!-- Section Tentang Saya -->
<section class="container my-5">
  <div class="row">
    <!-- Kolom kiri: foto -->
    <div class="col-md-4">
      <img src="https://via.placeholder.com/300x300.png?text=Foto+Saya" alt="Foto Saya" class="img-fluid rounded">
    </div>
    <!-- Kolom kanan: nama dan deskripsi -->
    <div class="col-md-8">
      <h2>Nama Saya</h2>
      <p>Halo, saya adalah seorang web developer yang memiliki pengalaman dalam membuat website yang responsif dan menarik. Saya tertarik pada teknologi dan terus belajar untuk mengembangkan keahlian saya di bidang pengembangan web.</p>
    </div>
  </div>
</section>

<!-- Section Portfolio Saya -->
<section class="container my-5">
  <h3 class="mb-4">Portfolio Saya</h3>
  <div class="row">
    <!-- Proyek 1 -->
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="https://via.placeholder.com/350x200.png?text=Proyek+1" class="card-img-top" alt="Proyek 1">
        <div class="card-body">
          <h5 class="card-title">Proyek 1</h5>
          <p class="card-text">Deskripsi singkat tentang proyek pertama saya yang melibatkan pengembangan website e-commerce.</p>
        </div>
      </div>
    </div>
    <!-- Proyek 2 -->
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="https://via.placeholder.com/350x200.png?text=Proyek+2" class="card-img-top" alt="Proyek 2">
        <div class="card-body">
          <h5 class="card-title">Proyek 2</h5>
          <p class="card-text">Sebuah aplikasi web untuk manajemen tugas yang mudah digunakan dan efektif.</p>
        </div>
      </div>
    </div>
    <!-- Proyek 3 -->
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="https://via.placeholder.com/350x200.png?text=Proyek+3" class="card-img-top" alt="Proyek 3">
        <div class="card-body">
          <h5 class="card-title">Proyek 3</h5>
          <p class="card-text">Website portfolio fotografer dengan desain yang minimalis dan modern.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
```

Maka tampilannya seperti berikut

<img src=png>

