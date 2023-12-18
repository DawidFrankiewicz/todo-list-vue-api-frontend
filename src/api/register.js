import { post } from './helpers';

// Base path for domains
const BASE_PATH = '/auth/register';

// POST /auth/register
const registerUser = async (data) => {
    await post(BASE_PATH, {
        email: data.email,
        userName: data.userName,
        password: data.password,
    });
};

export { registerUser };
