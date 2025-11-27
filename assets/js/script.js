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

const ROW_COUNT = window.innerWidth >= 992 ? 2 : 10;
const VISIBLE_PER_ROW = 5; 
const STEP_DELAY = 10000;

const carousel = document.getElementById('carousel');

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
];

function mod(i){ return ((i % products.length) + products.length) % products.length; }
function getProduct(i){ return products[mod(i)]; }

function createProductItem(product) {
  const a = document.createElement('a');
  a.href = "#";
  a.className = "models__item";
  a.innerHTML = `
    <img src="./assets/images/models-img1.jpg" alt="${product.title}" class="models__item__img">
    <div class="models__item__price">
      <span class="models__item__price-discount">${product.discount}</span>
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
            ${"<svg xmlns='http://www.w3.org/2000/svg' width='12' height='11' viewBox='0 0 12 11' fill='none'><path d='M5.706 0L7.434 3.621L11.412 4.145L8.502 6.908L9.233 10.854L5.706 8.94L2.179 10.854L2.91 6.908L0 4.145L3.978 3.621L5.706 0Z' fill='#FFC450'></path></svg>".repeat(Math.floor(product.rating))}
          </div>
          <span>${product.rating}</span>
        </div>
      </div>
    </div>
  `;
  return a;
}

const rows = [];
for (let i = 0; i < ROW_COUNT; i++) {
  const row = document.createElement("div");
  row.className = "row";
  carousel.appendChild(row);
  rows.push(row);
}

let index = 0;

function drawWindow() {
  rows.forEach((row, r) => {
    row.innerHTML = "";
    const start = index + r * VISIBLE_PER_ROW;
    for (let i = 0; i < VISIBLE_PER_ROW; i++) {
      row.appendChild(createProductItem(getProduct(start + i)));
    }
  });
}

drawWindow();

function stepOnce() {
  const firstRow = rows[0];
  const slotWidth = (firstRow.children[0].offsetWidth || 180) + 10;

  rows.forEach((row, r) => {
    const start = index + r * VISIBLE_PER_ROW + VISIBLE_PER_ROW;
    row.appendChild(createProductItem(getProduct(start)));
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      rows.forEach(row => {
        row.style.transform = `translateX(-${slotWidth}px)`;
      });
    });
  });

  setTimeout(() => {
    index++;

    rows.forEach(row => {
      row.style.transition = "none";
      row.style.transform = "translateX(0)";
    });

    drawWindow();

    setTimeout(() => {
      rows.forEach(row => {
        row.style.transition = "transform 1.6s linear";
      });
    }, 30);

  }, 1650);
}

setInterval(stepOnce, STEP_DELAY);

};

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
  const ROOT = document.getElementById('singleRow');

  // ПК = 1 ряд, мобайл = 5 рядов
  const ROW_COUNT = window.innerWidth <= 768 ? 5 : 1;

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

  const mod = (i) => ((i % creators.length) + creators.length) % creators.length;
  const getCreator = (i) => creators[mod(i)];

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const empty = 5 - full;

    const fullStar = `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" fill="none">
        <path d="M5.7 0L7.43 3.62 11.41 4.15 8.5 6.9 9.23 10.85 5.7 8.94 2.18 10.85 2.91 6.9 0 4.15 3.98 3.62 5.7 0Z" fill="#FFC450"/>
      </svg>`;

    const emptyStar = `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" fill="none">
        <path d="M5.7 0L7.43 3.62 11.41 4.15 8.5 6.9 9.23 10.85 5.7 8.94 2.18 10.85 2.91 6.9 0 4.15 3.98 3.62 5.7 0Z" fill="#fff"/>
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
            <span>${item.modelsCount}</span>
          </div>
        </div>
      </div>

      <div class="creators__item__bottom">
        <a href="#" class="models__item">
          <img src="${item.productImg}" class="models__item__img">
          <div class="models__item__price">
            <span class="models__item__price-discount">${item.productDiscount}</span>
            <span class="models__item__price-cost">${item.productPrice}</span>
          </div>
          <div class="models__item__info"><h3>${item.productTitle}</h3></div>
        </a>
      </div>
    `;
    return div;
  }

  ROOT.innerHTML = "";
  const rows = [];

  for (let r = 0; r < ROW_COUNT; r++) {
    const row = document.createElement("div");
    row.className = "row";
    ROOT.appendChild(row);

    rows.push({
      index: r,
      visibleStart: 0,
      el: row
    });
  }

  function drawRow(rowObj) {
    rowObj.el.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      rowObj.el.appendChild(createCreatorItem(getCreator(rowObj.visibleStart + i)));
    }
  }

  rows.forEach(drawRow);

  function step(rowObj) {
    const row = rowObj.el;
    const slotWidth = (row.children[0].offsetWidth || 280) + 12;

    const newItem = createCreatorItem(getCreator(rowObj.visibleStart + 5));
    row.appendChild(newItem);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        row.style.transform = `translateX(-${slotWidth}px)`;
      });
    });

    setTimeout(() => {
      rowObj.visibleStart = rowObj.visibleStart + 1;

      row.style.transition = "none";
      row.style.transform = "translateX(0)";

      drawRow(rowObj);

      setTimeout(() => {
        row.style.transition = "transform 1.6s linear";
      }, 30);

    }, 1650);
  }

  rows.forEach(row => {
    setInterval(() => step(row), 4000);
  });
};