document.addEventListener("DOMContentLoaded", function () {
addAnimationInit();
accordionFunction();
openSubMenu();
dropdownMenuWork();
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

