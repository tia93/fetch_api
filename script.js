fetch('https://62860d1f96bccbf32d6e2bf5.mockapi.io/students').then(responseCallBack).then(resultCallBack).catch(manageError);

function responseCallBack(response){
console.log('respons', response);
return response.json();                       

}
function manageError(error){
    console.log(error);
}

function resultCallBack(result){
    console.log('result', result);
    //const array = convertResultInArrayOfStudents
    displaystudents(result);

}

///funzione che converte in array gli studenti,creo un array vuoto, poi un ciclo for oggetti, poi passo new studenti obj,id ,obj name ,obj surname ,obj dob ,obj avatar . e non avatarurl. e poi push con retun 







function displaystudents(arrayOfStudents) {
  const arraytContainer  = document.createElement('div')
  
  for (let i = 0; i < arrayOfStudents.length; i++) {
    const student= arrayOfStudents[i];
    const studentContainer = document.createElement('div');
    const span = document.createElement('span');
    const node = document.createTextNode(student.name + ' ' + student.surname)

    span.appendChild(node);
    studentContainer.appendChild(span);
    arraytContainer.appendChild(studentContainer);
  }
  document.body.appendChild(arraytContainer)
}






console.log('prima');






// fetch('./student-data.json').then(ResponseCallBack, manageError).then(resultCallBack, manageError);   // chimare web online // callback // risposta del server, risposta del file.

// fetch('./student-data.json').then(ResponseCallBack).then(resultCallBack).catch(manageError);

// function ResponseCallBack(response){
// console.log('respons', response);
// return response.json();                       ///fa uguale a json pars?
// return response.text();
// }

// function resultCallBack(result){
//     console.log('result', result);
    

// }

// function manageError(error){
//     console.log(error);
// }




// console.log('prima');

// fetch('./student-data.json').then((resp) => resp.json()).then((res) => console.log('risultato', res ));  /// sotto forma di landa?  

//  setTimeout(logDopo, 0);

//  setTimeout(logDopo, 10); 

//  setTimeout(logDopo, 100); 

//  setTimeout(logDopo, 1000); 

//  setTimeout(logDopo, 10000) 




//  function logDopo() {
//      console.log('dopo');
//  }






// console.log('dopo');
// console.log('dopo');
// console.log('dopo');
// console.log('dopo');
// console.log('dopo');
// console.log('dopo');
// console.log('dopo'); ///// programma segue il fluso , ma istruzione due  attiva un evento , poi continua con il log e dopo fa l  'evento 






// const ajex = new XMLHttpRequest()

// ajex.onreadystatechange = onreadystatechangeCallBack
// ajex.open('get', './student-data.json');

// ajex.send()

// function onreadystatechangeCallBack(){
//     if (this.readystate === 4) {
//         if(this.status === 200){}
//     }else {
        
   
//     console.log(this.responseText);  /// json.pars trasformare in oggetto in ??
//     const array  = JSON.parse(this.responseText)

// }
// }