
import Person from './person.js';

class Teacher extends Person{
    constructor(id, name, age, klasses=[]){
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce(){
        let className = this.klasses.map(klasses=>klasses.number).join(', ');
        return `${super.introduce()} I am a Teacher. I teach ${this.klasses.length ? 'Class '+ className : 'No Class'}.`
    }

    introduceWith(student){
        if(this.klasses.number === student.klasses.number){
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        }else {
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
    }

    isTeaching(student){
        return this.klass.filter(klass=>klass.isIn(student.klass)).length !== 0;
    }

    notify(student){
        if(student.klass.leader && student.id === student.klass.leader.id){
            console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
        }else{
            console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
        }
    }
}
export default Teacher;