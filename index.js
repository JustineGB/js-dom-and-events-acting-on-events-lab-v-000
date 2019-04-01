// function preventRefreshOnSubmit(){
//     document.querySelector('form').addEventListener('submit', function(event){
//       event.preventDefault()
//     })
// }
// preventRefreshOnSubmit()


// function retrieveEmployeeInformation(input){
//   let employee = document.querySelector('input').value
//   return employee;
// }


// function addNewElementAsLi(){
//   $('ul.employee-list').append(retrieveEmployeeInformation());
// }

// function addNewLiOnClick(event){
//   let submit = $('form input:last')[0];
//   submit.addEventListener('click', event => {
//     addNewElementAsLi();
//     //$('input').reset();
//   //let name = document.querySelector('input').value
//   //name.reset();
//   //return false;
//   })
 
// }

// function extractValue() {
//     var value = $("#submit").val().trim();
//     console.log(value);
// };


// function clearEmployeeListOnLinkClick() {
//   let x = document.querySelector('#clear')
//   x.addEventListener('click', event => { event.preventDefault();
//   $('ul').innerHTML = '';
//   })
// }




  
function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function clearForm(){
  document.querySelectorAll('form input')[0].value = '';
}

function retrieveEmployeeInformation(){
  const input = $('form input:first')[0];
  return input.value;
}

function addNewElementAsLi(){
  const name = retrieveEmployeeInformation();
  const ul = $('ul.employee-list')[0];
  const li = document.createElement('li')
  li.innerHTML = name;
  ul.appendChild(li);

}

function addNewLiOnClick(e){
  const submit = $('form input:last')[0];
  submit.addEventListener('click', e => {
    addNewElementAsLi();
    clearForm();
  })
}


function clearEmployeeListOnLinkClick(){
  const clearButton = $('a')[0];
  clearButton.addEventListener('click', e => {
    e.preventDefault();
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
  });

}

