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


for (let i=0; i=1; i){
    let last = contacts.length - 1;
    let choices = prompt("Choose:\n [1] show first contact \n [2] show last contact \n [3] show all contacts \n [4] add new contact \n [5] quit \n Your choice: ");
    
    if (choices == 1){
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    } else if (choices == 2) { console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
    } else if (choices == 3){
        for (let x = 0 ; x < contacts.length ; x++){
            console.log(`${contacts[x].name} / ${contacts[x].phone} / ${contacts[x].email}`);
        }
    } else if (choices == 4) {
        let newName = prompt("Enter Name:");
        let newPhone = prompt("Enter Phone Number:");
        let newEmail = prompt("Enter Email:");
    
        if (
            newName !== null && newName.trim() !== "" &&
            newPhone !== null && newPhone.trim() !== "" &&
            newEmail !== null && newEmail.trim() !== ""
        ) {
            let newContact = {
                name: newName,
                phone: newPhone,
                email: newEmail
            };
    
            contacts.push(newContact);
            console.log("Contact added successfully!");
        } else {
            console.log("Error: Missing input. Contact not added.");
        }
    } else if (choices == 5) {
    console.log("Program terminated.");
    process.exit();
}
    console.log("--------------------------------------------");
}




