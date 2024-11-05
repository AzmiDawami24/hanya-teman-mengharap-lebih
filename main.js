const yesButton = document.getElementById("ya");
const noButton = document.getElementById("tdk");

ya.addEventListener("click", () => {
  alert("makasih yaaa 🥰🥰🥰");
});

noButton.addEventListener("click", () => {
  // Fungsi untuk memindahkan tombol "Tidak" ke posisi acak
  const x = Math.random() * (window.innerWidth - tdk.offsetWidth);
  const y = Math.random() * (window.innerHeight - tdk.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

function moveNoButton() {
  // Mendapatkan posisi dan ukuran tombol "Ya"
  const yesButtonRect = yesButton.getBoundingClientRect();

  let x, y, noButtonRect;
  do {
    // Menghasilkan posisi acak untuk tombol "Tidak"
    x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    // Menempatkan posisi baru secara sementara untuk pengecekan
    tdk.style.left = `${x}px`;
    tdk.style.top = `${y}px`;

    // Mengambil ukuran dan posisi tombol "Tidak" setelah dipindah
    noButtonRect = tdk.getBoundingClientRect();

    // Cek apakah tombol "Tidak" menabrak atau terlalu dekat dengan tombol "Ya"
  } while (
    noButtonRect.right > yesButtonRect.left &&
    noButtonRect.left < yesButtonRect.right &&
    noButtonRect.bottom > yesButtonRect.top &&
    noButtonRect.top < yesButtonRect.bottom
  );
}

tdk.addEventListener("click", moveNoButton);

window.addEventListener("resize", () => {
  moveNoButton();
});