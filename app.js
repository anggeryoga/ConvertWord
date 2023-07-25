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
