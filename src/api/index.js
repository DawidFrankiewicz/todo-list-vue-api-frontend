import { registerUser } from './register.js';
import { getTask, getTasks, addTask, editTask, deleteTask } from './task.js';

export { registerUser, getTask, getTasks, addTask, editTask, deleteTask };

// Baisc usage example:
// import { getDomains } from '@/api';
// In async function:
// try {
//     this.domainsData = await getDomains();
// } catch (error) {
//     // Handle error
//     console.error(error);
// }
