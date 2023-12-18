import { get, post, put, del } from './helpers';

// Base path for servers
const BASE_PATH = '/task';

// GET /task
const getTasks = async (user) => {
    return await get(BASE_PATH, user);
};

// GET /task/:id
const getTask = async (data, user) => {
    return await get(BASE_PATH + `/${data.id}`, user);
};

// POST /server
const addTask = async (data, user) => {
    await post(
        BASE_PATH,
        {
            title: data.title,
            description: data.description,
            status: data.status,
        },
        user
    );
};

// PUT /server/:id
const editTask = async (data, user) => {
    await put(
        `${BASE_PATH}/${data.id}`,
        {
            title: data.title,
            description: data.description,
            status: data.status,
        },
        user
    );
};

// DELETE /server/:id
const deleteTask = async (id, user) => {
    await del(`${BASE_PATH}/${id}`, user);
};

export { getTask, getTasks, addTask, editTask, deleteTask };
