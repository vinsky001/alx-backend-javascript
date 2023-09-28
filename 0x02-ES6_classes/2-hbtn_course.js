export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify the type of attributes during object creation
    if (Object.prototype(name) !== String.prototype) throw TypeError('Must be an string');
    if (Object.prototype(length) !== Number.prototype) throw TypeError('Length must be a  Number!');
    if (Object.prototype(students) !== Array.prototype) throw TypeError('students must be an Array!');
    // Each attribute must be stored in an “underscore” attribute version
    this._name = name;
    this._length = length;
    this._student = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(name_) {
    if (Object.getPrototypeOf(name_) !== String.prototype) throw TypeError('name must be a string');
    this._name = name_;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(length_) {
    if (Object.getPrototypeOf(length_) !== Number.prototype) throw TypeError('Length must be a Number');
    this._length = length_;
  }

  // Getter for Students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(students_) {
    if (Object.getPrototypeOf(students_) !== Array.prototype) throw TypeError('students must be an array');
    for (const i of students_) {
      if (Object.getPrototypeOf(i) !== String.prototype) throw TypeError('students must be an array of strings');
    }
    this._students = students_;
  }
}
