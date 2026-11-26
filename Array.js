const namaShift1 = [
    "Anisa Istiqomah",
    "Alyani Rofiyah",
    "Ashley Aurellia Nomi Putri",
    "Bunga Sasi Kirana",
    "Bunia Asyirotul Karimah",
    "Della Agustina Widiyani",
    "Dewi Afifatu Zuhra",
    "Dini Febtia Murni",
    "Diandra Kayla Aramita",
    "Ihzan Gunawan",
    "Lucky Adi Irawan",
    "M. Zainul Haqi",
];

// Menampilkan output berupa list nama di terminal/console
console.log("========================================");
console.log(`   DAFTAR NAMA ANGGOTA SHIFT 1 (${namaShift1.length})  `);
console.log("========================================");

namaShift1.forEach((nama, index) => {
    console.log(`${index + 1}. ${nama}`);
});

console.log("========================================");


// 1. Tampilkan index sesuai nama masing-masing
console.log("1. Alyani Rofiyah:");
for (let i = 0; i < namaShift1.length; i++) {
  console.log(`Index ${i} : ${namaShift1[i]}`);
}

// 2. Array dimulai dari index berapa?
console.log("\n2. Array dimulai dari index 0");
console.log(`Contoh: index 0 = ${namaShift1[0]}`);
console.log(`Contoh: index 11 = ${namaShift1[11]}`);

// 3. Tampilkan data, tapi index ke-3 dilewati
console.log("\n3. Daftar nama tanpa index ke-3:");
for (let i = 0; i < namaShift1.length; i++) {
  if (i === 3) {
    continue; // lewati index 3 = Bunga Sasi Kirana
  }
  console.log(`Index ${i} : ${namaShift1[i]}`);
}