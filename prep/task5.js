
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "admin",
    profile: {
      age: 32,
      joined: new Date("2022-04-12"),
      skills: ["React", "Node.js", "GraphQL"]
    },
    isActive: true,
    login() {
      console.log(`${this.name} has logged in.`);
    }
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "user",
    profile: {
      age: 25,
      joined: new Date("2023-02-01"),
      skills: ["HTML", "CSS", "JavaScript"]
    },
    isActive: false,
    login() {
      console.log(`${this.name} has logged in.`);
    }
  },
  {
    id: 3,
    name: "Clara Davis",
    email: "clara@example.com",
    role: "user",
    profile: {
      age: 28,
      joined: new Date("2024-01-15"),
      skills: ["Vue", "TypeScript", "TailwindCSS"]
    },
    isActive: true,
    login() {
      console.log(`${this.name} has logged in.`);
    }
  }
];

const randomSkills = (arr) => {

  for (let user of users) {

    const randomSkills = user.profile.skills.sort(() => Math.random() - 0.5)
    user.profile.skills = randomSkills;
  
    
  }

  console.log(arr)
}

randomSkills(users)

