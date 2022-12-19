interface Student {
    student_id: number;
    name: string;
}


interface Teacher {
    teacher_id: number;
    teacher_name: string;
}

type intesected = Student & Teacher;


let obj1: intesected = {
    student_id: 45,
    name: "Sameer",
    teacher_id: 25,
    teacher_name: "KKKK"
}


console.log(obj1.student_id);
console.log(obj1.name);

