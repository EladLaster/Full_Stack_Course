class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
  work(office) {
    for (let i = 0; i < 10; i++) {
      office.documents.push(new Document(this.name));
    }
  }
}

class Manager extends Employee {
  constructor(name) {
    super(name);
    this.employees = [];
  }

  hireEmployee(name) {
    const newEmployee = new Employee(name);
    this.employees.push(newEmployee);
  }

  askEmployeesToWork(office) {
    this.employees.forEach(emp => {
      emp.work(office);
    });
  }
}

class Cleaner extends Employee {
  constructor(name) {
    super(name);
  }
  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.managers = [];
    this.cleaners = [];
    this.documents = [];
  }

  hireCleaner(name) {
    const newCleaner = new Cleaner(name);
    this.cleaners.push(newCleaner);
  }

  hireManager(name) {
    const newManager = new Manager(name);
    this.managers.push(newManager);
  }

  startWorkDay() {
    this.managers.forEach(manager => {
      manager.askEmployeesToWork(this);
    });

    this.cleaners.forEach(cleaner => {
      cleaner.clean();
    });
  }
}