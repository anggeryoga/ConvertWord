# Kode Konversi Angka ke Kata

Kode ini adalah sebuah fungsi JavaScript yang mengonversi angka menjadi kata-kata dalam bahasa Indonesia. Fungsi ini digunakan untuk mengubah angka menjadi format kata-kata yang lebih mudah dibaca.

## Cara Install kode di Google App Script 


1. Buka [Google Apps Script](https://script.google.com) dan login dengan akun Google Anda.
2. Klik tombol "Blank Project" atau pilih "New Project" dari menu "File" untuk membuat proyek baru.
3. Di editor Google Apps Script, hapus kode default yang ada.
4. Salin kode fungsi `convertToWords` berikut dan tempelkan di editor:
```javascript

function convertToWords(amount) {
  var words = {
    0: '',
    1: 'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan',
    10: 'sepuluh',
    11: 'sebelas',
    12: 'dua belas',
    13: 'tiga belas',
    14: 'empat belas',
    15: 'lima belas',
    16: 'enam belas',
    17: 'tujuh belas',
    18: 'delapan belas',
    19: 'sembilan belas',
    20: 'dua puluh',
    30: 'tiga puluh',
    40: 'empat puluh',
    50: 'lima puluh',
    60: 'enam puluh',
    70: 'tujuh puluh',
    80: 'delapan puluh',
    90: 'sembilan puluh',
    100: 'seratus',
    1000: 'seribu',
    1000000: 'sejuta',
    1000000000: 'sejuta juta'
  };

  if (!amount || typeof amount !== 'number' || isNaN(amount)) {
    return 'Jumlah tidak valid';
  }

  var inWords = '';

  if (amount >= 0 && amount <= 20) {
    inWords = words[amount];
  } else if (amount >= 21 && amount <= 99) {
    var tens = Math.floor(amount / 10) * 10;
    var units = amount % 10;
    inWords = words[tens] + ' ' + words[units];
  } else if (amount >= 100 && amount <= 999) {
    var hundreds = Math.floor(amount / 100);
    var remainder = amount % 100;
    inWords = words[hundreds] + ' ratus';
    if (remainder !== 0) {
      inWords += ' ' + convertToWords(remainder);
    }
  } else if (amount >= 1000 && amount <= 999999) {
    var thousands = Math.floor(amount / 1000);
    var remainder = amount % 1000;
    inWords = convertToWords(thousands) + ' ribu';
    if (remainder !== 0) {
      inWords += ' ' + convertToWords(remainder);
    }
  } else if (amount >= 1000000 && amount <= 999999999) {
    var millions = Math.floor(amount / 1000000);
    var remainder = amount % 1000000;
    inWords = convertToWords(millions) + ' juta';
    if (remainder !== 0) {
      inWords += ' ' + convertToWords(remainder);
    }
  }

  var wordsArray = inWords.trim().split(' ');
  var formattedWords = wordsArray.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return formattedWords.join(' ');
}
```

## Cara Kerja

Fungsi `convertToWords(amount)` menerima satu parameter `amount` yang merupakan angka yang ingin dikonversi. Fungsi ini mengikuti aturan berikut untuk melakukan konversi:

1. Jika `amount` tidak ada, bukan tipe angka, atau NaN (Not a Number), fungsi akan mengembalikan string 'Jumlah tidak valid'.

2. Jika `amount` berada di antara 0 dan 20, fungsi akan mengembalikan kata yang sesuai dari objek `words` yang telah didefinisikan.

3. Jika `amount` berada di antara 21 dan 99, fungsi akan memisahkan puluhan dan satuan, lalu menggabungkannya menjadi kata-kata.

4. Jika `amount` berada di antara 100 dan 999, fungsi akan memisahkan ratusan dan sisa, lalu mengonversinya menjadi kata-kata. Jika sisa tidak nol, fungsi akan memanggil dirinya sendiri secara rekursif untuk mengonversi sisa tersebut.

5. Jika `amount` berada di antara 1000 dan 999999, fungsi akan memisahkan ribuan dan sisa, lalu mengonversinya menjadi kata-kata. Jika sisa tidak nol, fungsi akan memanggil dirinya sendiri secara rekursif untuk mengonversi sisa tersebut.

6. Jika `amount` berada di antara 1000000 dan 999999999, fungsi akan memisahkan jutaan dan sisa, lalu mengonversinya menjadi kata-kata. Jika sisa tidak nol, fungsi akan memanggil dirinya sendiri secara rekursif untuk mengonversi sisa tersebut.

Selain fungsi konversi, rumus yang ada dalam README ini juga menggunakan rumus Excel/Sheets yang menggabungkan fungsi-fungsi seperti IF, ISBLANK, SUBSTITUTE, dan VALUE untuk memanipulasi nilai dalam sel sebelum memanggil fungsi `convertToWords`.

## Contoh Penggunaan

```javascript
// Mengonversi angka menjadi kata-kata
var angka = 1234;
var kata = convertToWords(angka);
console.log(kata); // Output: "Seribu Dua Ratus Tiga Puluh Empat"
```
## Cara Penggunaan
1. Kamu mempunyai tabele di sebuah [Google Spreadsheets](https://sheet.new/)
2. Di dalom `M2` terdapat angka yang ingin kamu terbilang, contoh 'Rp2,734,500'
3. Kamu bisa langsung mempastekan kode dan kan otomatis membuat angka kamu menjadi terbilang

```javascript
=IF(ISBLANK(M2), "", convertToWords(VALUE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(M2, "Rp", ""), ".", ""), ",", ""))))
```
## Kontak

Jika ada pertanyaan atau kendala bisa langsung menghubungi saya 

- **Email**: [anggerajiprayogokusuma@gmail.com](mailto:anggerajiprayogokusuma@gmail.com)
- **LinkedIn**: [anggeraji](https://www.linkedin.com/in/anggeraji)
- **Website**: [anggeraji.my.id](https://www.anggeraji.my.id)

Jangan ragu untuk menghubungi saya melalui salah satu platform di atas. Saya senang mendengar dari Anda dan siap untuk berkolaborasi dalam proyek yang menarik!
