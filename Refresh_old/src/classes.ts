abstract class Department {
  //   private id: string
  //   public name: string
  protected employees: string[] = []
  constructor(protected readonly id: string, public name: string) {
    //this.name = name
    //this.employees = e
  }
  static createEmployee(name: string) {
    return { name: name }
  }

  abstract describe(this: Department): void
  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}
// Inheritance
class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, "IT")
    this.admins = admins
  }
  describe() {
    console.log("ID " + this.id)
  }
}
class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment
  //Getters & Setters
  get mostRecentPost() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error("No report found")
  }
  set mostRecentPost(value: string) {
    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
    this.lastReport = reports[0]
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment("d2", [])
    return this.instance
  }
  describe() {
    console.log(this.id)
  }
  addEmployee(employee: string) {
    if (employee === "Abdou") {
      return
    }
    this.employees.push(employee)
  }
  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }
  getReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee("moh")
console.log(employee1)
const it = new ITDepartment("001", ["Abdou"])
it.addEmployee("Rayan")
it.addEmployee("Abdou")
console.log(AccountingDepartment.getInstance())
console.log(AccountingDepartment.getInstance())

/*This is not possible with private

ccounting.employees[2] = "Sara"

*/
it.describe()
console.log(it)

const accounting = AccountingDepartment.getInstance()
accounting.addEmployee("Abdou")
accounting.addEmployee("Lben")
accounting.mostRecentPost = "Abdelkaioum"
accounting.addReport("something is not okay")
console.log(accounting.mostRecentPost)
accounting.getReports()
accounting.printEmployeeInfo()
