let contacts = [
    {
        name: "Linus Torvalds",
        role: "System Admin",
        skills: ["Linux", "Git", "Kernels"],
        availability: true
    },
    {
        name: "Ada Lovelace",
        role: "Logic Analyst",
        skills: ["Algorithms", "Math", "Analytics"],
        availability: false
    },
    {
        name: "Alan Turing",
        role: "Cryptographer",
        skills: ["Logic", "Enigma", "Security"],
        availability: true
    }
];

function showContact(contactList, index) {
    if (!(contactList instanceof Array)) return;
    if (index < 0 || index >= contactList.length) {
        console.log("Invalid index.");
        return;
    }
    let contact = contactList[index];
    console.log(`Name: ${contact.name}`);
    console.log(`Role: ${contact.role}`);
    console.log(`First Skill: ${contact.skills[0]}`);
}

function showAllContacts(contactList) {
    if (!(contactList instanceof Array)) return;
    contactList.forEach((contact, i) => console.log(`${i}. ${contact.name}`));
}

function addNewContact(contactList, name, role, skill) {
    if (!(contactList instanceof Array)) return;
    if (!name || !role || !skill) {
        console.log("All fields are required.");
        return;
    }
    contactList.push({
        name: name,
        role: role,
        skills: [skill],
        availability: true
    });
    console.log(`Contact ${name} added successfully.`);
}

function searchContact(contactList, name) {
    if (!(contactList instanceof Array)) return;
    let found = false;
    for (let contact of contactList) {
        if (contact.name.toLowerCase() === name.toLowerCase()) {
            console.log(`Role: ${contact.role}`);
            console.log(`Status: ${contact.availability ? "Available" : "Busy"}`);
            found = true;
            break;
        }
    }
    if (!found) console.log(`Contact "${name}" not found.`);
}

while (true) {
    let action = prompt(
        "Select an action by number:\n" +
        "1. Show a contact\n" +
        "2. Show all contacts\n" +
        "3. Add a new contact\n" +
        "4. Search a contact\n" +
        "5. Quit\n" +
        "Enter your choices: "
    );

    switch (action) {
        case "1":
            let index = parseInt(prompt("Enter contact index (0-based):"));
            showContact(contacts, index);
            break;
        case "2":
            showAllContacts(contacts);
            break;
        case "3":
            let name = prompt("Enter Name:");
            let role = prompt("Enter Role:");
            let skill = prompt("Enter a Skill:");
            addNewContact(contacts, name, role, skill);
            break;
        case "4":
            let searchName = prompt("Enter Name to search:");
            searchContact(contacts, searchName);
            break;
        case "5":
            alert("Goodbye!");
            break;
        default:
            console.log("Invalid choice. Please select a number 1-5.");
            continue;
    }

    if (action === "5") break;
    console.log("----------------------------------------------------------------")
}
