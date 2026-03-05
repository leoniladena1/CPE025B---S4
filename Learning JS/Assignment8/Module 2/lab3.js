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
        // Add course if it doesn't exist
        this.addCourse(course, level);
    }
}

// ExtendedUser class with fullName getter/setter and static match method
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
        let names = (fullName || '').split(' ');
        if (names[0] && names[1]) {
            this.name = names[0];
            this.surname = names[1];
        }
    }

    // Static method to find course matches between teacher and student
    static match(teacher, student, courseName) {
        let matched = [];

        for (let sCourse of student.courses) {
            for (let tCourse of teacher.courses) {
                if (sCourse.course === tCourse.course && sCourse.level <= tCourse.level) {
                    matched.push(sCourse);
                }
            }
        }

        // If specific course requested, return single course object or undefined
        if (courseName) {
            return matched.find(c => c.course === courseName);
        }

        // Return all matches, or empty array if none
        return matched;
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

// ------------------ Testing ------------------ //
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);

let match1 = ExtendedUser.match(teacher1, student1);
console.log(match1); // -> [{course: 'maths', level: 2}]

teacher1.editCourse('maths', 1);
let match2 = ExtendedUser.match(teacher1, student1);
console.log(match2); // -> []

teacher1.addCourse('physics', 4);
let match3 = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match3); // -> {course: 'physics', level: 4}