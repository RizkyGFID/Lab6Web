// jQuery untuk interaksi ringan sesuai kebutuhan mockup
$(document).ready(function () {

  /* ====== SET NAV ITEM AKTIF ====== */
  const currentFile = location.pathname.split("/").pop() || "index.html";
  $(".navbar .nav-link").each(function () {
    const linkFile = $(this).attr("href");

    // Hindari # dan link kosong
    if (linkFile && linkFile !== "#" && linkFile === currentFile) {
      $(this).addClass("active");
    }
  });

  /* ====== DEMO KLIK "VIEW DETAIL" ====== */
  $(".btn-ghost").on("click", function (e) {
    e.preventDefault();

    // Cari judul item (kalau tidak ada <h5>, tampilkan 'Item tidak dikenal')
    const title = $(this).closest("div").find("h5").text().trim() || "Item tidak dikenal";
    alert("Detail item: " + title);
  });

});