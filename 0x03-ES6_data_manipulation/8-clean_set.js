export default function cleanSet(set, startString) {
    // intialize empty string to store cleaned values
  let result = '';

  // Check if startString is a non-empty string and set is an instance of Set
  if (typeof startString === 'string' && startString.length > 0 && set instanceof Set) {
    // Iterate through the elements in the Set using forEach
    set.forEach((value) => {
      // Check if the current value starts with the specified startString
      if (value.startsWith(startString)) {
        // If it does, slice off the startString and append it to the result with a hyphen
        result += `${value.slice(startString.length)}-`;
      }
    });
  }

  // Remove the trailing hyphen from the result and return the cleaned string
  return result.slice(0, -1);
}
