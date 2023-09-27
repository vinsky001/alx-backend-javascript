import { signUpUser } from './path/to/4-user-promise.js';
import { uploadPhoto } from './path/to/5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create Promises by calling signUpUser and UploadPhoto
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for all promises to settle
  return Promise.allSettled([userPromise, photoPromise]).then((results) =>
    // Transform the results into the desired array structure
    results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
