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

function showContact(contactList, index) {
    if (!(contactList instanceof Array)) return;
    if (index < 0 || index >= contactList.length) return;
    let contact = contactList[index];
    console.log("Name:", contact.name);
    console.log("Phone:", contact.phone);
    console.log("Email:", contact.email);
}

function showAllContacts(contactList) {
    if (!(contactList instanceof Array)) return;
    for (let i = 0; i < contactList.length; i++) {
        showContact(contactList, i);
        console.log("-----------");
    }
}

function addNewContact(contactList, name, phone, email) {
    if (!(contactList instanceof Array)) return;
    if (!name || !phone || !email) return;
    contactList.push({ name, phone, email });
}

showAllContacts(contacts);
addNewContact(contacts, "Alice Morgan", "0912 345 6789", "alice@example.com");
showContact(contacts, 3);