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