class VigenereCipheringMachine {
  constructor(type) {
    this.type = type ?? true;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const VigenereSquareObj = new VigenereSquare(this.alphabet);
    this.square = VigenereSquareObj.createSquare();
  }

  encrypt(string, key) {
    if (!this.checkArguments(string, key))
      throw new Error("Incorrect arguments!");

    const adjustedKey = this.adjustKey(string, key);
    let resultStr = "";

    for (let i = 0, j = 0; i < string.length; i++) {
      if (
        string[i] != " " &&
        this.alphabet.indexOf(string[i].toUpperCase()) != -1
      ) {
        const row = this.alphabet.indexOf(string[i].toUpperCase());
        const column = this.alphabet.indexOf(adjustedKey[j++].toUpperCase());

        resultStr += this.square[column][row];
      } else resultStr += string[i];
    }

    if (this.type) {
      // console.log(resultStr);
      return resultStr;
    } else {
      return resultStr.split("").reverse().join("");
      // console.log(resultStr.split("").reverse().join(""));
    }
  }

  decrypt(string, key) {
    //not working
    if (!this.checkArguments(string, key))
      throw new Error("Incorrect arguments!");

    const adjustedKey = this.adjustKey(string, key);
    let resultStr = "";

    for (let i = 0, j = 0; i < string.length; i++) {
      if (
        string[i] != " " &&
        this.alphabet.indexOf(string[i].toUpperCase()) != -1
      ) {
        const row = this.alphabet.indexOf(adjustedKey[j++].toUpperCase());
        const pos = this.square[row].join("").indexOf(string[i].toUpperCase());

        resultStr += this.alphabet[pos];
      } else resultStr += string[i];
    }

    if (this.type) {
      // console.log(resultStr);
      return resultStr;
    } else {
      return resultStr.split("").reverse().join("");
      // console.log(resultStr.split("").reverse().join(""));
    }
  }

  checkArguments(string, key) {
    if (typeof string === "string" && string.length > 0) {
      if (typeof key === "string" && string.length > 0) {
        return true;
      }
    }

    return false;
  }

  adjustKey(string, key) {
    const noneSpaceElements = this.countNoneSpaceElements(string);

    if (key.length >= noneSpaceElements) return key;

    while (key.length < noneSpaceElements) {
      const charToAdd = noneSpaceElements - key.length;
      key += key.slice(0, charToAdd);
    }

    return key;
  }

  countNoneSpaceElements(string) {
    let counter = 0;

    for (let char of string) {
      if (char != " " && this.alphabet.indexOf(char.toUpperCase()) != -1)
        counter++;
    }
    return counter;
  }
}

class VigenereSquare {
  constructor(alphabet) {
    this.alphabet = alphabet;
  }

  createSquare() {
    let square = [];

    for (let letter of this.alphabet) {
      square.push(this.getLine(this.alphabet, letter).split(""));
    }

    return square;
  }

  getLine(string, letter) {
    const letterPos = string.indexOf(letter);
    return string.slice(letterPos) + string.slice(0, letterPos);
  }
}

const vigenereEncryptDirect = new VigenereCipheringMachine();
const vigenereEncryptReverse = new VigenereCipheringMachine(false);
// vigenereEncryptDirect.encrypt("cryptography", "verylongkeyword", "lilkey");
vigenereEncryptDirect.decrypt("ICWWQAM KECEIK JVZZT EADGG!", "rollingscopes");
vigenereEncryptDirect.encrypt("attack at dawn!", "alphonse");
vigenereEncryptReverse.encrypt("attack at dawn!", "alphonse");
vigenereEncryptReverse.decrypt("AEIHQX SX DLLU!", "alphonse");
//test - 'AEIHQX SX DLLU!'
//decrypt test - 'LEARN FRONTEND DEVELOPMENT :)'
// '!ULLD XS XQHIEA'
// '!NWAD TA KCATTA'
