import { v4 as uuidv4 } from 'uuid';

const id1 = uuidv4();
const id2 = uuidv4();
const id3 = uuidv4();

let users = {
    [id1]: {
        id: id1,
        name: "John Graham",
        email: "john_graham@test.com",
        password: "1234",
        username: "john_graham",
      },
    [id2]: {
        id: id2,
        name: "Jane Smith",
        email: "jan3msmith@test.com",
        password: "1234",
        username: "jan3msmith",
      },
    [id3]: {
        id: id3,
        name: "test acct",
        email: "testacct@test.com",
        password: "1234",
        username: "testacct",
      },
};

const getUsers = () => {
    new Promise((resolve, reject) => {
        if (!users) {
            return setTimeout(
                () => {reject(new Error('Users not found.'))}, 
                250
            );
        };
        return setTimeout(() => {resolve(Object.values(users))}, 250);
    })
};

const getUser = (id) => {
    new Promise((resolve, reject) => {
        const user = users[id];
        if (!user) {
            return setTimeout(
                () => {reject(new Error('User not found.'))}, 
                250
            );
        };
        return setTimeout(() => {resolve(users[id])}, 250);
    })
};

const createUser = (data) => {
    new Promise((resolve, reject) => {
        if (!data.name || !data.email || !data.password) {
            reject(new Error('Please complete all fields.'));
        };
        const id = uuidv4();
        const newUser = { id, ...data };
        users = { ...users, [id]: newUser };

        return setTimeout(() => {resolve(true)}, 250);
    });
};

const updateUser = (id, data) => {
    new Promise((resolve,reject) => {
        if (!users[id]) {
            return setTimeout(
                () => {reject(new Error('User not found.'))}, 
                250
            );
        };
        users[id] = { ...users[id], ...data };

        return setTimeout(() => {resolve(true)}, 250);
    });
};

const deleteUser = (id) => {
    new Promise((resolve, reject) => {
        const { [id]: user, ...users } = users;
        if (!user) {
            return setTimeout(
                () => {reject(new Error('User not found.'))}, 
                250
            );
        };
        users = { ...users };

        return setTimeout(() => {resolve(true)}, 250);
    });
};

export {users, getUser, getUsers, createUser, updateUser, deleteUser}
