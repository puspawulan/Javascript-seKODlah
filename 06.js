function groupPeople(people) {
    const result = {
      sex: {
        male: [],
        female: []
      },
      age: {
        under20: [],
        older: []
      },
      marriage: {
        single: [],
        double: []
      },
      status: {
        student: [],
        employee: []
      }
    };
  
    for (const person of people) {
      // group by sex
      if (person.sex === 'male') {
        result.sex.male.push(person.name);
      } else if (person.sex === 'female') {
        result.sex.female.push(person.name);
      }
  
      // group by age
      if (person.age < 20) {
        result.age.under20.push(person.name);
      } else {
        result.age.older.push(person.name);
      }
  
      // group by marital status
      if (person.marital === 'single') {
        result.marriage.single.push(person.name);
      } else {
        result.marriage.double.push(person.name);
      }
  
      // group by job status
      if (person.social === 'student') {
        result.status.student.push(person.name);
      } else {
        result.status.employee.push(person.name);
      }
    }
  
    return result;
  }
  
  // example usage
  const people = [
    {
      name:"udin",
      sex:"male",
      age:10,
      marital:"single",
      social:"student"
    },
    {
      name:"ujang",
      sex:"male",
      age:25,
      marital:"married",
      social:"employee"
    },
    {
      name:"icih",
      sex:"female",
      age:10,
      marital:"single",
      social:"student"
    },
    {
      name:"eneng",
      sex:"female",
      age:100,
      marital:"married",
      social:"employee"
    },
    {
      name:"asep",
      sex:"male",
      age:20,
      marital:"single",
      social:"employee"
    },
  ];
  
  console.log(groupPeople(people));