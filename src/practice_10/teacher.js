
import Person from './person.js';

class Teacher extends Person{
    constructor(id, name, age, klasses=[]){
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce(){
        let className = this.klasses.map(klass=>klass.number).join(', ');
        return `${super.introduce()} I am a Teacher. I teach ${this.klasses.length ? 'Class '+ className : 'No Class'}.`
    }

    introduceWith(student){
        if(this.klasses.number === student.klasses.number){
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        }else {
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
    }
}
export default Teacher;