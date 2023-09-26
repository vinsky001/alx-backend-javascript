export default function createIteratorObject (report) {
  function*  iterateEmployees () {
    for (const department of Object.values(report)) {
      for (const employee of department.employees) {
        yield employee;
      }
    }
  }

  // Create and return an iterator object
  const iterator = iterateEmployees();

  return {
    [Symbol.iterator]: () => iterator,
    next: () => iterator.next()
  };
}
