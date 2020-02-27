
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    getInfo() {
        return 'Студент ' + this.course + 'го курса ' + this.university + ' ,' + this.fullName;
    }
    getMarks() {
        return this.marks = [5, 4, 4, 5];
    }
    setMarks(val) {
        this.marks.push(val);
        return this.marks;
    }
    getAverageMark() {
        return (this.marks.reduce((a, b) => {
            return a + b;
        }, 0)) / this.marks.length;
    }
    dismiss() {
        return this.marks = null;
    }
    recover() {
        return this.getMarks();
    }
}

let student = new Student('УГХТУ', '1', 'Стародубец Олег');

console.log(student);
console.log('getInfo - ' + student.getInfo());
console.log('getMarks - ' + student.getMarks());
console.log('setMarks(5) - ' + student.setMarks(5));
console.log('getAverageMark - ' + student.getAverageMark());
console.log('dismiss - ' + student.dismiss());
console.log('recover - ' + student.recover());

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => console.log('getScholarship - ' + this.getScholarship()), 30000);
    }
    getMarks() {
        return this.marks = [5, 4, 4, 5];
    }
    getScholarship() {
        this.getMarks();
        if(this.marks === null || this.getAverageMark() < 4) {
            return 'У Вас больше нет степендии'
        } else {
            return 'Вы получили 1400 грн. стипендии'
        };
    }
}

let newStudent = new BudgetStudent('УГХТУ', '1', 'Стародубец Олег');

console.log(newStudent);
console.log('getScholarship - ' + newStudent.getScholarship());