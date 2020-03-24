const student= {
    school: "Juno",
    program: "JavaScript",
    location:  {
        city:"Toronto",
        country:"Canada"
    }
};

const anotherStudent = student;
anotherStudent.location = {
    city: "Dhaka",
    country: "Bangladesh"
}

const thirdStudent = Object.assign({}, student)
thirdStudent.location = 
    city:"Miami",
    country:"USA"
}

    console.log{
        student.location,
        anotherstudent.location,
        thirdStudent.location
    }