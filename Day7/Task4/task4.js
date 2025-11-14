let students = [
    { name: "Mohamed", degree: 90 },
    { name: "salah", degree: 67 },
    { name: "omar", degree: 100 },
    { name: "Mahmoud", degree: 33 },
    { name: "ali", degree: 95 },
];


const highStudents = students.filter(student => student.degree >= 90);

highStudents.forEach(student => {
    document.write(`${student.name} : ${student.degree} <br>`);
});