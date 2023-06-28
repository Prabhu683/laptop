function toTop() {
    let top = document.querySelector(".top");
    window.onscroll = () => {
      if (window.scrollY > 100 || document.documentElement.scrollTop > 100) {
        top.style.display = "block";
      } else {
        top.style.display = "none";
      }
    };
  
    top.onclick = () => {
      scrollTo(0, 0);
    };
  }
  toTop();
  
  