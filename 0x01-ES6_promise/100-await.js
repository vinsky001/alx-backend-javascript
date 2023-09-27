import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser concurrently using Promise.all
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If an error occurs in either function, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
