// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}.`);
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
        return (`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Instructor {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++) {
            return (`${this.favSubjects[i]} is my favorite subject.`);
        }
    }

    PRAssignments(subject) {
        return (`${student.name} has submitted a PR for ${subject}.`);
    };

    sprintChallenge(subject) {
        return (`${student.name} has begun sprint challenge on ${subject}.`);
    };
}