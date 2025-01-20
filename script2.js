const ITEMS = document.querySelector('.ITEMS');
ITEMS.innerHTML += JSON.parse(localStorage.getItem('List'))


let DOMprice = document.querySelector('.subtotal')
DOMprice.textContent = '$'+ localStorage.getItem('totalPrice');
let DOMtotalPrice = document.querySelector('.total')
DOMtotalPrice.textContent = '$'+ localStorage.getItem('totalPrice');

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