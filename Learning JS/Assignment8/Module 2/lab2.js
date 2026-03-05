// Base User class
class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
    }

    addCourse(course, level) {
        for (let c of this.courses) {
            if (c.course === course) return; // avoid duplicates
        }
        this.courses.push({course, level});
    }

    removeCourse(course) {
        this.courses = this.courses.filter(c => c.course !== course);
    }

    editCourse(course, level) {
        for (let c of this.courses) {
            if (c.course === course) {
                c.level = level;
                return;
            }
        }
        // If course doesn't exist, add it
        this.addCourse(course, level);
    }
}

// ExtendedUser adds fullName getter/setter
class ExtendedUser extends User {
    constructor({name, surname, email, role}) {
        super({name, surname, email, role});
    }

    // Getter returns concatenated full name
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    // Setter splits full name into first and last
    set fullName(fullName) {
        let names = fullName.split(' ');
        if (names[0] && names[1]) {
            this.name = names[0];
            this.surname = names[1];
        }
    }
}

// Teacher subclass
class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'teacher'});
    }
}

// Student subclass
class Student extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'student'});
    }
}

// ---------------------- Testing ---------------------- //
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4); // Adds chemistry since it doesn't exist

console.log(`${student1.fullName}: ${student1.courses.length} courses`); // Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // Paula Thompkins: 2 courses

student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // Rafael Fifer: 1 courses