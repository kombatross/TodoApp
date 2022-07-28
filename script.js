const valueImput = document.querySelector('#new') // POLE WPISYWANIA NOWEGO ZADANIA
const submitBtn = document.querySelector('.add') // PRZYCISK DODAWANIA
const frame = document.querySelector('#frame') // DIV Z LISTA ZADAN
const par = document.querySelector('p') // PARAGRAF
const test = 'test' // TESTOWA ZMNIENNA
let parX = document.querySelectorAll('.parag') // PARAGRAF Z KLASA 'PARAG'



const addTodo = () =>    {
    
    // DODAJE ZADANIE Z KLASA 'PARAG'
    
    const valueOfImput = valueImput.value 

if (valueOfImput!==""){
    const newTodoPar = document.createElement('p')

    newTodoPar.classList.add('parag')

    const newTodo = document.createTextNode(`${valueOfImput}`)

//     localStorage.setItem('task',newTodoPar.appendChild(newTodo))

    newTodoPar.appendChild(newTodo)
   
    frame.appendChild(newTodoPar)}else {return}

// IKONKA EDITU    

    const icon = document.createElement('i')

    icon.classList.add('fa-pen-to-square')
    icon.classList.add('fa-regular')
    icon.classList.add('edit')
    icon.classList.add('icons')
    
// IKONKA REMOVE 

    const iconX = document.createElement('i')
   
    iconX.classList.add('fa-trash-can')
    iconX.classList.add('fa-regular')
    iconX.classList.add('rem')
    iconX.classList.add('icons')
     
// DODAJE IKONKE DO ZADANIA    

    frame.appendChild(icon)
    frame.appendChild(iconX)

//--------------------------------------------------
    
    valueImput.value = "" // USTAWIA CZYSTE POLE W IMPUCIE PO DODANIU
    
    parX = document.querySelectorAll('.parag') // NADPISUJE ZMIENNA Z "PARAG"
 
    let rem = document.querySelectorAll('.rem') // ZMIENNA PRZECHOWYWUJACA BUTTON REMOVE
    
    let edit = document.querySelectorAll('.edit') // ZMIENNA PRZECHOWYWUJACA BUTTON REMOVE

// TO ZAZNACZA ZADANIE JAKO ZROBIONE
// DZIAŁA !!!

    parX[parX.length-1].addEventListener('dblclick', function (e) {
                 console.log(e);
                 e.target.classList.toggle('done')
    })
    
    
// TO USUWA ZADANIE
// DZIALA !!!

    rem[rem.length-1].addEventListener('click', function (e) {
        console.log(e);
        e.target.previousSibling.previousSibling.remove()
        e.target.previousSibling.remove()
        e.target.remove()
                
 })

// TO EDYTUJE ZADANIE
// DZIAŁA !!!

    edit[edit.length-1].addEventListener('click', function(e){
        console.log(e)
        const newInput = document.createElement('input')
        newInput.classList.add('editInput')
        const newAddBtn = document.createElement('button')
        newAddBtn.classList.add('editBtn')
        
        
        frame.append(newInput)        
        frame.append(newAddBtn)



        let editInput = document.querySelector('.editInput')        
        let editBtn = document.querySelector('.editBtn')
        editBtn.innerHTML = 'Edit'
        const valueEdit = editInput.value
        editBtn.addEventListener('click',function(event){
            const valueEdit = editInput.value
            if (valueEdit !== "") {
              e.target.previousElementSibling.firstChild.textContent = valueEdit
            console.log(valueEdit);
            editBtn.remove()
            editInput.remove()  
            }else return
            
        })
        
    })
    
        
   
}

submitBtn.addEventListener('click', addTodo)


localStorage.setItem(key, value);
