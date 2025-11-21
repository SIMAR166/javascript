// Array of people objects

const people = [
    {
        name: "Rohini ",
        age: 22,
        profession: "Web Developer",
        description: "Passionate web developer with a knack for creating responsive and user-friendly websites.",
        image: "https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg"
    },
    {
        name: "Aman Sharma",
        age: 25,
        profession: "UI/UX Designer",
        description: "Creative designer focusing on intuitive and beautiful user interfaces for web and mobile apps.",
        image: "https://i.pinimg.com/736x/ec/38/9d/ec389dd1a5f4a8f331151e46c8a6863f.jpg"
    },
    {
        name: "Neha Kapoor",
        age: 23,
        profession: "Frontend Developer",
        description: "Loves turning designs into responsive, fast-loading web pages with modern technologies.",
        image: "https://i.pinimg.com/736x/6c/47/f8/6c47f8f53371fd28ffec0b766965f20b.jpg"
    },
    {
        name: "Rohit Singh",
        age: 27,
        profession: "Backend Developer",
        description: "Expert in server-side logic, database management, and creating scalable APIs.",
        image: "https://i.pinimg.com/736x/d9/b0/c4/d9b0c40107706b71b0470c01b3e23114.jpg"
    }
];
let kushb = " ";
people.forEach(elem=>{
    kushb = kushb + ` <div class="card">
            <img src="${elem.image}" alt="">
            <h2 class="name">${elem.name} </h2>
            <p class="age">${elem.age}</p>
            <p class="profession">${elem.profession} </p>
            <p class="description">${elem.description} 
           </p> 
        </div>
   `
}

)
let main = document.querySelector(".card-container#card-container")
main.innerHTML = kushb
