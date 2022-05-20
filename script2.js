const responseCallBack = (response) => response.json();  /// function responseCallBack semplificata con landa 

const createAvatarImgFromScr = (src) => {
  const image = document.createElement('img');
  image.classList.add('avatar_image')
  image.src = src; 
  return image;
}

 const createTextspan = (text) => {
  const span = document.createElement('span');
  span.appendChild(document.createTextNode(text));
  return span;
}

const deleteCallBack  = () => {
  initApp();
}

const deleteStudent = (id) => {     ////creo un bottono con id  creo una funzione che crea un bottono chr id cancelli gli studente.
  const deleteUrl = 'https://62860d1af0e8f0bb7c0f4273.mockapi.io/students' + id;
  const fetchConf = {
    method: 'delete'
  }
  fetch(deleteUrl , fetchConf)
  .then(responseCallBack)
  .then()
  
}


const createDeleteButton = (id) => {
  const button = document.createElement('button'); // creo un bottone
  button.onclick = () =>  deleteStudent(id)
  const node = document.createTextNode('cancella');
  button.appendChild(node);
  //button.appendChild(node) //mettere dentro il button
 
  return button
}

const creaStudentCard = (student) => {
  const studentCard  = document.createElement('div')
  studentCard.classList.add('student-card')
  studentCard.appendChild(createAvatarImgFromScr(student.avatar));
  studentCard.appendChild(createTextspan(student.name + ' ' + student.surname));
  console.log(student);
  //studentCard.appendChild(createTextspan('giorni al complenno: ' + student.getDaysToBirthday2()))
  studentCard.appendChild(createDeleteButton(student.id));
   return studentCard
}


const createArrayStudentCard = (arrayOfStudents) => arrayOfStudents.map(student => creaStudentCard (student))



const displayStudents = (arrayOfStudents) => {
  document.body.innerHTML = '';
  const arrayContainer = document.createElement('div');
  arrayContainer.append(...createArrayStudentCard(arrayOfStudents));
  document.body.appendChild(arrayContainer);
}


const convertResultInArrayOfStudents = (result) => result.map(obj => Student.fromObj(obj));

const resultCallback = (result) => displayStudents(convertResultInArrayOfStudents(result));

const catchError = (error) => console.log(error);

const initApp = () =>  fetch('https://62860d1af0e8f0bb7c0f4273.mockapi.io/students')
                      .then(responseCallBack)
                      .then(resultCallback)
                      .catch(catchError);
 initApp();














// function displayStudents(arrayOfStudents){
//   const arrayContainer = document.createElement('div');

//   for (let i = 0; i < arrayOfStudents.length; i++) {
//     const student = arrayOfStudents[i]
//     const studentContainer = document.createElement('div');
//     const span = document.createElement('span');
//     const node = document.createTextNode(student.name + ' ' + student.surname);

//     span.appendChild(node);
//     studentContainer.appendChild(span);
//     arrayContainer.appendChild(studentContainer);

//   }

//   document.body.appendChild(arrayContainer);

// }




















// function mapExample(array){

//   const tempArray = [];

//   for (const obj of array) {
//     const newObj =  new student(obj.id, obj.name , obj.surname, obj.dob, obj.avatar)
//     // const newObj = student.fromObj(obj)
//     tempArray.push(newObj);
//   }

//   return tempArray;
// }



// function responseCallBack(response){
//   console.log('response',response);
//   return response.json();
// }

// function manageError(error) {
//   console.log(error)
// }

// function resultCallback(result){
//    console.log('result', result);
//   const array = convertResultInArrayOfStudents(result);
//    console.log('array', array);
//   displayStudents(array);
// }

// function convertResultInArrayOfStudents(result) {
//   const arrayOfStudents = [];
//   for (const obj of result) {
//     const student = new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar);
//     arrayOfStudents.push(student);
//   }
//   return arrayOfStudents;
// }

// function convertResultInArrayOfStudents(result) {
//   const arrayOfStudents = [];
//   for (const obj of result) {
//     const student = Student.fromObj(obj);
//     arrayOfStudents.push(student);
//   }
//   return arrayOfStudents;
// }

// function convertResultInArrayOfStudents(result) {
//   const arrayOfStudents = result.map(obj => Student.fromObj(obj));
//   return arrayOfStudents;
// }








// fetch('./student_data.json').then(responseCallBack, manageError).then(resultCallback, manageError);

// fetch('./student-data.json').then(responseCallBack).then(resultCallback).catch(manageError);

// function responseCallBack(response){
//   console.log('response',response);
//   return response.text();
// }


// function resultCallback(result){
//   console.log('result', result);
// }

// function manageError(error){
//   console.log(error)
// }
// console.log('prima');

// fetch('./student-data.json').then((resp) => resp.json()).then((res) => console.log('risultato',res));

// setTimeout(logDopo, 0);

// setTimeout(logDopo, 10);

// setTimeout(logDopo, 100);

// setTimeout(logDopo, 1000)

// setTimeout(logDopo, 10000)




// function logDopo() {
//   console.log('dopo');
// }

// const ajax = new XMLHttpRequest()

// ajax.onreadystatechange = onreadystatechangeCallback

// ajax.open('get', './student-data.json');

// ajax.send()

// function onreadystatechangeCallback(){
//   if (this.readyState === 4) {
//     if(this.status === 200){
//       console.log(this.responseText)
//       const array = JSON.parse(this.responseText);
//       console.log(array);
//     } else {
//       console.log('server non raggiungibile')
//     }
//   }
// }