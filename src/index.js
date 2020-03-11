const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function chop(str, size) {

    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}

function decode(expr) {
    let encodedLetters = chop(expr, 10);
    let bits = [];

    let letters = [];
    for (let i = 0; i < encodedLetters.length; i++) {
        let code = [];
        if (encodedLetters[i] == '**********') {
            letters.push(' ');
        }
        bits = chop(encodedLetters[i], 2);
        for (let j = 0; j < bits.length; j++) {
            switch (bits[j]) {
                case '10':
                    code.push('.');
                    break;
                case '11':
                    code.push('-');
                    break;
                default:
                    break;
            }
        }
        letters.push(MORSE_TABLE[code.join('')]);
    }

    return letters.join('');

}

module.exports = {
    decode
}