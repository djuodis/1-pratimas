function Person(name, surname) {
    this.name = name 
    this.surname = surname 
  }
  
  Person.prototype.addToTable = function () {
    const tableBody = document.getElementById('tableBody') 
  
    const row = document.createElement('tr') 
    const nameCell = document.createElement('td') 
    const surnameCell = document.createElement('td') 
  
    nameCell.textContent = this.name 
    surnameCell.textContent = this.surname 
  
    row.appendChild(nameCell) 
    row.appendChild(surnameCell) 
  
    tableBody.appendChild(row) 
  } 
  
  function handleSubmit(event) {
    event.preventDefault() 
  
    const fullNameInput = document.getElementById('fullname').value 
  
    const [firstName, lastName] = fullNameInput.trim().split(' ') 
  
    if (firstName && lastName) {
      const person = new Person(
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(),
        lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
      ) 
  
      person.addToTable() 
  
      document.getElementById('fullname').value = '' 
    } else {
      alert('Įveskite vardą ir pavardę') 
    }
  }
  
  document.getElementById('myForm').addEventListener('submit', handleSubmit) 
  