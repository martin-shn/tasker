import { httpService } from './http.service';

// const BASE_URL = (process.env.NODE_ENV === 'production')
//  ? '/api/toy/'
//  : 'http://localhost:3030/api/toy/';

export const taskService = {
    query,
    getById,
    add,
    update,
    remove,
    startTask
};

async function query(filterBy = {}) {
    try {
        // const res = await axios.get(`${BASE_URL}`,{params:filterBy})
        // return res.data
        return await httpService.get('task/', filterBy);
    } catch (err) {
        console.log('Cannot query tasks', err);
        throw err;
    }
}

async function getById(taskId) {
    try {
        // const res = await axios.get(`${BASE_URL}${toyId}`)
        // if (!res.data) return {}
        const res = await httpService.get(`task/${taskId}`);
        if (!res) return {};
        return res;
    } catch (err) {
        console.log('Cannot get task by id', err);
        throw err;
    }
}

async function remove(task) {
    try {
        // return await axios.delete(`${BASE_URL}${toy._id}`)
        return await httpService.delete(`task/${task._id}`);
    } catch (err) {
        console.log('Cannot remove task', err);
        throw err;
    }
}

async function update(task) {
    try {
        // const res = await axios.put(`${BASE_URL}`,{toy})
        // return await res.data
        return await httpService.put('task/', { task });
    } catch (err) {
        console.log('Cannot update task', err);
        throw err;
    }
}

async function add(task) {
    try {
        // const user = userService.getLoggedinUser()
        // const res = await axios.post(`${BASE_URL}`,{toy,user})
        // return await res.data
        return await httpService.post('task/', { task });
    } catch (err) {
        console.log('Cannot add task (service)', err);
        throw err;
    }
}

async function startTask(taskId) {
    try {
        return await httpService.get(`task/${taskId}/start`);
    } catch (err) {
        console.log('Cannot start the task', err);
        throw err;
    }
}
