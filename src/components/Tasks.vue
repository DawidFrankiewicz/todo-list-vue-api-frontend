<script setup>
import { onMounted, ref } from 'vue';
import { getTasks, deleteTask } from '@/api';

const USER = {
    userName: 'user56',
    password: 'password56',
};

const tasks = ref([]);

const loadTasks = async () => {
    try {
        tasks.value = await getTasks(USER);
    } catch (error) {
        // Handle error
        console.error(error);
    }
};

const removeTask = async (id) => {
    try {
        await deleteTask(id, USER);
    } catch (error) {
        // Handle error
        console.error(error);
    } finally {
        loadTasks();
    }
};

onMounted(async () => {
    loadTasks();
});
</script>

<template>
    <table>
        <thead>
            <tr>
                <th class="border p-1 text-lg">Id</th>
                <th class="border p-1 text-lg">Title</th>
                <th class="border p-1 text-lg">Description</th>
                <th class="border p-1 text-lg">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="task in tasks" :key="task.id">
                <td class="border p-1">{{ task.id }}</td>
                <td class="border p-1">{{ task.title }}</td>
                <td class="border p-1">{{ task.description }}</td>
                <td class="border p-1">{{ task.status }}</td>
                <td>
                    <button @click="removeTask(task.id)" class="border p-1">
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
