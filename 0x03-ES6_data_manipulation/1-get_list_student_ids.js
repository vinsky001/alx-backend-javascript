export default function getListStudents(studentsList) {
  const getListId = [];
  // Checks if argument (studentList) is not an array
  if (Array.isArray(studentsList)) {
    studentsList.map((student) => getListId.push(student.id));
  }
  return getListId;
}
