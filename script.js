const valueInput = document.querySelector('#taskField') // POLE WPISYWANIA NOWEGO ZADANIA
const submitBtn = document.querySelector('.add') // PRZYCISK DODAWANIA
const frame = document.querySelector('#container') // DIV Z LISTA ZADAN


const addTodo = () =>    {
    
    // DODAJE ZADANIE Z KLASA 'PARAG'
    
    const valueOfInput = valueInput.value 

if (valueOfInput!==""){
    const newTodoPar = document.createElement('p')

    newTodoPar.classList.add('parag')

    const newTodo = document.createTextNode(valueOfInput)

    newTodoPar.appendChild(newTodo)

   
    container.appendChild(newTodoPar)}
    else {return}

// IKONKA EDITU    

    const editIcon = document.createElement('i')

    editIcon.classList.add('fa-pen-to-square')
    editIcon.classList.add('fa-regular')
    editIcon.classList.add('edit')
    editIcon.classList.add('icons')
    
// IKONKA REMOVE 

    const deleteIcon = document.createElement('i')
   
    deleteIcon.classList.add('fa-trash-can')
    deleteIcon.classList.add('fa-regular')
    deleteIcon.classList.add('rem')
    deleteIcon.classList.add('icons')
     
// DODAJE IKONKE DO ZADANIA    

    frame.appendChild(editIcon)
    frame.appendChild(deleteIcon)

//--------------------------------------------------
    
    valueInput.value = "" // USTAWIA CZYSTE POLE W IMPUCIE PO DODANIU
    
    parX = document.querySelectorAll('.parag') // NADPISUJE ZMIENNA Z "PARAG"
 
    let rem = document.querySelectorAll('.rem') // ZMIENNA PRZECHOWYWUJACA BUTTON REMOVE
    
    let edit = document.querySelectorAll('.edit') // ZMIENNA PRZECHOWYWUJACA BUTTON REMOVE

// TO ZAZNACZA ZADANIE JAKO ZROBIONE
// DZIAŁA !!!

    parX[parX.length-1].addEventListener('dblclick', function (e) {
        
                 e.target.classList.toggle('done')
    })
    
    
// TO USUWA ZADANIE
// DZIALA !!!

    rem[rem.length-1].addEventListener('click', function (e) {
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
        
        function addedit (event){
            const valueEdit = editInput.value
            if (valueEdit !== "") {
              e.target.previousElementSibling.firstChild.textContent = valueEdit
            console.log(valueEdit);
            editBtn.remove()
            editInput.remove()  
            }else return
            
        }
        editBtn.addEventListener('click',addedit)

        
    })
    // editInput.addEventListener('keyup',enterEdit)
    //             const enterEdit = e => {
    //         if (e.key==='Enter') {
    //             addedit()
    //         }else return
    //     }
        
   
}

submitBtn.addEventListener('click', addTodo)

// const enterAdd = e => {
//     if (e.key==='Enter') {
//         addTodo()
//     }else return
// }


// valueImput.addEventListener('keyup', enterAdd)