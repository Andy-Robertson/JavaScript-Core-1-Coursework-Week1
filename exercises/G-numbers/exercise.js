// Program that outputs the value of `numberOfStudents`, `numberOfMentors`
// and `totalStudentsAndMentors` after using template string literal syntax to concatenate
// the string stored in `message`.

// Declare and initialise variables
let numberOfStudents = 15;
let numberOfMentors = 8;
let totalStudentsAndMentors = 0;
let message = "";

// Calculate total number of students
totalStudentsAndMentors = numberOfStudents + numberOfMentors;

// Concatenate string
message = `Number of students: ${numberOfStudents}
Number of mentors: ${numberOfMentors}
Total number of students and mentors: ${totalStudentsAndMentors}`;

console.log(message);
