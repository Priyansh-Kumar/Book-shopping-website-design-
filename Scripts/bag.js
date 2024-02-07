let bagItemObjects;
onload();
function onload(){
  loadBagItemObjects();
  books();
  orderSummary();
}


function books(){
  let bookSection=document.querySelector('.cart-items');
  let newHtml='';
  if(bagItemObjects.length==0){
    bookSection.classList.remove('cart-items');
    bookSection.classList.add('no-item-in-bag');
    newHtml=`<div class="no-item-in-bag">No item in bag</div>`
    bookSection.innerHTML=newHtml;
  }
  else{
  bagItemObjects.forEach(item=>{
    newHtml+=` <div class="books-collection">
              <div class="book"><img src="${item.imageno}" alt="image here" class="books-img">
    
      <div class="book-details">
        <div class="name">${item.name}</div>
        <span class="discount-price">₹ ${item.afterDiscountPrice}</span>
        <span class="actual-price">₹ ${item.mrp}</span>
        <span class="discount-percentage">${item.discountPercentage}% OFF</span>
     
      </div>
      
    </div>
    <div class="delete-cart" onClick="deleteCartItem(${item.id})">x</div>
  </div>`;
  });
  bookSection.innerHTML=newHtml;
}
}

function orderSummary(){
let TotalMrp=0;
let discount=0;
let TotalAmount=0;
let newHtml='';
let bill=document.querySelector('.bill');
if(bagItemObjects.length==0){
 newHtml=newHtml=` <div class="price-header">PRICE DETAILS (${bagItemObjects.length}) </div>
 <div class="price-item">
   <span class="price-item-tag">Total MRP</span>
   <span class="price-item-value">₹${TotalMrp}</span>
 </div>
 <div class="price-item">
   <span class="price-item-tag">Discount on MRP</span>
   <span class="price-item-value priceDetail-base-discount">-₹${discount}</span>
 </div>

 <hr>
 <div class="price-footer">
   <span class="price-item-tag">Total Amount</span>
   <span class="price-item-value">₹ ${TotalAmount}</span>
 </div>
<button class="place-order" >
 Place Order
</button>
 </div>`;
}
else{
  bagItemObjects.forEach(item=>{
    TotalMrp+=item.mrp;
    discount+=Math.floor((item.mrp*(item.discountPercentage))/100);
   TotalAmount+=item.afterDiscountPrice;
  
  });
  newHtml=` <div class="price-header">PRICE DETAILS (${bagItemObjects.length}) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">₹${TotalMrp}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">₹${discount}</span>
  </div>

  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">₹ ${TotalAmount}</span>
  </div>
<button class="place-order" onClick="placeOrder()">
  Place Order
</button>
  </div>`;
}


bill.innerHTML=newHtml;

}
function loadBagItemObjects(){
    console.log(bagItems);
    bagItemObjects=bagItems.map(itemId=>{
      for(let i=0;i<data.length;i++){
        if(itemId==data[i].id){
          return data[i];
        }
      }
    });
    console.log(bagItemObjects);
  }


function deleteCartItem(itemId){
  bagItems=bagItems.filter(bagItemId=>bagItemId!=itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  loadBagItemObjects();
  books();
  orderSummary();
    
}

function placeOrder(){
  let bill=document.querySelector('.bill');
  if(bagItemObjects.length>0){
    bill.innerHTML=`Thankyou for Placing a order.Your order has been placed.`;
  }

}
