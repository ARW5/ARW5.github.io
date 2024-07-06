document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 10 * window.innerHeight / 100; // 10vh offset
      const targetOffsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetOffsetTop - offset,
        behavior: 'smooth',
      });
    }
  });
});


/*
    // Array of image file names in your folder
    var catImages = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg", "cat7.jpg"];
    
    // Get a random index
    var randomIndex = Math.floor(Math.random() * catImages.length);
    
    // Get the image element
    var catImage = document.getElementById("cat-image");
    
    // Set the src attribute of the image to the randomly chosen image
    catImage.src = "./cats/" + catImages[randomIndex];
*/


const styleSelector = document.getElementById('styleselector');
var Landscape = null;

function ThemeSelectionType() {
  if (window.innerWidth > window.innerHeight && Landscape != true) {
    Landscape = true;



  styleSelector.scrollLeft =  styleSelector.scrollWidth * getPosition(localStorage.getItem('theme'));



  styleSelector.addEventListener('scroll', () => {
    if (Landscape === true) {

    const scrollable = styleSelector.scrollWidth - styleSelector.clientWidth;
    const scrolled = styleSelector.scrollLeft;

    if (scrolled === scrollable * 0) {
        styleSelector.scrollLeft = styleSelector.scrollWidth * 4/8;
    }
    if (scrolled > scrollable * (1-0.0451) ) {
        styleSelector.scrollLeft = styleSelector.scrollWidth * 1 /8;
    }


    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        
      
      const themePositions = {
        light1: styleSelector.scrollWidth * 0/8,
        silver1: styleSelector.scrollWidth * 0/8,
        dark1: styleSelector.scrollWidth * 1/8,
        gold1: styleSelector.scrollWidth * 2/8,
        light2: styleSelector.scrollWidth * 3/8,
        silver2: styleSelector.scrollWidth * 4/8,
        dark2: styleSelector.scrollWidth * 5/8,
        gold2: styleSelector.scrollWidth * 6/8,
      };
    let closestTheme = 'light1';
    let closestDistance = Math.abs(scrolled - themePositions.light1);

    for (const [theme, position] of Object.entries(themePositions)) {
        const distance = Math.abs(scrolled - position);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestTheme = theme;
        }
    }
    selectTheme(closestTheme)
    
    }, 300);
    }
  });

  let scrollTimeout;





  } else if (window.innerWidth <= window.innerHeight && Landscape != false) {
    Landscape = false;

  
  
  
  
  
    function right() {
      styleSelector.scrollTo({
        left: styleSelector.scrollLeft + (styleSelector.scrollWidth - styleSelector.clientWidth) * (661/2365-325/2365),
        behavior: 'smooth',
        duration: 1500 
      });
      if (styleSelector.scrollLeft >= (styleSelector.scrollWidth - styleSelector.clientWidth) * (325/2365 + (661/2365-325/2365)*(5) )) {
        // Reset scroll to the start
        styleSelector.scrollLeft = (styleSelector.scrollWidth - styleSelector.clientWidth) * (325/2365 + (661/2365-325/2365)*(1) );
        styleSelector.scrollTo({
          left: styleSelector.scrollLeft + (styleSelector.scrollWidth - styleSelector.clientWidth) * (661/2365-325/2365),
          behavior: 'smooth',
          duration: 1500 
        })
      }
    }
    
    function left() {
      styleSelector.scrollTo({
        left: styleSelector.scrollLeft - (styleSelector.scrollWidth - styleSelector.clientWidth) * (661/2365-325/2365),
        behavior: 'smooth',
        duration: 1500
      });
      if (styleSelector.scrollLeft <= (styleSelector.scrollWidth - styleSelector.clientWidth) * (325/2365 + (661/2365-325/2365)*(0) )) {
        styleSelector.scrollLeft = (styleSelector.scrollWidth - styleSelector.clientWidth) * (325/2365 + (661/2365-325/2365)*(4) );
        styleSelector.scrollTo({
          left: styleSelector.scrollLeft - (styleSelector.scrollWidth - styleSelector.clientWidth) * (661/2365-325/2365),
          behavior: 'smooth',
          duration: 1500 
        })
      }
    }
  
  
    document.getElementById('leftswipe').addEventListener('click', () => {
        left();
    });
  
    document.getElementById('rightswipe').addEventListener('click', () => {
        right();
    });
  
  
    styleSelector.scrollLeft =  (styleSelector.scrollWidth - styleSelector.clientWidth) * getPositionPortrait(localStorage.getItem('theme'));


  
    styleSelector.addEventListener('scroll', () => {
        if (Landscape === false) {

        const scrollable = styleSelector.scrollWidth - styleSelector.clientWidth;
        const scrolled = styleSelector.scrollLeft;
    
        if (scrolled < ( scrollable * (325/2365 + (661/2365-325/2365)*0) ) ) {
            styleSelector.scrollLeft = scrollable * (325/2365 + (661/2365-325/2365)*4);
        }
        if (scrolled > scrollable * (325/2365 + (661/2365-325/2365)*5 ) ) {
            styleSelector.scrollLeft = scrollable * (325/2365 + (661/2365-325/2365)*1);
        }
    
    
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            
          
          const themePositions = {
            light1: scrollable * (325/2365 + (661/2365-325/2365)*-1 ),
            silver1: scrollable * (325/2365 + (661/2365-325/2365)*0 ),
            dark1: scrollable * (325/2365 + (661/2365-325/2365)*1 ),
            gold1: scrollable * (325/2365 + (661/2365-325/2365)*2 ),
            light2: scrollable * (325/2365 + (661/2365-325/2365)*3 ),
            silver2: scrollable * (325/2365 + (661/2365-325/2365)*4 ),
            dark2: scrollable * (325/2365 + (661/2365-325/2365)*5 ),
            gold2: scrollable * (325/2365 + (661/2365-325/2365)*6 ),
          };
    
        let closestTheme = 'light1';
        let closestDistance = Math.abs(scrolled - themePositions.light1);
    
        for (const [theme, position] of Object.entries(themePositions)) {
            const distance = Math.abs(scrolled - position);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestTheme = theme;
            }
        }
        selectTheme(closestTheme)
        
        }, 300);
      }
      });
      let scrollTimeout;
    }
}



document.addEventListener('DOMContentLoaded', function () {
// Call the function initially
ThemeSelectionType();

// Attach the function to the window resize event
window.addEventListener("resize", ThemeSelectionType);

});




function selectTheme(themeselection){
  if (Landscape===true) {
  scrollToTheme(themeselection)
  } else {
    scrollToThemePortrait(themeselection)
  }
  setTheme(themeselection.slice(0, -1))
}




function scrollToTheme(theme) {
  const positions = {
    'light1': 0/8,
    'silver1': 0/8,
    'dark1': 1/8,
    'gold1': 2/8,
    'light2': 3/8,
    'silver2': 4/8,
    'dark2': 5/8,
    'gold2': null,
  };

  const targetPosition = positions[theme] || positions['default'];

  if (theme === 'gold2') {
    right();
  } else {
    const targetScrollPosition = targetPosition * styleSelector.scrollWidth;

    styleSelector.scrollTo({
      left: targetScrollPosition,
      behavior: 'smooth',
      duration: 1500
    });
  }
}









function scrollToThemePortrait(theme) {
  const positions = {
    'light1': ( styleSelector.scrollWidth - styleSelector.clientWidth ) * (325/2365 + (661/2365-325/2365)*(-1) ),
    'silver1': ( styleSelector.scrollWidth - styleSelector.clientWidth ) * (325/2365 + (661/2365-325/2365)*0 ),
    'dark1': ( styleSelector.scrollWidth - styleSelector.clientWidth ) * (325/2365 + (661/2365-325/2365)*1 ),
    'gold1': ( styleSelector.scrollWidth - styleSelector.clientWidth ) * (325/2365 + (661/2365-325/2365)*2 ),
    'light2': ( styleSelector.scrollWidth - styleSelector.clientWidth ) * (325/2365 + (661/2365-325/2365)*3 ),
    'silver2': ( styleSelector.scrollWidth - styleSelector.clientWidth ) * (325/2365 + (661/2365-325/2365)*4 ),
    'dark2': ( styleSelector.scrollWidth - styleSelector.clientWidth ) * (325/2365 + (661/2365-325/2365)*5 ),
    'gold2': ( styleSelector.scrollWidth - styleSelector.clientWidth ) * (325/2365 + (661/2365-325/2365)*6 ),
  };

  const targetPosition = positions[theme] || positions['default'];

  if (theme === 'gold2') {
    right();
  } else {
    const targetScrollPosition = targetPosition;

    styleSelector.scrollTo({
      left: targetScrollPosition,
      behavior: 'smooth',
      duration: 1500
    });
  }
}


function getPosition(theme) {
  switch (theme) {
    case 'light':
      return 3/8;
    case 'silver':
      return 4/8;
    case 'dark':
      return 5/8;
    case 'gold':
      return 2/8;
    default:
      return 3/8;
  }
}


function getPositionPortrait(theme) {
  switch (theme) {
    case 'light':
      return (325/2365 + (661/2365-325/2365)*3);
    case 'silver':
      return (325/2365 + (661/2365-325/2365)*4);
    case 'dark':
      return (325/2365 + (661/2365-325/2365)*1);
    case 'gold':
      return (325/2365 + (661/2365-325/2365)*2);
    default:
      return (325/2365 + (661/2365-325/2365)*3);
  }
}

function right() {
  styleSelector.scrollTo({
    left: styleSelector.scrollLeft + styleSelector.scrollWidth / 8,
    behavior: 'smooth',
    duration: 1500 
  });
  if (styleSelector.scrollLeft >= (styleSelector.scrollWidth - styleSelector.clientWidth) * 7/8) {
    // Reset scroll to the start
    styleSelector.scrollLeft = styleSelector.scrollWidth * 1/8;
    styleSelector.scrollTo({
      left: styleSelector.scrollLeft + styleSelector.scrollWidth / 8,
      behavior: 'smooth',
      duration: 1500 
    })
  }
}

  
function left() {
  styleSelector.scrollTo({
    left: styleSelector.scrollLeft - styleSelector.scrollWidth / 8,
    behavior: 'smooth',
    duration: 1500 
  });
}

function removeAllEventListeners(elementId) {
  const element = document.getElementById(elementId);

  // Check if the element exists
  if (!element) {
      console.error(`Element with ID '${elementId}' not found`);
      return null;
  }

  // Clone the element to keep its properties, but remove all its event listeners
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
  return newElement;
}

