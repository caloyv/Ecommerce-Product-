const menuBtn = document.querySelector('.menu-btn');
const grey = document.querySelector('.grey');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');
const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const mainImg = document.querySelector('.main-img');

const desktopModal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-btn');


// NAVBAR BUTTONS

grey.addEventListener('click', function() {
    grey.classList.add('hidden');
    desktopModal.classList.add('hidden')

    menu.style.left = '-1000';
})

menuBtn.addEventListener('click', function() {

    grey.classList.remove('hidden')
    menu.style.left = '0';
});

closeBtn.addEventListener('click', function() {
    grey.classList.add('hidden');
    menu.style.left = '-1000';
})

cartBtn.addEventListener('click', function() {
    cart.classList.toggle('hidden');
})

// MAIN

let itemNum = 1;

nextBtn.addEventListener('click', () => {
    if (itemNum === 4)
        itemNum = 4;
    else
        itemNum++;
    mainImg.src = `images/image-product-${itemNum}.jpg`;
    console.log(itemNum);
})

prevBtn.addEventListener('click', () => {

    if (itemNum === 1)
        itemNum = 1;
    else
        itemNum--;
    mainImg.src = `images/image-product-${itemNum}.jpg`;
    console.log(itemNum);
})

// CART

const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const quantityOrder = document.querySelector('.quantity-order');
const addCart = document.querySelector('.add-to-cart-btn');
const cartQuantity = document.querySelector('.cart-quantity-container');

let orderQuantity = 0;
let savedCartQuantity = 0;
let price = 125;
let total = 0;

plusBtn.addEventListener('click', () => {
    orderQuantity++;

    quantityOrder.innerHTML = '';
    quantityOrder.innerHTML = orderQuantity;
});

minusBtn.addEventListener('click', () => {
    if(orderQuantity === 0)
        orderQuantity = 0;
    else
        orderQuantity--;

    quantityOrder.innerHTML = '';
    quantityOrder.innerHTML = orderQuantity;
});

const empty = document.querySelector('.cart-content-empty-container');
const withContent = document.querySelector('.cart-content-container');

addCart.addEventListener('click', () => {
    if (orderQuantity === 0){
        console.log('empty')
        
        if(savedCartQuantity === 0) {
            empty.classList.remove('hidden');
            withContent.classList.add('hidden');
        }


    }
    else {
        
        savedCartQuantity += orderQuantity;
        cartQuantity.classList.remove('hidden');
        cartQuantity.innerHTML = '';
        cartQuantity.innerHTML = savedCartQuantity;
        orderQuantity = 0;
        total = price * savedCartQuantity;
        quantityOrder.innerHTML = orderQuantity;

        cartUpdate();
        
        empty.classList.add('hidden');
        withContent.classList.remove('hidden');
        

    }

})



const deleteBtn = document.querySelector('.delete-btn');

deleteBtn.addEventListener('click', () => {
    if(savedCartQuantity === 0){
        savedCartQuantity = 0;
        empty.classList.remove('hidden');
        withContent.classList.add('hidden');
        
    }else{
        savedCartQuantity--;
        total -= price;
        cartQuantity.innerHTML = '';
        cartQuantity.innerHTML = savedCartQuantity;
        cartUpdate()
        if(savedCartQuantity === 0) {
            cartQuantity.classList.add('hidden')
            empty.classList.remove('hidden');
            withContent.classList.add('hidden');
        }
    }

    console.log('test')


})

function cartUpdate() {
    document.querySelector('.cart-quantity').innerHTML = savedCartQuantity;
        document.querySelector('.cart-total-price').innerHTML = '&dollar;' + parseFloat(total).toFixed(2);
}


// IMAGE SELECTOR FOR DESKTOP

const deskMainImg = document.querySelector('#desk-main-img');
const thumbnail1 = document.querySelector('.thumbnail-1');
const thumbnail2 = document.querySelector('.thumbnail-2');
const thumbnail3 = document.querySelector('.thumbnail-3');
const thumbnail4 = document.querySelector('.thumbnail-4');

const modalMainImg = document.querySelector('#modal-main-img');
const modalNextBtn = document.querySelector('#modal-next-btn');
const modalPrevBtn = document.querySelector('#modal-prev-btn');

const modalThumbnail1 = document.querySelector('.modal-thumbnail1');
const modalThumbnail2 = document.querySelector('.modal-thumbnail2');
const modalThumbnail3 = document.querySelector('.modal-thumbnail3');
const modalThumbnail4 = document.querySelector('.modal-thumbnail4');

const thumbBorder1 = document.querySelector('.thumb-border1');
const thumbBorder2 = document.querySelector('.thumb-border2');
const thumbBorder3 = document.querySelector('.thumb-border3');
const thumbBorder4 = document.querySelector('.thumb-border4');

let flag = 1;

deskMainImg.addEventListener('click', () => {
    grey.classList.remove('hidden');
    desktopModal.classList.remove('hidden');
    const selectedImg = deskMainImg.src;
    modalMainImg.src = selectedImg;
    console.log(selectedImg)
    modalThumbnail(flag);
});

function removeEffect () {
    thumbnail1.classList.remove('border')
    thumbnail1.classList.remove('opacity')
    thumbnail2.classList.remove('border')
    thumbnail2.classList.remove('opacity')
    thumbnail3.classList.remove('border')
    thumbnail3.classList.remove('opacity')
    thumbnail4.classList.remove('border')
    thumbnail4.classList.remove('opacity')
}

function addEffect (imgThumbnail) {
    imgThumbnail.classList.add('border')
    imgThumbnail.classList.add('opacity')
}



thumbnail1.addEventListener('mouseover', () => {
    deskMainImg.src = 'images/image-product-1.jpg';
    removeEffect();
    addEffect(thumbnail1);
    flag = 1;
});
thumbnail2.addEventListener('mouseover', () => {
    deskMainImg.src = 'images/image-product-2.jpg';
    removeEffect();
    addEffect(thumbnail2);
    flag = 2;
});
thumbnail3.addEventListener('mouseover', () => {
    deskMainImg.src = 'images/image-product-3.jpg';
    removeEffect();
    addEffect(thumbnail3);
    flag = 3;
});
thumbnail4.addEventListener('mouseover', () => {
    deskMainImg.src = 'images/image-product-4.jpg';
    removeEffect();
    addEffect(thumbnail4);
    flag = 4;
});

modalThumbnail1.addEventListener('click', () => {
    modalMainImg.src = 'images/image-product-1.jpg';
    flag = 1;
    modalThumbnail(flag);
})
modalThumbnail2.addEventListener('click', () => {
    modalMainImg.src = 'images/image-product-2.jpg';
    flag = 2;
    modalThumbnail(flag);
})
modalThumbnail3.addEventListener('click', () => {
    modalMainImg.src = 'images/image-product-3.jpg';
    flag = 3;
    modalThumbnail(flag);
})
modalThumbnail4.addEventListener('click', () => {
    modalMainImg.src = 'images/image-product-4.jpg';
    flag = 4;
    modalThumbnail(flag);
})

modalCloseBtn.addEventListener('click', () => {
    desktopModal.classList.add('hidden');
    grey.classList.add('hidden');
})

function modalThumbnail(modalThumb) {
    if (modalThumb === 1) {
        thumbBorder1.classList.add('border');
        modalThumbnail1.classList.add('filter');
    } else {
        thumbBorder1.classList.remove('border');
        modalThumbnail1.classList.remove('filter');
    }
    if (modalThumb === 2) {
        thumbBorder2.classList.add('border');
        modalThumbnail2.classList.add('filter');
    } else {
        thumbBorder2.classList.remove('border');
        modalThumbnail2.classList.remove('filter');
    }
    if (modalThumb === 3) {
        thumbBorder3.classList.add('border');
        modalThumbnail3.classList.add('filter');
    } else {
        thumbBorder3.classList.remove('border');
        modalThumbnail3.classList.remove('filter');
    }
    if (modalThumb === 4) {
        thumbBorder4.classList.add('border');
        modalThumbnail4.classList.add('filter');
    } else {
        thumbBorder4.classList.remove('border');
        modalThumbnail4.classList.remove('filter');
    }
}


modalNextBtn.addEventListener('click', () => {
    if (flag === 4) {
        flag = 4;
    } else {
        flag++;
    }

    modalMainImg.src = `images/image-product-${flag}.jpg`;
    modalThumbnail(flag);
    console.log(flag)
})

modalPrevBtn.addEventListener('click', () => {
    if (flag === 1) {
        flag = 1;
    } else {
        flag--;
    }

    modalMainImg.src = `images/image-product-${flag}.jpg`;
    modalThumbnail(flag);
    console.log(flag)
})


