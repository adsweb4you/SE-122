// var y = 6;
// let x = 5;
// const z = 8;

 
// console.log(x * y);

let input  = document.getElementById('valid');
let output = document.getElementById('output');
input.addEventListener('input',function(){
    let value  = this.value;
    if (value.length < 8) {
         output.innerHTML = 'ტექსტში სიმბოლოების რაოდენობა უნდა იყოს 8 სიმბოლოზე მეტი';
         this.classList.add('border-danger');
         this.classList.remove('border-success');
         tst.disabled = true;
    }else{
        output.innerHTML = ''
        this.classList.remove('border-danger');
        this.classList.add('border-success');
        tst.disabled = false;
    }

    let regs = value.search(/[@ _ & ) ( .* A-Z]$/g);
 
   if (regs == -1) {
    output.innerHTML += '<br>' + 'ტექსტში უნდა ერიოს სიმბოლოები @ _ & ) (';
    this.classList.add('border-danger');
    this.classList.remove('border-success');
    tst.disabled = true;
   }
})