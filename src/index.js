module.exports = function check(str, bracketsConfig) {
  // your solution
  const OPEN_BRACKETS = []
  const BRACKETS_PAIR = {}
  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0])
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }

  let stack = []
  for (let i = 0; i < str.length; i++) {
    let correntElement = str[i];

    if (OPEN_BRACKETS.includes(correntElement)) {

      if (BRACKETS_PAIR[correntElement] === correntElement) {
        if (BRACKETS_PAIR[correntElement] !== stack[stack.length - 1]) {
          stack.push(correntElement)
        } else if (BRACKETS_PAIR[correntElement] === stack[stack.length - 1]) {
          stack.pop()
        } else { return false }
      } else {
        stack.push(correntElement)
      }
    } else {
      if (stack.length === 0)
        return false;

      let topElement = stack[stack.length - 1];
      if (BRACKETS_PAIR[correntElement] === topElement) {
        stack.pop()
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
