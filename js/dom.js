 let Products = [
    {
        title:'პროდუქტი 1',
        price:1200,
        discount:800,
        images:[
            'https://istyle.ge/uploads/products/632551675be06.jpg',
            'https://istyle.ge/uploads/products/632552091fa73.jpg',
            'https://istyle.ge/uploads/products/63255218c416d.jpg',
            'https://istyle.ge/uploads/products/63255224e0966.jpg',
            'https://istyle.ge/uploads/products/632554c2e643c.jpg',
        ],
        imgindex:0,
        sizes:[
            's','m','l','xl','xxl'
        ],
        stock:2,
        calcdisc:function(){
            if (this.discount != null) {
                this.discproc  =  (this.price - this.discount) / this.price * 100;  
            }else{
                this.discproc  = false;
            }
         
        }
    },
    {
        title:'პროდუქტი 2',
        price:1000,
        discount:900,
        images:[
            'https://istyle.ge/uploads/products/632551675be06.jpg',
            'https://istyle.ge/uploads/products/632552091fa73.jpg',
            'https://istyle.ge/uploads/products/63255218c416d.jpg',
            'https://istyle.ge/uploads/products/63255224e0966.jpg',
            'https://istyle.ge/uploads/products/632554c2e643c.jpg',
        ],
        imgindex:3,
        sizes:[
            's','m','l','xl','xxl'
        ],
        stock:20,
        calcdisc:function(){
            if (this.discount != null) {
                this.discproc  =  (this.price - this.discount) / this.price * 100;  
            }else{
                this.discproc  = false;
            }
         
        }
    },
    {
        title:'პროდუქტი 6',
        price:450,
        discount:null,
        images:[
            'https://istyle.ge/uploads/products/632551675be06.jpg',
            'https://istyle.ge/uploads/products/632552091fa73.jpg',
            'https://istyle.ge/uploads/products/63255218c416d.jpg',
            'https://istyle.ge/uploads/products/63255224e0966.jpg',
            'https://istyle.ge/uploads/products/632554c2e643c.jpg',
        ],
        imgindex:1,
        sizes:[
            's','m','l','xl','xxl'
        ],
        stock:3,
        calcdisc:function(){
            if (this.discount != null) {
                this.discproc  =  (this.price - this.discount) / this.price * 100;  
            }else{
                this.discproc  = false;
            }
         
        }
    },
    {
        title:'პროდუქტი 8',
        price:1500,
        discount:1000,
        images:[
            'https://istyle.ge/uploads/products/632551675be06.jpg',
            'https://istyle.ge/uploads/products/632552091fa73.jpg',
            'https://istyle.ge/uploads/products/63255218c416d.jpg',
            'https://istyle.ge/uploads/products/63255224e0966.jpg',
            'https://istyle.ge/uploads/products/632554c2e643c.jpg',
        ],
        imgindex:1,
        sizes:[
            's','m','l','xl','xxl'
        ],
        stock:4,
        calcdisc:function(){
            if (this.discount != null) {
                this.discproc  =  (this.price - this.discount) / this.price * 100;  
            }else{
                this.discproc  = false;
            }
         
        }
    },
    {
        title:'პროდუქტი 9',
        price:1200,
        discount:null,
        images:[
            'https://istyle.ge/uploads/products/632551675be06.jpg',
            'https://istyle.ge/uploads/products/632552091fa73.jpg',
            'https://istyle.ge/uploads/products/63255218c416d.jpg',
            'https://istyle.ge/uploads/products/63255224e0966.jpg',
            'https://istyle.ge/uploads/products/632554c2e643c.jpg',
        ],
        imgindex:2,
        sizes:[
            's','m','l','xl','xxl'
        ],
        stock:10,
        calcdisc:function(){
            if (this.discount != null) {
                this.discproc  =  (this.price - this.discount) / this.price * 100;  
            }else{
                this.discproc  = false;
            }
         
        }
    }
 ]

 let FilterProduct = [];

//filter & sort array
function FilterProd(){
    for (const Product of Products) {
        Product.calcdisc();
        if (Product.discproc && Product.stock > 0) {
            FilterProduct.push(Product);
        }
     }
     FilterProduct.sort((a,b) => a.price - b.price);
}

// call filter
FilterProd();



// inserthtml
function getHtml(FilterProduct, ind, indimg){
 
  if (ind != undefined) {
   FilterProduct[ind].imgindex = indimg;
  }

  console.log(FilterProduct);

      //displayallitem
for (let s = 0; s < FilterProduct.length; s++) {
    const element = FilterProduct[s];
    let card = `
    <div class="col-lg-4">
    <div class="card">
  <img src="${element.images[element.imgindex]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    ${getAllimg(element.images,element.imgindex, s)}
    <hr>
    ${Helper(element).sttxt}
    <br>
    ${Helper(element).off}
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
    `
    document.querySelector('#output').innerHTML += card;
}

 
}

getHtml(FilterProduct)


// getprodimg
function getAllimg(imgarr, slice,ind){
 
  let imgs = '';
//   imgarr.splice(slice, 1);
 

  let par = 0;
  for (const img of imgarr) {
    imgs += `<img src="${img}" onclick="setimg(${ind},${par})" class="slideimg">`
    par++;
  }

 
  return imgs;
}

// getallprom
function Helper(prodobj){

 
     let stockctxt = '';
     let offtxt = '';

     if (Math.floor(prodobj.discproc) > 20) {
        offtxt = '<span class="text-success"> დღის შეთავაზება </span>'
     }

     if (prodobj.stock < 4) {
        stockctxt = '<span class="text-danger"> მარაგი იწურება </span>'
     }

    
     return {
        sttxt:stockctxt,
        off:offtxt,
     }

  }

  function setimg(ind,indimg){
  document.querySelector('#output').innerHTML = '';
    getHtml(FilterProduct,ind, indimg);
  }

 

 let btn = document.querySelector('.changecolor');
 let hide = document.querySelector('.hide');
 let togle = document.querySelector('.togl');
 let mydiv = document.querySelector('.test');
 let modals = document.querySelector('.mymodals');
//  კლასის მინიჭება
 btn.addEventListener('click', function(){
 //   mydiv.classList.add('show');
 modals.classList.add('show')
 })

 //  კლასის წაშლა
 hide.addEventListener('click', function(){
    mydiv.classList.remove('show');
 })

  //  კლასის წაშლა/მინიჭება
  togle.addEventListener('click', function(){
    mydiv.classList.toggle('show');
 })

 //mydiv.classList აბრუნელებს ელემენტის ყველა კლასს მასივის სახით
// mydiv.classList.contains('text-white') ამოწმებს კლასს აბრუნებს boolean
// mydiv.classList.replace('text-white', 'text-danger') კლასის ჩანაცვლება
 
 

