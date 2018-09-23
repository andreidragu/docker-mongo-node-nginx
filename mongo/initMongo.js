db.createUser({
    user: "admin",
    pwd: "adminSecret",
    roles: [{role: "readWrite", db: "dmnnDB"}]
});

db.users.drop();
db.users.insertMany([
    {
        name: "Andrei",
        email: "andrei@email.com",
        password: "andrei123"
    },
    {
        name: "Catalin",
        email: "catalin@email.com",
        password: "catalin123"
    }
]);