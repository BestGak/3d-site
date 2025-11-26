document.addEventListener("DOMContentLoaded", function () {
addAnimationInit();
accordionFunction();
openSubMenu();
dropdownMenuWork();
generateProductBlocks();
});
const addAnimationInit = () => {

	const scrollers = document.querySelectorAll('.marquee');
	if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
		addAnimation();
	}
	function addAnimation(){
		scrollers.forEach((scroller) =>{
			scroller.setAttribute("data-animate", true);
			const scrollerInner = scroller.querySelector('.marquee__wrap');
			const scrollerContent = Array.from(scrollerInner.children);
			scrollerContent.forEach(item =>{
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute('aria-hidden', true);
				scrollerInner.appendChild(duplicatedItem);
			});
			
		});
	}
}

const accordionFunction = () => {
  const accordionItems = document.querySelectorAll(".accord-item");

  accordionItems.forEach((item) => {
    const top = item.querySelector(".accord-item-top");
    if (top) {
      top.addEventListener("click", function () {
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });

        item.classList.toggle("active");
      });
    }
  });
};




const openSubMenu = () =>{
const dropdown = document.querySelector('.dropdown');
const firstMenuItem = document.querySelector('.menu-item:first-child');

let firstHover = false;

dropdown.addEventListener('mouseenter', () => {
    if (!firstHover) {
        firstMenuItem.classList.add('open-first');
        firstHover = true;
    }
});

firstMenuItem.addEventListener('mouseleave', () => {
    firstMenuItem.classList.remove('open-first');
});

}

const dropdownMenuWork = () => {
const menuItems = document.querySelectorAll('.menu-top ul li > a');

menuItems.forEach((a, i) => {
  a.style.opacity = i === 0 ? '1' : '0.5';
  a.style.transition = 'opacity 0.3s ease'; 
});

function highlightItem(index) {
  menuItems.forEach((a, i) => {
    a.style.opacity = i === index ? '1' : '0.5';
  });
}

menuItems.forEach((dd, i) => {
  dd.addEventListener('mouseenter', () => highlightItem(i));
  dd.addEventListener('mouseleave', () => highlightItem(0)); 
});
}

const generateProductBlocks = () => {
	const topRow = document.getElementById('topRow');
const bottomRow = document.getElementById('bottomRow');

const products = [
  { discount: "-30%", price: "$7.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$27.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$207.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 Archmodels for UE vol 8 Archmodels for UE vol 8Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
  { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 }
];

let index = 0; 

function mod(i){ return ((i % products.length) + products.length) % products.length; }
function getProduct(i){ return products[mod(i)]; }

function createProductItem(product) {
  const a = document.createElement('a');
  a.href = "#";
  a.className = "models__item";
  a.innerHTML = `
    <img src="./assets/images/models-img1.jpg" alt="${product.title}" class="models__item__img">
    <div class="models__item__price">
      <span class="models__item__price-discount">${product.discount || "0"}</span>
      <span class="models__item__price-cost">${product.price}</span>
    </div>
    <div class="models__item__info">
      <h3>${product.title}</h3>
      <div class="models__item__review">
        <div class="models__item__review__name">
          <img src="./assets/images/review-img 1.webp" alt="by ${product.author}">
          <span>by ${product.author}</span>
        </div>
        <div class="models__item__review__rating item__review__rating">
          <div class="models__item__review__rating-wrap item__review__rating-wrap">
            ${"<svg xmlns='http://www.w3.org/2000/svg' width='12' height='11' viewBox='0 0 12 11' fill='none'><path d='M5.7063 0L7.43439 3.62149L11.4126 4.1459L8.50241 6.90851L9.23301 10.8541L5.7063 8.94L2.17959 10.8541L2.91019 6.90851L-4.00543e-05 4.1459L3.97821 3.62149L5.7063 0Z' fill='#FFC450'></path></svg>".repeat(Math.floor(product.rating)) }
          </div>
          <span>${product.rating}</span>
        </div>
      </div>
    </div>
  `;
  return a;
}

function drawWindow() {
  topRow.innerHTML = '';
  bottomRow.innerHTML = '';
  for(let i=0; i<5; i++){
    topRow.appendChild(createProductItem(getProduct(index + i)));
  }
  for(let i=5; i<10; i++){
    bottomRow.appendChild(createProductItem(getProduct(index + i)));
  }
}

drawWindow();

function stepOnce() {
  const slotWidth = (topRow.children[0].offsetWidth || 180) + 10;

  const newTop = createProductItem(getProduct(index + 5));
  const newBottom = createProductItem(getProduct(index + 10));

  topRow.appendChild(newTop);
  bottomRow.appendChild(newBottom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      topRow.style.transform = `translateX(-${slotWidth}px)`;
      bottomRow.style.transform = `translateX(-${slotWidth}px)`;
    });
  });

  setTimeout(() => {
    index = mod(index + 1);
    topRow.style.transition = 'none';
    bottomRow.style.transition = 'none';
    topRow.style.transform = 'translateX(0)';
    bottomRow.style.transform = 'translateX(0)';
    drawWindow();
    setTimeout(() => {
      topRow.style.transition = 'transform 1.6s linear';
      bottomRow.style.transition = 'transform 1.6s linear';
    }, 30);
  }, 1650);
}

setInterval(stepOnce, 10000);
}