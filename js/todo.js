// let todo = [];

// let btnAdd = document.querySelector('.btn-primary'); // add btn
// let TodoInput = document.querySelector('.form-control'); // Input
// let myid = 0;
// btnAdd.addEventListener('click', function () {
//     let valueInput = TodoInput.value; // Input value
//     let TodObj = {
//         id:myid++,
//         title: valueInput,
//         status: false
//     };
//     todo.unshift(TodObj);
//     TodoInput.value = '';

//     // display all todo
//     GetAllTodo(todo);
// })

// let output = document.querySelector('#todoapp');
// function GetAllTodo(ArrayTodo) {
//     output.innerHTML = '';
//     for (const todo of ArrayTodo) {

//         // parent div
//         let div = document.createElement('div');
//         div.classList.add('row');
//         div.classList.add('remove'+todo.id);

//         //  col-4 & checkbox
//         let col4 = document.createElement('div');
//         col4.classList.add('col-lg-4');
//         let checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.setAttribute('onchange', `changestatus(${todo.id})`)
//         checkbox.classList.add('mycheck');
//         col4.appendChild(checkbox)
//         //  end

//         //  col-4 & text
//         let col41 = document.createElement('div');
//         col41.classList.add('col-lg-4');
//         let p = document.createElement('p');
//         p.classList.add(todo.status ? 'text-decoration-line-through' : 'Not-Done')
//         p.textContent = todo.title;
//         col41.appendChild(p)
//         //  end

//         //  col-4 & text
//         let col42 = document.createElement('div');
//         col42.classList.add('col-lg-4');
//         let i = document.createElement('i');
//         i.classList.add('bi', 'bi-trash2-fill');
//         i.setAttribute('data-id', todo.id)
//         i.setAttribute('onclick', `RemoveItem(${todo.id})`)
//         col42.appendChild(i)
//         //  end

//         div.appendChild(col4);
//         div.appendChild(col41)
//         div.appendChild(col42)
//         output.appendChild(div);

// //         i.addEventListener('click', function(){
// //               let   id = this.getAttribute('data-id');
          
// //              // todo.splice(id,1);
// //              // RemoveItem(todo)
// //         })
// //   console.log(todo);
//     }
// }


//   function RemoveItem(id){
//     let ind = todo.findIndex(el=>{
//         return el.id == id
//     })
//     todo.splice(ind,1);
//   GetAllTodo(todo);
//   }

  
//   function changestatus(id){
//     let ind = todo.findIndex(el=>{
//         return el.id == id
//     })
//     todo[ind].status =  !todo[ind].status;
//   GetAllTodo(todo);
//   }

let child = document.querySelector('.parent').children; // აბრუნებს შვილობილი ელემენტების მასივს
let parent = document.querySelector('.active').parentElement;  // აბრუნებს მშობელ ელემენტს

let next  =  document.querySelector('.active').nextElementSibling;  //აბრუნებს ელემენტის ქვედა მეზობელს
let prev  =  document.querySelector('.active').previousElementSibling;  //აბრუნებს ელემენტის ზედა მეზობელს

let first = document.querySelector('.parent').firstElementChild; // აბრუნებს ელემენტის  პირველ  შვილობილ ობიექტს
let last = document.querySelector('.parent').lastElementChild; // აბრუნებს ელემენტის  ბოლო შვილობილ ობიექტს

 
// console.log(parent);


document.querySelector('.next').addEventListener('click', function(){
    let active  = document.querySelector('.active');

    if (active.nextElementSibling != null) {
         active.classList.remove('active');
    active.nextElementSibling.classList.add('active')
    }else{
        active.classList.remove('active');
        document.querySelector('.parent').firstElementChild.classList.add('active')
    }
   
})

document.querySelector('.prev').addEventListener('click', function(){
    let active  = document.querySelector('.active');

    if (active.previousElementSibling != null) {
         active.classList.remove('active');
    active.previousElementSibling.classList.add('active')
    }else{
        active.classList.remove('active');
        document.querySelector('.parent').lastElementChild.classList.add('active')
    }
   
})