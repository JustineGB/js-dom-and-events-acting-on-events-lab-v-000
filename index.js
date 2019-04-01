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
  document.getElementById('myform').reset()
  ///$('#input').find("input:not([type="submit"]), textarea").val("");
}

function addNewLiOnClick(event){
  let submit = $('form input:last')[0];
  submit.addEventListener('click', event => {
    addNewElementAsLi();
    //$('input').reset();
  //let name = document.querySelector('input').value
  //name.reset();
  //return false;
  })
 
}

function extractValue() {
    var value = $("#submit").val().trim();
    console.log(value);
};


function clearEmployeeListOnLinkClick() {
  let x = document.querySelector('#clear')
  x.addEventListener('click', event => { event.preventDefault();
  $('ul').innerHTML = '';
  })
}


