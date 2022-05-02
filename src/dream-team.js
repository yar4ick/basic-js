const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members != "object") return false;
  if (members === null) return false;
  if (Array.isArray(members) === false) return false;

  let teamName = [];

  members.forEach((element) => {
    if (typeof element === "string") {
      for (let char of element) {
        if (char != " ") {
          teamName.push(char);
          return;
        }
      }
    }
  });

  return teamName
    .map((el) => el.toUpperCase())
    .sort()
    .join("");
}

module.exports = {
  createDreamTeam,
};
