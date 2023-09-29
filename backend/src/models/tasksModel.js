const connection = require('./connection')

const getAll = async() => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async(task) => {

    const { title } = task;

    const dateUTC = new Date().toUTCString();

    const query = `INSERT INTO tasks(title, status, created_at) VALUES ('${title}', 'pendente', '${dateUTC}')`;
 
    const [createdTask] = await connection.execute(query);
    return { insertId: createdTask.insertId };
}

module.exports = {
    getAll,
    createTask,
};