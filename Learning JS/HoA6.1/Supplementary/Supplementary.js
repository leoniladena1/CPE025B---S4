let contacts = [
{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
},
{
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
},
{
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}
];

while (true) {

let choice = prompt(
"Choose an option:\n" +
"[1] Show contact by index\n" +
"[2] Show all contacts\n" +
"[3] Add new contact\n" +
"[4] Search contact by name\n" +
"[5] Quit\n\n" +
"Your choice:"
);

if (choice === null) {
continue;
}

choice = choice.trim();

if (choice === "5") {
console.log("Program terminated.");
break;
}

else if (choice === "1") {

let indexInput = prompt("Enter contact index:");

if (indexInput === null) {
continue;
}

let index = Number(indexInput);

if (!isNaN(index) && index >= 0 && index < contacts.length) {
console.log(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
} else {
console.log("Error: Invalid index.");
}

}

else if (choice === "2") {

if (contacts.length === 0) {
console.log("No contacts available.");
} else {
for (let i = 0; i < contacts.length; i++) {
console.log(`${i}: ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
}
}

}

else if (choice === "3") {

let newName = prompt("Enter Name:");
if (newName === null) continue;

let newPhone = prompt("Enter Phone:");
if (newPhone === null) continue;

let newEmail = prompt("Enter Email:");
if (newEmail === null) continue;

if (
newName.trim() !== "" &&
newPhone.trim() !== "" &&
newEmail.trim() !== ""
) {

contacts.push({
name: newName.trim(),
phone: newPhone.trim(),
email: newEmail.trim()
});

console.log("Contact added successfully.");

} else {
console.log("Error: All fields must be filled.");
}

}

else if (choice === "4") {

let searchName = prompt("Enter name to search:");

if (searchName === null) {
continue;
}

searchName = searchName.trim().toLowerCase();

let found = false;

for (let i = 0; i < contacts.length; i++) {
if (contacts[i].name.toLowerCase() === searchName) {
console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
found = true;
break;
}
}

if (!found) {
alert("Contact not found");
}

}

else {
console.log("Invalid option.");
}

console.log("------------------------------------");

}