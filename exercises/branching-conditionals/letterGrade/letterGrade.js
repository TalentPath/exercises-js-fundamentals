/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  if (percentGrade >= 97) return "A+";
  else if (percentGrade >= 93) return "A";
  else if (percentGrade >= 90) return "A-";
  else if (percentGrade >= 87) return "B+";
  else if (percentGrade >= 83) return "B";
  else if (percentGrade >= 80) return "B-";
  else if (percentGrade >= 77) return "C+";
  else if (percentGrade >= 73) return "C";
  else if (percentGrade >= 70) return "C-";
  else if (percentGrade >= 67) return "D+";
  else if (percentGrade >= 63) return "D";
  else if (percentGrade >= 60) return "D-";
  else return "F"
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(letterGrade(100))

}

module.exports = letterGrade;
