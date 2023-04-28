//sturcture / pattern
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.surname = lastName;
  }
}

//instantiate
const john = new Student("John", "Doe");
const mike = new Student("Mike", "Rust");

//instance methods
class student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.score = [];
  }
  fullName() {
    alert(firstName, lastName);
    return;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3)
      return "You have been late 3 or more times, you are expelled";
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} time`;
  }
  addScore(score) {
    this.score.push(score);
    return this.score;
  }
  static enrollStuddents() {
    return "The students are selected";
  }
}

john.markLate();
mike.addScore(90);
Student.enrollStuddents(john, mike); // calling the class methods
