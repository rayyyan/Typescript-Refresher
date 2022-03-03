type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

interface AdminI {
  name: string
  privileges: string[]
}

interface EmployeeI {
  name: string
  startDate: Date
}
interface ElevatedEmployeeI extends AdminI, EmployeeI {}
type fElevatedEmployee = Admin & Employee

const person: ElevatedEmployeeI = {
  name: "Abdou",
  privileges: ["create-backend"],
  startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric
