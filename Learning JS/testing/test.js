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

//a
console.log("a.", teamDirectory[0].Name, ":", teamDirectory[0].Skills[0])

//b
console.log("b.", teamDirectory[3].Name, ":", teamDirectory[3].Skills.length);

//c
console.log("c.", "The total number of people currently in the directory: ", teamDirectory.length);