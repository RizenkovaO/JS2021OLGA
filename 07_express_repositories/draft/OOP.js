class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printName = () => console.log(this.name)
}

class Employe extends Person{
    constructor(name, age, position){
        super(name, age)
        this.position = position
    }
}

class Employer {
    constructor(name){
        this.name = name
        this.employe = new Person('Olga', 29)
    }
}

let worker = new Employe('Oscar', 323251)