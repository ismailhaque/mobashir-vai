const courses = document.querySelector(`.counter .courses h1`);
const organizations = document.querySelector(`.counter .organizations h1`);
const students = document.querySelector(`.counter .students h1`);


let counter = 0;

for (counter = 0; counter < 10; counter++) {
    courses.innerHTML = counter;
} 
for (counter = 0; counter < 824; counter++) {
    organizations.innerHTML = counter;
} 
for (counter = 0; counter < 9977; counter++) {
    students.innerHTML = counter;
}
