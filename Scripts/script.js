let bagItems;
onload();
function onload(){
  let bagItemsstr=localStorage.getItem('bagItems');
  bagItems=bagItemsstr? JSON.parse(bagItemsstr):[];
  headerLoad();
  banner();
  books();
  displayBagIcon();
  servicesFooterContent()
}



function headerLoad(){
  let headSection=document.querySelector('.head');
  let show=` <h1>Kitab LeLo</h1>
  <div class="serach-bar">   <input type="text" class="User-input"placeholder="Search by Book Name">
    <button  class="btn" onclick="search()">Search</button><div class="empty"></div></div>
    <div class="cart"><a href="pages/cart.html"><img src="images/cart.png" class="icon"></a><div class="no-items-card"></div></div>
    <a href="pages/login.html"><div class="login"><img src="images/login.png" class="icon"><button >Login</button></div></a>
    `;
    headSection.innerHTML=show;
}
function banner(){
  let banner=document.querySelector('.banner-here');
  let newHtml=` <div class="banner-div">
  <img src="images/banner.jpg" class="banner-img" alt="image didnot load">
</div>`;
banner.innerHTML=newHtml;
}


function bannerClick(){
  let id="12";
  let bookSection=document.querySelector('.books-here');
  let newHtml="";
  data.forEach(item=>{
    if(item.id==id){
      newHtml+=` <div class="books-collection">
      <div class="book"><img src="${item.imageScript}" alt="image here" class="books-img">

         <div class="book-details">
       <div class="name">${item.name}</div>
      <span class="discount-price">₹ ${item.afterDiscountPrice}</span>
      <span class="actual-price">₹ ${item.mrp}</span>
      <span class="discount-percentage">${item.discountPercentage}% OFF</span>
      <div><button class="cart-btn" onClick="addCart(${item.id})">Add to Cart</button></div>
      </div>
      </div>

      </div>`;
    }
  })
  bookSection.innerHTML=newHtml;
      newHtml="";
      let morebookTitle=document.querySelector('.more-book-title');
      let moreBook=document.querySelector('.more-book');
      newHtml='More Books';
      morebookTitle.innerHTML=newHtml;
      newHtml='';
      data.forEach(item=>{
        if(item.id!=id){
        newHtml+=`
        <div class="books-collection">
                  <div class="book"><img src="${item.imageScript}" alt="image here" class="books-img">
        
          <div class="book-details">
            <div class="name">${item.name}</div>
            <span class="discount-price">₹ ${item.afterDiscountPrice}</span>
            <span class="actual-price">₹ ${item.mrp}</span>
            <span class="discount-percentage">${item.discountPercentage}% OFF</span>
            <div><button class="cart-btn" onClick="addCart(${item.id})">Add to Cart</button></div>
          </div>
        </div>
        
      </div>`;
        }
    })
   
    moreBook.innerHTML=newHtml;
  }

function books(){
  let bookSection=document.querySelector('.books-here');
  let newHtml='';

  data.forEach(item=>{
    newHtml+=` <div class="books-collection">
              <div class="book"><img src="${item.imageScript}" alt="image here" class="books-img">
    
      <div class="book-details">
        <div class="name">${item.name}</div>
        <span class="discount-price">₹ ${item.afterDiscountPrice}</span>
        <span class="actual-price">₹ ${item.mrp}</span>
        <span class="discount-percentage">${item.discountPercentage}% OFF</span>
        <div><button class="cart-btn" onClick="addCart(${item.id})">Add to Cart</button></div>
      </div>
    </div>
    
  </div>`;
  })
bookSection.innerHTML=newHtml;
}


function servicesFooterContent(){
  let services=document.querySelector('.services');
  let footerHtml=document.querySelector('.footer');
  services.innerHTML=` <div class="services-info">Free Delivery</div>
  <div class="services-info">Cash on Delivery </div>
  <div class="services-info">Original Products</div>
  <div class="services-info">Easy Replacement</div>`;

  footerHtml.innerHTML=`<div class="footer-heading">Kitab LeLo
  <div class="footer-content">Ever wanted to buy a book but could not because it was too expensive? worry not! because Kitab LeLo is here! Kitab LeLo, these days in news,is being called as the Robinhood of the world of books.</div>
</div>

<div class="support">Support
  <div class="call"><img src="images/call.png" class="call-img">
    <span  class="call-email">Call : 12345</span>
</div>
<div class="email">
  <img src="images/email.png" class="call-img">
  <span class="call-email">Email : kitablelo@gmail.com</span>
</div>
</div>`;

}


function search(){
  let userInput=document.querySelector('.User-input').value;
  let emptyText=document.querySelector('.empty');
  let noBook=document.querySelector('.no-book-message');
  let bookSection=document.querySelector('.books-here');
  let moreBook=document.querySelector('.more-book');
  let morebookTitle=document.querySelector('.more-book-title');
  emptyText.innerHTML="";
  noBook.innerHTML='';
  moreBook.innerHTML='';
  morebookTitle.innerHTML='';
  let newHtml='';
  if(userInput.length==0){
    emptyText.innerHTML="***please enter something";
    books();
  }
  else{
    data.forEach(item=>{
      if(item.name.toLowerCase().includes(userInput.toLowerCase()) || item.author.toLowerCase().includes(userInput.toLowerCase())){
        newHtml+=` <div class="books-collection">
        <div class="book"><img src="${item.imageScript}" alt="image here" class="books-img">

           <div class="book-details">
         <div class="name">${item.name}</div>
        <span class="discount-price">₹ ${item.afterDiscountPrice}</span>
        <span class="actual-price">₹ ${item.mrp}</span>
        <span class="discount-percentage">${item.discountPercentage}% OFF</span>
        <div><button class="cart-btn" onClick="addCart(${item.id})">Add to Cart</button></div>
        </div>
        </div>

        </div>`;
      }
    })
  }

    if(newHtml.length==0){
      if(userInput.length>0){
      newHtml+=`No result found for  "${userInput}" See more Books`;
      noBook.innerHTML=newHtml;
      newHtml='';
      data.forEach(item=>{
        newHtml+=` 
        <div class="books-collection">
                  <div class="book"><img src="${item.imageScript}" alt="image here" class="books-img">
        
          <div class="book-details">
            <div class="name">${item.name}</div>
            <span class="discount-price">₹ ${item.afterDiscountPrice}</span>
            <span class="actual-price">₹ ${item.mrp}</span>
            <span class="discount-percentage">${item.discountPercentage}% OFF</span>
            <div><button class="cart-btn" onClick="addCart(${item.id})">Add to Cart</button></div>
          </div>
        </div>
        
      </div>`;
      bookSection.innerHTML=newHtml;
    })
  }
    }
    else{
      bookSection.innerHTML=newHtml;
      newHtml="";
      let morebookTitle=document.querySelector('.more-book-title');
      newHtml='More Books';
      morebookTitle.innerHTML=newHtml;
      newHtml='';
      data.forEach(item=>{
        if(!(item.name.toLowerCase().includes(userInput.toLowerCase())) && !(item.author.toLowerCase().includes(userInput.toLowerCase()))){
        newHtml+=`
        <div class="books-collection">
                  <div class="book"><img src="${item.imageScript}" alt="image here" class="books-img">
        
          <div class="book-details">
            <div class="name">${item.name}</div>
            <span class="discount-price">₹ ${item.afterDiscountPrice}</span>
            <span class="actual-price">₹ ${item.mrp}</span>
            <span class="discount-percentage">${item.discountPercentage}% OFF</span>
            <div><button class="cart-btn" onClick="addCart(${item.id})">Add to Cart</button></div>
          </div>
        </div>
        
      </div>`;
        }

   
    })
   
    moreBook.innerHTML=newHtml;
  }

}


function addCart(id){
bagItems.push(id);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon();

}
function displayBagIcon(){
  let bagItemsCount=document.querySelector('.no-items-card');
  if(bagItems.length>0){
    bagItemsCount.style.visibility='visible';
    bagItemsCount.innerText=bagItems.length;
  }
  else{
    bagItemsCount.style.visibility='hidden';
  }
}