function addNum(a: number, b: number) {
  return a + b
}

export default addNum
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`

export const format = (title: string, param: string | number): string =>
  `${title} ${param} `

export const printFormat = (title: string, param: string | number) => {
  console.log(`${title} ${param} `)
}

//Promise

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`)

//Rest params
function introduce(salutation: string, ...names: string[]) {
  return `${salutation} to ${names.join(" ")}`
}

//console.log(introduce("Hello", "mama", "seddik"))

export function getName(user: { first: string; last: string }): string {
  return `${user.first} ${user.last}`
}
