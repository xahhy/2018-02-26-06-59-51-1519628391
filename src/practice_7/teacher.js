
import Person from './person.js';

class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        return `${super.introduce()} I am a Teacher. I teach ${this.klass ? 'Class '+this.klass.number : 'No Class'}.`
    }

    introduceWith(student){
        if(this.klass.number === student.klass.number){
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        }else {
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
    }
}
export default Teacher;