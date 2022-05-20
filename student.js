class Student {

  constructor(id, name, surname, dob, avatar) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.dob = dob;
    this.avatar = avatar;
  }

  get dateOfBirth() {
    return new Date(this.dob);
  }

  set dateOfBirth(value) {
    this.dob = value.toISOString();
  }

  static fromObj(obj) {
    return new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar); // OPPURE..OBJ se la proprieta e uguale 
  }

  get getDaysToBirthday2() {
    const today = new Date();
    const todayMills = today.getTime();
    const birthDayClone = new Date(this.dateOfBirth.getTime());
    birthDayClone.setFullYear(new Date().getFullYear());
    const birthDayInMills = birthDayClone.getTime();
    let diff
    if (todayMills > birthDayInMills) {
      birthDayClone.setFullYear(new Date().getFullYear() + 1);
      const newYearBirthdayInMills = birthDayClone.getTime();
      diff = newYearBirthdayInMills - todayMills;


    } else {
      diff = birthDayInMills - todayMills;

    }

    const daysToBirth = diff / 1000 / 60 / 60 / 24;
    const flooredDataTobirth = Math.floor(daysToBirth); 
    console.log(flooredDataTobirth);
    return flooredDataTobirth;
  }




  ////////////////////// soluzione cinzia 
  //   getDayToBirthday(){
  //     const today = new Date().getTime();
  //     const bday = this.dateOfBirth.getTime();
  //     const diff = today - bday;
  //     const days = Math.floor(diff/1000/60/60/24);
  //     const daysToBday = days%365;
  //     return daysToBday;
  // }




  // const today = new date();
  // const todayMills = today.getTime();
  // const dobMills = this.dateOfBirth.getTime();
  // const toBirthDay = todayMills - dobMills
  // const daysToBirth = toBirthDay / 1000 / 60 / 60 / 24;
  // const flooredDataTobirth = Math.floor(daysToBirth);
  // return flooredDataTobirth
}


