const ITEMS = document.querySelector('.ITEMS');
ITEMS.innerHTML += JSON.parse(localStorage.getItem('List'))

console.log(localStorage.getItem('totalPrice') === null)

let DOMprice = document.querySelector('.subtotal')
let DOMtotalPrice = document.querySelector('.total')

if(localStorage.getItem('totalPrice') === null){
    DOMprice.textContent = '$'+ 0;
    DOMtotalPrice.textContent = '$'+ 0;
} else {
    DOMprice.textContent = '$'+ localStorage.getItem('totalPrice');
    DOMtotalPrice.textContent = '$'+ localStorage.getItem('totalPrice');
}

numberOfItems = localStorage.getItem('localTrack');



const trash = document.querySelectorAll('.deletebtn');
trash.forEach(trsh => trsh.addEventListener('click', (e)=>{
        e.target.parentElement.parentElement.remove();
        
        numberOfItems--;
        localStorage.setItem('localTrack', numberOfItems);
        
        totalPrice = localStorage.getItem('totalPrice');
        console.log(totalPrice)
        totalPrice = totalPrice - Number(e.target.previousElementSibling.lastElementChild.textContent.split('$')[1]);
        localStorage.setItem('totalPrice', totalPrice)
        
        localStorage.setItem('List', JSON.stringify(ITEMS.innerHTML));

        DOMprice.textContent = '$'+ localStorage.getItem('totalPrice');
        DOMtotalPrice.textContent = '$'+ localStorage.getItem('totalPrice');
    })
)