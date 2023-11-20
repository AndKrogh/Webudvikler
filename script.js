let json_string = '{"name":"Jane","age":34,"address":{"street":"Seebladsgade 1","city":"Odense C"}}'
const student = JSON.parse(json_string)
console.log(student.name)
console.log(student.address.street)

JSON.stringify(student)
console.log(student)