// Activity-1: Class Definition:

// Task-1: Define a class "Person" with properties "name" and "age", and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("Hi there");
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`The updated age is ${newAge}`);
  }

  static genericGreeting() {
    return "Hello this is a generic greeting message from Person class";
  }
}

const person = new Person("John Wick", 30);
console.log(person);
person.greeting();

// Task-2: Add a method to the "Person" class that updates the age property and logs the updated age.
console.log(person);
person.updateAge(35);
console.log(person);

// Activity-2: Class Inheritance:

// Task-3: Define a class "Student" that extends the "Person" class. Add a property "studentId" and a method to return the student ID. Create a instance of the "Student" class and log the student ID.

class Student extends Person {
  static countStudents = 0;
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
    Student.countStudents++;
  }
  generateStudentId(studentId) {
    this.studentId = studentId;
    return `${this.name} has the student ID of ${this.studentId}`;
  }

  greeting(studentId) {
    this.studentId = studentId;
    return `Hello ${this.name}! You have a student ID of ${this.studentId}`;
  }

  static getStudentCount() {
    return `The total number of students are ${this.countStudents}`;
  }
}

const student = new Student("Harry Potter", 12);
console.log(student);
console.log(student.generateStudentId(12345));

// Task-4: Override the greeting method in the "Student" class to include the student ID in the message. Log the overriden greeting message.

console.log(student.greeting(12345));

// Activity-3: Static Methods and Properties:

// Task-5: Add a static method to "Person" class that returns a generic greeting message. Call this static without creating an instance of the class and log the message.
console.log(Person.genericGreeting());

// Task-6 Add a static property to "Student" class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(Student.getStudentCount());

// Activity-4: Getters and Setters:

// Task-7: Add a getter method to the "Person" class to return the full name (assume a "firstname" and "lastname" property). Create an instance and log the full name using the getter.

class Person2 {
  constructor(firstname, age, lastname) {
    this.firstname = firstname;
    this.age = age;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullName(name) {
    const [firstname, lastname] = name.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const newPerson = new Person2("Shahbaz", 25, "Ansari");

console.log(newPerson.fullName);

// Task-8: Add a setter method to the "Person" class to update the name properties ("firstname" and "lastname"). Update the name using the setter and log the updated full name.

const anotherPerson = new Person2("John", "Doe");
console.log(anotherPerson.fullName);

anotherPerson.fullName = "Jane Smith";
console.log(anotherPerson.fullName);

// Activity-5: Private Fields (Optional):

// Task-9: Define a class "Account" with private fields for "balance" and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance;
  constructor(amount) {
    if (this.#balance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = amount;
  }

  #deposit(amount) {
    if (amount < 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
  }

  getPublicDeposit(amount) {
    return this.#deposit(amount);
  }

  #withdraw(amount) {
    if (amount < 0) {
      throw new Error("Withdraw amount must be positive");
    }

    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;
  }

  getPublicWithdraw(amount) {
    return this.#withdraw(amount);
  }

  getBalance() {
    return this.#balance;
  }
}

// Task-10: Create an instance of the "Account" class and test the deposit and withdraw methods, logging the balance after each operation.

const myAccount = new Account(450);
console.log(myAccount.getBalance());
myAccount.getPublicDeposit(450);
console.log(myAccount.getBalance());
myAccount.getPublicWithdraw(200);
console.log(myAccount.getBalance());
