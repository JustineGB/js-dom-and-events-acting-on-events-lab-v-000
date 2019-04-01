function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()

function retrieveEmployeeInformation(input){
  let employee = document.querySelector('input').value
  return employee;
}

function addNewElementAsLi(){
  $('ul.employee-list').append(retrieveEmployeeInformation());
}

function clearFormField() {
  document.getElementById('myform').reset();
}

function addNewLiOnClick(event){
  let submit = $('form input:last')[0];
  submit.addEventListener('click', event => {
    addNewElementAsLi();
    clearFormField();
    return false;
  })
}

function clearEmployeeListOnLinkClick() {
  alert(this);
  //let x = document.getElementById('elist').reset();
  let x = document.querySelector('elist')
  x.addEventListener('click', event => { event.preventDefault();
  $('ul').innerHTML = '';
  })
}




