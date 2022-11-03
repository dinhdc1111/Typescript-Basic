type TPerson = {
    id: number,
    name: string,
    age: number,
    status ?: boolean
}
const person: TPerson = {
    id: 1,
    name: "Công Định",
    age: 20,
}
console.log(person.name);
const persons: TPerson[] = [
    {id: 1, name: "Dinh", age: 20, status: true},
    {id: 2, name: "Dinh", age: 20, status: true},
    {id: 3, name: "Dinh", age: 20, status: true}
]
console.log(persons);

/**function sum(a:number, b:number): number{
    return a + b;
}
const a:number = 10;
const b:number = 20;
const result = sum(a,b);
console.log(result);*/
