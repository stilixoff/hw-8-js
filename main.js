// let student = {
//     university: 'УГХТУ',
//     course: 'АПП',
//     fullName: 'Стародубец Олег'
// };

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

    getInfo() {
        return 'Студент 1го курса ' + this.university + ' ,' + this.fullName;
    }

    getMarks() {
        return this.marks = [5, 4, 4, 5];
    }

    setMarks(val) {
        this.marks.push(val);
        return this.marks;
    }

    getAverageMark(...val) {
        return (this.marks.reduce((a, b) => {
            return a+b;
        }, 0)) / this.marks.length;
    }

    dismiss() {
        return this.marks = null;
    }

    recover() {
        return this.getMarks();
    }
}

let student = new Student('УГХТУ', 'АПП', 'Стародубец Олег');

console.log(student);
console.log(student.getInfo());
console.log(student.getMarks());
console.log(student.setMarks(5));
console.log(student.getAverageMark());
console.log(student.dismiss());
console.log(student.recover());

class BudgetStudent extends Student {
    
}