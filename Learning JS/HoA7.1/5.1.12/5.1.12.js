let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (let contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

// New function: sort contacts by a selected field
let sortContacts = function(contacts, field) {
    if (!(contacts instanceof Array)) return;
    if (!['name', 'phone', 'email'].includes(field)) return;

    contacts.sort((a, b) => {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
    });
}

// Example usage:

console.log("Original Contacts:");
showAllContacts(contacts);

console.log("\nAdding a new contact:");
addNewContact(contacts, "Alice Morgan", "0912 345 6789", "alice@example.com");
showAllContacts(contacts);

console.log("\nSorting contacts by name:");
sortContacts(contacts, "name");
showAllContacts(contacts);

console.log("\nSorting contacts by phone:");
sortContacts(contacts, "phone");
showAllContacts(contacts);