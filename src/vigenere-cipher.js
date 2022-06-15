const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

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
    const outputString = this.createOutput(true, string, adjustedKey);

    if (this.type) {
      return outputString;
    } else {
      return outputString.split("").reverse().join("");
    }
  }

  decrypt(string, key) {
    if (!this.checkArguments(string, key))
      throw new Error("Incorrect arguments!");

    const adjustedKey = this.adjustKey(string, key);
    const outputString = this.createOutput(false, string, adjustedKey);

    if (this.type) {
      return outputString;
    } else {
      return outputString.split("").reverse().join("");
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

  createOutput(type, string, adjustedKey) {
    let outputString = "";

    for (let i = 0, j = 0; i < string.length; i++) {
      if (
        string[i] != " " &&
        this.alphabet.indexOf(string[i].toUpperCase()) != -1
      ) {
        if (type) {
          const row = this.alphabet.indexOf(string[i].toUpperCase());
          const column = this.alphabet.indexOf(adjustedKey[j++].toUpperCase());

          outputString += this.square[column][row];
        } else {
          const row = this.alphabet.indexOf(adjustedKey[j++].toUpperCase());
          const pos = this.square[row]
            .join("")
            .indexOf(string[i].toUpperCase());

          outputString += this.alphabet[pos];
        }
      } else outputString += string[i];
    }

    return outputString;
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

module.exports = {
  VigenereCipheringMachine,
};
