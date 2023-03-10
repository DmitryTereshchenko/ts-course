// Code goes here!
abstract class Department {
  // private id: string;
  // private name: string;
  static fiscalYeacr = 2023;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT Department ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get _lastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No reports found');
  }

  set _lastReport(value: string) {
    if (!value) {
      throw new Error('Please specify the value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, public reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;

    this.instance = new AccountingDepartment('d1', []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === 'Dima') return;

    this.employees.push(name);
  }

  describe() {
    console.log('Accounting Department ID: ' + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('it1', ['Dima']);

// it.addEmployee('Dzmitry');
// it.addEmployee('Varvara');

it.describe();
// it.printEmployeeInformation();

// console.log(it);

const employee1 = Department.createEmployee('Dzm');
console.log(employee1, Department.fiscalYeacr);

const accounting = AccountingDepartment.getInstance();
const accounting1 = AccountingDepartment.getInstance();

// accounting._lastReport = 'Test report';
// accounting.addReport('Final year');

accounting.describe();
// accounting.addEmployee('Dima');
// accounting.addEmployee('Dmitry');
// accounting.printReports();
// accounting.printEmployeeInformation();

// console.log(accounting._lastReport);

// const accountingCopy = { name: 'Copy', describe: accounting.describe };
// accountingCopy.describe();
