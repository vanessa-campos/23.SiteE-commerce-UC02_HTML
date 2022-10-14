

// -------------------- VALIDAR FORMULARIO  --------------------

var form = document.getElementById("formNewsLetter");
form.addEventListener("submit", validaForm);
  function validaForm(e){
  var nome = document.getElementById("Nome");
  var telefone = document.getElementById("Telefone");
  var email = document.getElementById("Email");
  if((nome.value).length < 1) {    
    e.preventDefault();
    $("#tooltip").show();
    $("#tooltip").css("margin-left","10%");
    return false;
  }else if((email.value).length < 1){
    e.preventDefault();
    $("#tooltip").show();
    $("#tooltip").css("margin-left","45%");
    return false;
  }else if((telefone.value).length < 11){   
    e.preventDefault();
    $("#tooltip").show();
    $("#tooltip").css("margin-left","80%");
    return false;
  }else{
    return true;
  }
}
$("#Nome").on("keyup", function(){
  var valorCampo = $(this).val();
  $(this).val(valorCampo.toUpperCase());
});

$("#tooltip").hide();
$("#Nome").on("blur", function () {
  var valorCampo = $(this).val();
  if(valorCampo.length < 1)
  $("#tooltip").show();
  $("#tooltip").css("margin-left","10%");
})
$("#Nome").on("focus", function () {
  $("#tooltip").hide();
})
$("#Email").on("blur", function () {
  var valorCampo = $(this).val();
  if(valorCampo.length < 1)
  $("#tooltip").show();
  $("#tooltip").css("margin-left","45%");
})
$("#Email").on("focus", function () {
  $("#tooltip").hide();
})
$("#Telefone").on("blur", function () {  
  var valorCampo = $(this).val();
  if(valorCampo.length < 1){
    $("#tooltip").show();
    $("#tooltip").css("margin-left","80%");
  }
  if(valorCampo.length > 0 && valorCampo.length < 11){    
    $("#tooltip").show();
    $("#tooltip").css("margin-left","80%");
  }
})
$("#Telefone").on("focus", function () {
  $("#tooltip").hide();
})


// -------------------- CARROSEL PRODUTOS --------------------

var produtoIndex = [0,0]
var qtProdutos = [4,4]
var produtoId = ["produto1","produto2"]
showProduto(produtoIndex[0],qtProdutos[0],0)
showProduto(produtoIndex[1],qtProdutos[1],1)
showProduto(produtoIndex[2],qtProdutos[2],2)

function plusProduto(n, no) {
  showProduto(produtoIndex[no] += n, qtProdutos[no] += n, no);
}
function showProduto(n1, n2, no) {  
  var i;
  var produtos = document.getElementsByClassName(produtoId[no]);
  if (n2 > produtos.length) {
  }else if(n1 < 0){
  }else{
    for (i = 0; i < produtos.length; i++) {
      produtos[i].style.display = "none";
    }
    for (i = n1; i < n2; i++) {
      produtos[i].style.display = "block";
    }
  }
}

// -------------------- HEART SHOW/HIDE --------------------

$(".heart").hide();
$(".bordaProduto").on("mouseover", function() {
    $(".heart", this).show();
});
$(".bordaProduto").on("mouseout", function() {
  $(".heart", this).hide();
});

// -------------------- PAGE BACK TO TOP --------------------

function topPage() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// --------------------- PAGE TO BOTTOM --------------------- 

function bottomPage() {
  window.scrollTo(0, 4000);
}


// ---------------- CARROSEL PRINCIPAL IMAGENS ---------------

var slideIndex = 0;
showAutomatic();
function plusSlides(n) {
  showSlides(slideIndex += n)
}
function currentSlide(n) {
  showSlides(slideIndex = n);

}
function showSlides(n) {  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function showAutomatic() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
  
  setTimeout(showAutomatic, 6000);
}
