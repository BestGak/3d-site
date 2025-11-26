document.addEventListener("DOMContentLoaded", function () {
addAnimationInit();
accordionFunction();
openSubMenu();
dropdownMenuWork();
generateProductBlocks();
generateSingleRowCarousel();
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

// const generateSingleRowCarousel = () => {
//   const row = document.getElementById('singleRow');

//   const products = [
//     { discount: "-30%", price: "$7.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
//     { discount: "-30%", price: "$27.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
//     { discount: "-30%", price: "$207.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
//     { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 Archmodels for UE vol 8 Archmodels for UE vol 8Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
//     { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
//     { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 },
//     { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
//     { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8 - the whole city district", author: "Evermotion", rating: 4.3 },
//     { discount: "-30%", price: "$2007.00", title: "Archmodels for UE vol 8", author: "Evermotion", rating: 4.3 }
//   ];

//   let index = 0;

//   const mod = i => ((i % products.length) + products.length) % products.length;
//   const getProduct = i => products[mod(i)];

//   function createItem(product) {
//     const a = document.createElement('a');
//     a.href = "#";
//     a.className = "models__item";
//     a.innerHTML = `
//       <img src="./assets/images/models-img1.jpg" alt="${product.title}" class="models__item__img">
//       <div class="models__item__price">
//         <span class="models__item__price-discount">${product.discount || "0"}</span>
//         <span class="models__item__price-cost">${product.price}</span>
//       </div>
//       <div class="models__item__info">
//         <h3>${product.title}</h3>
//         <div class="models__item__review">
//           <div class="models__item__review__name">
//             <img src="./assets/images/review-img 1.webp" alt="by ${product.author}">
//             <span>by ${product.author}</span>
//           </div>
//           <div class="models__item__review__rating item__review__rating">
//             <div class="models__item__review__rating-wrap item__review__rating-wrap">
//               ${"<svg xmlns='http://www.w3.org/2000/svg' width='12' height='11'><path d='M5.7063 0L7.43439 3.62149L11.4126 4.1459L8.50241 6.90851L9.23301 10.8541L5.7063 8.94L2.17959 10.8541L2.91019 6.90851L0 4.1459L3.97821 3.62149L5.7063 0Z' fill='#FFC450'></path></svg>".repeat(Math.floor(product.rating))}
//             </div>
//             <span>${product.rating}</span>
//           </div>
//         </div>
//       </div>`;
//     return a;
//   }

//   function drawWindow() {
//     row.innerHTML = "";
//     for (let i = 0; i < 7; i++) {
//       row.appendChild(createItem(getProduct(index + i)));
//     }
//   }

//   drawWindow();

//   function stepOnce() {
//     const slotWidth = (row.children[0].offsetWidth || 180) + 10;

//     const newElem = createItem(getProduct(index + 7));
//     row.appendChild(newElem);

//     requestAnimationFrame(() => {
//       requestAnimationFrame(() => {
//         row.style.transform = `translateX(-${slotWidth}px)`;
//       });
//     });

//     setTimeout(() => {
//       index = mod(index + 1);
//       row.style.transition = "none";
//       row.style.transform = "translateX(0)";
//       drawWindow();
//       setTimeout(() => {
//         row.style.transition = "transform 1.6s linear";
//       }, 30);
//     }, 1650);
//   }

//   setInterval(stepOnce, 10000);
// };

const generateSingleRowCarousel = () => {

const creatorsRow = document.getElementById('singleRow');

const creators = [
  {
    name: "Evermotion",
    rating: 4.3,
    modelsCount: "12940 models",
    avatar: "./assets/images/creator-img1.svg",
    productImg: "./assets/images/models-img2.jpg",
    productDiscount: "-30%",
    productPrice: "$27.00",
    productTitle: "Archmodels for UE vol 8 - the whole city district"
  },
  {
    name: "3D People",
    rating: 4.5,
    modelsCount: "8420 models",
    avatar: "./assets/images/creator-img1.svg",
    productImg: "./assets/images/models-img2.jpg",
    productDiscount: "-15%",
    productPrice: "$14.00",
    productTitle: "City Residents Pack"
  },
  {
    name: "RenderHub",
    rating: 4.7,
    modelsCount: "19200 models",
    avatar: "./assets/images/creator-img1.svg",
    productImg: "./assets/images/models-img2.jpg",
    productDiscount: "-40%",
    productPrice: "$49.00",
    productTitle: "Sci-Fi Vehicle Pack"
  },
    {
    name: "Test",
    rating: 3.7,
    modelsCount: "19200 models",
    avatar: "./assets/images/creator-img1.svg",
    productImg: "./assets/images/models-img2.jpg",
    productDiscount: "-40%",
    productPrice: "$49.00",
    productTitle: "Sci-Fi Vehicle Pack"
  }
];

let index = 0;

function mod(i){ return ((i % creators.length) + creators.length) % creators.length; }
function getCreator(i){ return creators[mod(i)]; }

const renderStars = (rating) => {
	const full = Math.floor(rating);
	const empty = 5 - full;

	const fullStar = `
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
			<path d="M5.7063 0L7.43439 3.62149L11.4126 4.1459L8.50241 6.90851L9.23301 10.8541L5.7063 8.94L2.17959 10.8541L2.91019 6.90851L-4.00543e-05 4.1459L3.97821 3.62149L5.7063 0Z" fill="#FFC450"/>
		</svg>`;

	const emptyStar = `
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
			<path d="M5.7063 0L7.43439 3.62149L11.4126 4.1459L8.50241 6.90851L9.23301 10.8541L5.7063 8.94L2.17959 10.8541L2.91019 6.90851L-4.00543e-05 4.1459L3.97821 3.62149L5.7063 0Z" fill="#fff"/>
		</svg>`;

	return (
		Array(full).fill(fullStar).join('') +
		Array(empty).fill(emptyStar).join('')
	);
};


function createCreatorItem(item) {
  const div = document.createElement('div');
  div.className = "creators__item";

  div.innerHTML = `
    <div class="creators__item__top">
      <img src="${item.avatar}" class="creators__item__top__img" />
      <div class="creators__item__top__info">
        <div class="creators__item__name">${item.name}</div>

        <div class="creators__item__review__rating item__review__rating">
          <div class="creators__item__review__rating-wrap item__review__rating-wrap">
		  	${renderStars(item.rating)}
          </div>
          <span>${item.rating}</span>
        </div>

        <div class="creators__item__count">
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
				<g clip-path="url(#clip0_382_326)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8831 3.49837C11.8081 3.36474 11.7022 3.25398 11.5754 3.17676L6.40616 0.111609C6.28165 0.0387827 6.142 0.000390649 6 0C5.85995 0.00036004 5.72229 0.0387892 5.6 0.111609L0.430777 3.17676C0.302243 3.25379 0.194223 3.36447 0.116925 3.49837C0.0418202 3.63598 0.0015278 3.79204 0 3.95126V10.0488C0.0015278 10.208 0.0418202 10.364 0.116925 10.5016C0.190878 10.6384 0.29972 10.7499 0.430777 10.8233L5.6 13.8884C5.72229 13.9613 5.85995 13.9997 6 14C6.142 13.9996 6.28165 13.9613 6.40616 13.8884L11.5754 10.8233C11.7053 10.7483 11.8138 10.6371 11.8892 10.5016C11.9625 10.3635 12.0006 10.2074 12 10.0488V3.95126C12.0012 3.79165 11.9607 3.63483 11.8831 3.49837ZM6 0.997669L10.5908 3.72155L6 6.43882L1.41538 3.72155L6 0.997669ZM0.923077 4.55509L5.53846 7.29211V12.7267L0.923077 9.99628V4.55509ZM6.46154 12.7267V7.29211L11.0769 4.55509V9.99628L6.46154 12.7267Z" fill="white"/>
				</g>
				<defs>
				<clipPath id="clip0_382_326">
				<rect width="12" height="14" fill="white"/>
				</clipPath>
				</defs>
			</svg>
          <span>${item.modelsCount}</span>
        </div>
      </div>
    </div>

    <div class="creators__item__bottom">
      <a href="#" class="models__item">
        <img src="${item.productImg}" alt="${item.productTitle}" class="models__item__img">
        <div class="models__item__price">
          <span class="models__item__price-discount">${item.productDiscount}</span>
          <span class="models__item__price-cost">${item.productPrice}</span>
        </div>
        <div class="models__item__info">
          <h3>${item.productTitle}</h3>
        </div>
      </a>
    </div>
  `;

  return div;
}

function drawCreatorsWindow() {
  creatorsRow.innerHTML = "";
  for(let i = 0; i < 5; i++){
    creatorsRow.appendChild(createCreatorItem(getCreator(index + i)));
  }
}

drawCreatorsWindow();

function stepCreators() {
  const slotWidth = (creatorsRow.children[0].offsetWidth || 280) + 10;

  const newItem = createCreatorItem(getCreator(index + 5));
  creatorsRow.appendChild(newItem);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      creatorsRow.style.transform = `translateX(-${slotWidth}px)`;
    });
  });

  setTimeout(() => {
    index = mod(index + 1);
    creatorsRow.style.transition = "none";
    creatorsRow.style.transform = "translateX(0)";
    drawCreatorsWindow();

    setTimeout(() => {
      creatorsRow.style.transition = "transform 1.6s linear";
    }, 30);
  }, 1650);
}

setInterval(stepCreators, 10000);

};
