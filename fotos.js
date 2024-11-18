const elements = document.querySelectorAll(".logo-stive, .logo-mcat, .logo-gordon");

const hoverImages = [
  "./img/71c505f2c4ee407dce0144bd2c94effb-removebg-preview.png", 
  "./img/mascara-gatinho-mulher-gato-cores-neon-com-elastico-para-carnavel-festas-e-helloween-41-df85b2208bfc86e82316763014717043-1024-1024-removebg-preview.png",
  "./img/2642257.png" 
];

const originalImages = [
  "./img/stivelogokkk.jpg", 
  "./img/zoelogo.jpg", 
  "./img/grnlogo.jpg" 
];

elements.forEach((element, index) => {
  element.addEventListener("mouseover", function () {
    
    element.classList.add("hidden");

    setTimeout(() => {
      element.src = hoverImages[index]; 
      element.classList.remove("hidden"); 
    }, 500); 
  });

  element.addEventListener("mouseout", function () {
    
    element.classList.add("hidden");

    setTimeout(() => {
      element.src = originalImages[index]; 
      element.classList.remove("hidden"); 
    }, 500); 
  });
});

