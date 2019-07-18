// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(`${this.favSubjects[i]} is my favorite subject.`);
        }
    }

    PRAssignments(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    };

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    };
}

class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}



// Instructors
const cameron = new Instructor({
    name: 'Cameron',
    age: '32',
    location: 'Florida',
    gender: 'M',
    specialty: 'Back-End',
    favLanguage: 'C#',
    catchPhrase: 'Awesome Sauce!'
});

const dan = new Instructor({
    name: 'Dan',
    age: '40',
    location: 'North Carolina',
    gender: 'F',
    specialty: 'JavaScript',
    favLanguage: 'Python',
    catchPhrase: 'Is that your final answer?'
});

// Students
const amy = new Student({
    name: 'Amy',
    age: '36',
    location: 'Indiana',
    gender: 'F',
    previousBackground: 'Stay at home mom',
    className: 'CS103',
    favSubjects: ['HTML', 'React', 'JavaScript']
});

const jesse = new Student({
    name: 'Jesse',
    age: '28',
    location: 'Kentucky',
    gender: 'F',
    previousBackground: 'Artist',
    className: 'WEB103',
    favSubjects: ['Javascript', 'HTML', 'CSS']
});

// Project Managers
const joe = new ProjectManager({
    name: 'Joe',
    age: '29',
    location: 'California',
    gender: 'M',
    specialty: 'Back-End',
    favLanguage: 'C++',
    catchPhrase: 'Bazinga!',
    gradClassName: 'WEB104',
    favInstructor: 'Cameron'
});

const amber = new ProjectManager({
    name: 'Amber',
    age: '30',
    location: 'Alabama',
    gender: 'F',
    specialty: 'Front-End',
    favLanguage: 'JavaScript',
    catchPhrase: 'You know it!',
    gradClassName: 'WEB106',
    favInstructor: 'Dan'
});


//Test console loggs

console.log(cameron.name)
cameron.demo(`HTML`);
cameron.grade(amy, `JavaScript`);


dan.speak();
console.log(dan.specialty);


console.log(amy.age);
amy.listsSubjects();
amy.PRAssignments(`JavaScript`);
amy.sprintChallenge('HTML');


amber.standUp(`webpt8`);
amber.debugsCode(jesse, `JavaScript`);