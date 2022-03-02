class Department {
  name: string
  employees: string[] = []
  constructor(n: string) {
    this.name = n
    //this.employees = e
  }

  describe() {
    console.log("department " + this.name)
  }
  addEmplyee(employee: string) {
    this.employees.push(employee)
  }
  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}
const accounting = new Department("rayan")
accounting.addEmplyee("Rayan")
accounting.addEmplyee("Abdou")
accounting.describe()
console.log(accounting)
