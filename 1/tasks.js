/**
 * Write an implementation of the 'truncateString' function
 * that would calculate the length of a string.
 * If the line is longer than 10 characters,
 * it would truncate it and add "..." to the end of the line.
 *
 * @param str
 * @returns {str}
 */

export function truncateString(str) {
  if (str.length <= 10) return str

  const arrayFromStr = str.split('')
  arrayFromStr.splice(7)
  const updatedStr = arrayFromStr.join('') + '...'

  return updatedStr
}

/**
 * Write an implementation of the 'selectUniqueValues' function
 * that would return an array of unique values.
 *
 * @param arr
 * @returns {Array}
 */

export function selectUniqueValues(arr) {
  const arrayWithUniqueVal = arr.reduce((acc, el) => {
    if (!acc[0]) acc.push(el)

    const checkOnUniqueNum = !(acc.includes(el))

    checkOnUniqueNum
      ? acc.push(el)
      : el

    return acc
  }, [])
  return arrayWithUniqueVal
}
/**
 * Write an implementation of the 'findSmallestAndBiggest' function
 * that would return an array of 2 numbers - the smallest and largest values.
 *
 * @param arr
 * @returns {Array}
 */

export function findSmallestAndBiggest(arr) {
  const newArray = arr.reduce((acc, el) => {
    if (el < acc[0]) acc[0] = el
    if (el > acc[1]) acc[1] = el
    
    return acc
  }, [arr[0], arr[0]])
  return newArray
}

/**
 * Write an implementation of the 'isPalindrome' function
 * that will check if a string is a palindrome
 * (a word, phrase, or sequence that reads the same backward as forward).
 *
 * @param str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  const checkedStr = str
  .toLowerCase()
  .split('')
  .reduce((acc, el) => {
      /[a-z0-9]/.test(el)
        ? acc.push(el)
        : el
      return acc

  },[]).join('')
  const reversedStr = checkedStr
    .split('')
    .reverse()
    .join('')
  return reversedStr === checkedStr
    ? true
    : false
}
