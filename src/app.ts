class Department {
  //   private id: string
  //   public name: string
  protected employees: string[] = []
  constructor(private readonly id: string, public name: string) {
    //this.name = name
    //this.employees = e
  }

  describe() {
    console.log(`Department (${this.id}) name is ${this.name}`)
  }
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
}
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
  }
  addEmployee(employee: string) {
    if (employee === "Abdou") {
      return
    }
    this.employees.push(employee)
  }
  addReport(text: string) {
    this.reports.push(text)
  }
  getReports() {
    console.log(this.reports)
  }
}
const it = new ITDepartment("001", ["Abdou"])
it.addEmployee("Rayan")
it.addEmployee("Abdou")

/*This is not possible with private

ccounting.employees[2] = "Sara"

*/
it.describe()
console.log(it)

const accounting = new AccountingDepartment("252", [])
accounting.addEmployee("Abdou")
accounting.addEmployee("Lben")
accounting.addReport("something is not okay")
accounting.getReports()
accounting.printEmployeeInfo()
