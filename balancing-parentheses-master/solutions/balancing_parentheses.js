function balancingParentheses(string) {
  let missing = 0;
  let openings = 0;

  for (let i = 0; i < string.length; ++i) {
    if (string[i] === '(') {
      ++openings;
      continue;
    }

    if (openings > 0) {
      --openings;
    } else {
      ++missing;
    }
  }

  return missing + openings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("");

  console.log("Expecting: 0");
  console.log(balancingParentheses('()'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses('('));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses(')('));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')()'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses(')((((()))((())))()(()))('));

  console.log("");

  console.log("Expecting: 3");
  console.log(balancingParentheses(')))'));

  console.log("");

  console.log("Expecting: 3");
  console.log(balancingParentheses('((('));
}

module.exports = balancingParentheses;

function balancingParentheses(parentheses) {
  let count = 0;

  for (let i = 0; i < parentheses.length; i++) {
    if (parentheses[i] === '(') {
      count++;
    } else if (parentheses[i] === ')') {
      count--;
    }
  }

  return Math.abs(count);
}

console.log("Expecting: 3");
console.log(balancingParentheses(')))'));



// Please add your pseudocode to this file
/*/ The `balancingParentheses` function counts the number of
 * unbalanced parentheses in a given string and returns the
 * absolute value of the count.
 * @param parentheses - The `parentheses` parameter is a string
 * that represents a sequence of parentheses. In this case, the
 * string is `')))'`.
 * @returns The function `balancingParentheses` is returning the
 * absolute value of the count variable, which represents the
 * difference between the number of opening and closing
 * parentheses in the input string.
 */
/************************************************************************************** 
* initialize missing to 0 (will store unmatched closing parens count)
* initialize openings to 0 (will store opening parens count)
*
* iterate over string:
*   if char == '(':
*     increment openings
*   else:
*     if openings is 0:
*       increment missing
*     else:
*       decrement openings
*
* return missing + openings


// And a written explanation of your solution
// We can calculate the number of parentheses needed by counting the number of opening
// parentheses that occur in the string and decrementing that count any time a closing
//parenthesis is encountered after that. If we encounter a closing parenthesis and there
//are no opening parentheses (openings = 0), we add to missing. Once we've iterated 
//over the whole string, we just need to add the missing count with the openings count,
// since the openings count will track any opening parentheses for which there were no
*/
