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
  switch(true)
  {
    case (percentGrade >= 0 && percentGrade <= 59):
      return 'F';
    case (percentGrade >= 60 && percentGrade <= 62):
      return 'D-';
    case (percentGrade >= 63 && percentGrade <= 66):
      return 'D';
    case (percentGrade >= 67 && percentGrade <= 69):
        return 'D+';
    case (percentGrade >= 70 && percentGrade <= 62):
        return 'C-';
    case (percentGrade >= 73 && percentGrade <= 76):
        return 'C';
    case (percentGrade >= 77 && percentGrade <= 79):
        return 'C+';
    case (percentGrade >= 80 && percentGrade <= 82):
        return 'B-';
    case (percentGrade >= 83 && percentGrade <= 86):
        return 'B';
    case (percentGrade >= 87 && percentGrade <= 89):
        return 'B+';
    case (percentGrade >= 90 && percentGrade <= 92):
        return 'A-';
    case (percentGrade >= 93 && percentGrade <= 96):
        return 'A';
    case (percentGrade >= 97 && percentGrade <= 100):
        return 'A+';
  }
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log("a grade of 44 is a letter grade of " + letterGrade(44));
  console.log("A grade of 99 is a letter grade of " + letterGrade(99));
  console.log("A 55 is a letter grade of " + letterGrade(55));
  console.log("A 78 is a letter grade of " + letterGrade(78));
}

module.exports = letterGrade;
