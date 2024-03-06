//Bootcamp Student Registration Software

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo () {
        console.log(`Acquiring Student Information...\n`+
        `Student Name: ${this.name}, Email: ${this.email}`);
        return true;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        console.log(`Registering ${studentToRegister.name} to the ${this.name} bootcamp.`)
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log("Invalid name or email.");
            return false;
        } else {
            const exists = this.students.find(student => student.email === studentToRegister.email);
            if (exists) {
                console.log(`The ${studentToRegister.email} email is already registered.`);
                return false;
            } else {
                this.students.push(studentToRegister);
                console.log(`Successfully registered ${studentToRegister.name} to the ${this.name} bootcamp.`);
                return true;
            }
        }
    }

    listStudents () {
        if (this.students.length === 0) {
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false; 
        } else {
            console.log(`The students registered in the ${this.name} bootcamp are:`);        
            const myFunction = function (student) {
                return console.log(`Name: ${student.name}, Email: ${student.email}`);
            }
            this.students.forEach(myFunction);
            return true;
        }
    }

    getInfo () {
        console.log(`Acquiring Bootcamp Information...\n`+
        `Bootcamp Name: ${this.name}, Level: ${this.level}`);
        return true;
    }

    removeStudent (email) {
        for (let student of this.students) {
            if (student.email === email) {
                console.log(`Removing ${student.name} from the ${this.name} bootcamp.`)
                this.students.splice(this.students.indexOf(student), 1);
                console.log(`Successfully removed ${student.name} from the ${this.name} bootcamp`);
                return true;
            }     
        }
    }
}

//Testing 

//TASK 1
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

//TASK 2
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced' && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

//TASK 3
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if (attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    //TASK 4
    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }

    //BONUS 1 
    if (bootcamp.getInfo()) {
        console.log("BONUS 1: PASS");
    }
    
    //BONUS 2
    bootcamp.registerStudent(new Student('Jeph Daligdig', 'jeff@email.com'));
    bootcamp.listStudents();
    if(bootcamp.removeStudent('jeff@email.com')) {
        if (bootcamp.students.length === 0) {
            bootcamp.listStudents();
            console.log("BONUS 2: PASS");
        }
    }

    //BONUS 3
    if (student.getInfo()) {
        console.log("BONUS 3: PASS");
    }
};

runTest(reactBootcamp, testStudent);
