// ------------------ Base Classes ------------------ //
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
        if (courseName) {
            return matched.find(c => c.course === courseName);
        }
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
        return this.students.filter(student => ExtendedUser.match(teacher, student).length > 0);
    }

    getTeacherForStudent(student) {
        return this.teachers.filter(teacher => ExtendedUser.match(teacher, student).length > 0);
    }
}

// ------------------ Testing ------------------ //
let tutoring = new Tutoring();

// Add students and teacher
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

// Assign courses
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);

let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);

// Get teachers and students based on match
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...}
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...}

// Test with student who has no match
student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...}