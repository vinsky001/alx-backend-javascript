export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to store employee names.
  const employeeNames = [];

  // Iterate through the object using the provided iterator.
  for (const employee of reportWithIterator) {
    // Extract the name from each employee object and push it to the array.
    const { name } = employee;
    employeeNames.push(name);
  }

  // Join the employee names with '|' separator and return as a string.
  return employeeNames.join('|');
}
