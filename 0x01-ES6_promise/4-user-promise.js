export default function signUpUser(firstName, lastName) {
  // creates  and  returns a resolved promise with a new object
  return Promise.resolve({
    firstName,
    lastName,
  });
}
