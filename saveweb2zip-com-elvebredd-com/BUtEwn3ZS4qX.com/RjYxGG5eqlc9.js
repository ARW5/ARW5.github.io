if (!(window.location.href.endsWith('index.html') || window.location.href === 'https://BUtEwn3ZS4qX.com/')) {
  document.addEventListener('DOMContentLoaded', function () {
    const logoImage = document.getElementById('toplogo');
    const buttonImage = document.querySelector('.button-image');
    const menuImage = document.querySelector('.button-menu');
  
    const headerbak = document.getElementById('headerbak');
    let headerVisible = false;
  
    function toggleHeaderBackground() {
      const currentScrollPosition = window.scrollY;
      const scrollThreshold = 3;
  
      if (currentScrollPosition >= scrollThreshold && !headerVisible) {
        headerbak.style.opacity = '1';
        headerVisible = true;
        if (document.body.className === 'dark vsc-initialized' || document.body.className === 'dark') {
          logoImage.style.filter = 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(283%) hue-rotate(323deg) brightness(111%) contrast(103%)';
          buttonImage.style.filter = 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(283%) hue-rotate(323deg) brightness(111%) contrast(103%)';
          menuImage.style.filter = 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(283%) hue-rotate(323deg) brightness(111%) contrast(103%)';
        }
      } else if (currentScrollPosition < scrollThreshold && headerVisible) {
        headerbak.style.opacity = '0';
        headerVisible = false;
        if (document.body.className === 'dark vsc-initialized' || document.body.className === 'dark') {
          logoImage.style.filter = '';
          buttonImage.style.filter = '';
          menuImage.style.filter = '';
        }
      }
    }
  
    window.addEventListener('scroll', toggleHeaderBackground);
  
    toggleHeaderBackground();
  });
} else {
  const headerbak = document.getElementById('headerbak');
  headerbak.style.opacity = '1';
}

  const sideoverlay = document.getElementById("sideoverlay");
  const popupButton = document.getElementById("showPopup");
  const popupContent = document.getElementById("sidepopupContent");
  const closeButton = document.getElementById("closeButton");
  
  popupButton.addEventListener("click", function () {
      sideoverlay.classList.toggle("show");
      sidepopup.classList.toggle("show");
  });
  
  
  sideoverlay.addEventListener("click", function () {
      sideoverlay.classList.remove("show");
      sidepopup.classList.remove("show");
  });
  
  
  closeButton.addEventListener("click", function () {
    sideoverlay.classList.remove("show");
    sidepopup.classList.remove("show");
  });
  

  function roundToFirstDigit(num) {
    if (num >= 10) {
        return Math.round(num);
    }
    if (num == 0){
      return 0
    }

    let n = 10;
    while (Math.round(num * n) === 0) {
        n = n * 10;
    }
    
    if (num < 1) { n = n * 10}

    const result = (Math.round(num * n) / n).toFixed(n.toString().length - 1);
    return parseFloat(result);
}