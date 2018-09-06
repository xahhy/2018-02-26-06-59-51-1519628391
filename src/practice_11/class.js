class Class {
    constructor(number) {
        this.leaderListeners = [];
        this.assignListeners = [];
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student.klass.number === this.number) {
            this.leader = student;
            this.leaderListeners.forEach(teacher => teacher.notify(student));
        }
        else {
            console.log('It is not one of us.');
        }
    }

    appendMember(student) {
        student.klass = this;
        this.assignListeners.forEach(teacher=>teacher.notify(student))
    }

    isIn(student){
        return student.klass.number === this.number;
    }

    registerAssignLeaderListener(teacher) {
        this.leaderListeners.push(teacher);
    }

    registerJoinListener(teacher){
        this.assignListeners.push(teacher);
    }
}

export default Class;


