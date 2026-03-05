//Array of Project Team Directory
teamDirectory = [{
        Name: "Lee Brooks",
        Role: "Designer",
        Skills: ["UI", "UX", "Figma"],
        Available: true
    },
    {
        Name: "Sasha Ivana",
        Role: "Developer",
        Skills: ["HTML", "CSS", "JS"],
        Available: false
    },
    {
        Name: "Jordan Lee",
        Role: "Manager",
        Skills: ["Planning", "Agile"],
        Available: true
    }
]

// Adding a new person to the Team 
teamDirectory.push({Name: "Casey Moore", Role: "QA Engineer", Skills: ["Testing", "Debugging"], Available: true})

// Changing Sasha's availability to true
teamDirectory[2].Available = true;

// Displaying of information

/*a. Using arrayName with the index 0.Name and arrayName index 0.Skill index 0, in order to get the first 
person and his first skill listed in the array. */
console.log("a.", teamDirectory[0].Name, ":", teamDirectory[0].Skills[0])

/* b. Using arrayName index 3 (the 4th and last person in the array) and arrayName index 3.Skills and using 
 .length, in order to get the last person in the array along with the number of her skills. */
console.log("b.", teamDirectory[3].Name, ":", teamDirectory[3].Skills.length);

//c. Using .length at the end of the arrayName in order to see the number of elements inside the array.
console.log("c.", "The total number of people currently in the directory: ", teamDirectory.length);