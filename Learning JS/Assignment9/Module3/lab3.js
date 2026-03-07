class User {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}

class Users {
    constructor() {
        this.users = new Map();
    }

    add(name, surname, email) {
        if (!this.users.has(email)) {
            this.users.set(email, new User(name, surname, email));
        }
    }

    delete(email) {
        this.users.delete(email);
    }

    get(email) {
        return this.users.get(email);
    }

    getAll(sortBy) {
        let arr = Array.from(this.users.values());

        return arr.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
    }
}

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com"); // duplicate ignored
users.add("Xxxx", "Oooo", "dddd@gmail.com");

console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));