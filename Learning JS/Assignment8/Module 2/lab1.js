// Mock function to simulate sending emails
function sendEmail(from, to, message) {
    console.log(`Email sent from ${from} to ${to}: ${message}`);
}

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }

    // Add a course if it doesn't exist
    addCourse(course, level) {
        for (let c of this.courses) {
            if (c.course === course) return; // already exists
        }
        this.courses.push({course, level});
    }

    // Remove a course if it exists
    removeCourse(course) {
        this.courses = this.courses.filter(c => c.course !== course);
    }

    // Edit the level of a course if it exists
    editCourse(course, level) {
        for (let c of this.courses) {
            if (c.course === course) {
                c.level = level;
                break;
            }
        }
    }

    // Send a message to another user
    sendMessage(to, message) {
        to.messages.push({from: this.email, to: to.email, content: message});
        sendEmail(this.email, to.email, message);
    }

    // Show message history for this user
    showMessagesHistory() {
        for (let message of this.messages) {
            console.log(`${message.from} -> ${message.to}: ${message.content}`);
        }
    }
}

// Creating users
let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

// Adding and removing courses
student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');

teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);

// Display number of courses
console.log(`${student1.name}: ${student1.courses.length} courses`); // Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // Paula: 1 courses

// Sending messages
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');

// Show message history of the student
student1.showMessagesHistory();
// Output:
// PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// PaulaThompkins@jourrapide.com -> rfife@rhyta.com: another message