import axios from 'axios';

// Base URL for API
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const validateUserBasicAuth = (user) => {
    if (!user || !user.userName || !user.password) {
        return {};
    }
    return {
        username: user.userName,
        password: user.password,
    };
};

// Generic GET request
const get = async (url, user) => {
    let data = null;

    await axios
        .get(BASE_URL + url, {
            auth: validateUserBasicAuth(user),
        })
        .then((response) => {
            // Check for valid response status code
            if (response.status !== 200) {
                throw new Error(
                    `Invalid response from server, status code ${response.status}`
                );
            }

            data = response.data;
        })
        .catch((error) => {
            throw new Error(error);
        });

    return data;
};

// Generic POST request
const post = async (url, data, user) => {
    await axios
        .post(BASE_URL + url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
            auth: validateUserBasicAuth(user),
        })
        .then((response) => {
            // Check for valid response status code
            if (response.status !== 200) {
                throw new Error(
                    `Invalid response from server, status code ${response.status}`
                );
            }
        })
        .catch((error) => {
            throw new Error(error);
        });
};

// Generic PUT request
const put = async (url, data, user) => {
    await axios
        .put(BASE_URL + url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
            auth: validateUserBasicAuth(user),
        })
        .then((response) => {
            // Check for valid response status code
            if (response.status !== 200) {
                throw new Error(
                    `Invalid response from server, status code ${response.status}`
                );
            }
        })
        .catch((error) => {
            console.log(error.response.data);
            throw new Error(error);
        });
};

// Generic DELETE request
const del = async (url, user) => {
    await axios
        .delete(BASE_URL + url, {
            auth: validateUserBasicAuth(user),
        })
        .then((response) => {
            // Check for valid response status code
            if (response.status !== 200) {
                throw new Error(
                    `Invalid response from server, status code ${response.status}`
                );
            }
        })
        .catch((error) => {
            throw new Error(error);
        });
};

export { get, post, put, del };
