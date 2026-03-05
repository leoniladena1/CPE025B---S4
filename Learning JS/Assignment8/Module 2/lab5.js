// ------------------ Base Classes ------------------ //
class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    }

    addCourse(course, level) {
        for (let c of this.courses) {
            if (c.course === course) return;
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
        this.addCourse(course, level);
    }

    // Send a message to a single user
    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, content: message});
        // Simulate email sending
        console.log(`Email sent: ${from.email} -> ${this.email}: ${message}`);
    }

    showMessagesHistory() {
        for (let msg of this.messages) {
            console.log(`${msg.from} -> ${msg.to}: ${msg.content}`);
        }
    }
}

class ExtendedUser extends User {
    constructor({name, surname, email, role}) {
        super({name, surname, email, role});
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(fullName) {
        let names = (fullName || '').split(' ');
        if (names[0] && names[1]) {
            this.name = names[0];
            this.surname = names[1];
        }
    }

    static match(teacher, student, courseName) {
        let matched = [];
        for (let sCourse of student.courses) {
            for (let tCourse of teacher.courses) {
                if (sCourse.course === tCourse.course && sCourse.level <= tCourse.level) {
                    matched.push(sCourse);
                }
            }
        }
        if (courseName) return matched.find(c => c.course === courseName);
        return matched;
    }
}

class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'teacher'});
    }
}

class Student extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'student'});
    }
}

// ------------------ Tutoring Class ------------------ //
class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    addStudent(name, surname, email) {
        this.students.push(new Student({name, surname, email}));
    }

    addTeacher(name, surname, email) {
        this.teachers.push(new Teacher({name, surname, email}));
    }

    getStudentByName(name, surname) {
        return this.students.find(s => s.name === name && s.surname === surname);
    }

    getTeacherByName(name, surname) {
        return this.teachers.find(t => t.name === name && t.surname === surname);
    }

    getStudentsForTeacher(teacher) {
        return this.students.filter(s => ExtendedUser.match(teacher, s).length > 0);
    }

    getTeacherForStudent(student) {
        return this.teachers.filter(t => ExtendedUser.match(t, student).length > 0);
    }
}

// ------------------ ExtendedTutoring Class ------------------ //
class ExtendedTutoring extends Tutoring {
    constructor() {
        super();
    }

    // Send a message from one user to a list of recipients
    sendMessages(from, to = [], message) {
        if (from && to.length) {
            for (let recipient of to) {
                recipient.sendMessage(from, message);
            }
        }
    }
}

// ------------------ Testing ------------------ //
let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));

tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');

// Show message history for each recipient
for (let user of to) {
    user.showMessagesHistory();
}
// Output:
// PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message