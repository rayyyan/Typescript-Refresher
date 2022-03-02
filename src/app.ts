class Department {
  //   private id: string
  //   public name: string
  private employees: string[] = []
  constructor(private id: string, public name: string) {
    //this.name = name
    //this.employees = e
  }

  describe() {
    console.log(`Department (${this.id}) name is ${this.name}`)
  }
  addEmplyee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}
const accounting = new Department("001", "rayan")
accounting.addEmplyee("Rayan")
accounting.addEmplyee("Abdou")

/*This is not possible with private

ccounting.employees[2] = "Sara"

*/
accounting.describe()
console.log(accounting)
