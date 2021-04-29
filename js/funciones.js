$(document).ready(function () {
  $("#btn_click").on("click", function () {
    alert("Acabas de hacer un click");
  });
  $("#btn_hide").on("click", function () {
    $("#cont_1").hide();
  });
  $("#btn_show").on("click", function () {
    $("#cont_1").show();
  });
  $("#btn_toggle").on("click", function () {
    $("#cont_1").toggle();
  });
  $("#btn_slDown").on("click", function () {
    $("#cont_1").hide();
    $("#cont_1").slideDown();
  });
  $("#btn_slUp").on("click", function () {
    $("#cont_1").slideUp();
  });
  $("#btn_slToggle").on("click", function () {
    $("#cont_1").slideToggle();
  });
  $("#btn_fdIn").on("click", function () {
    $("#cont_1").hide();
    $("#cont_1").fadeIn(1000);
  });
  $("#btn_fdOut").on("click", function () {
    $("#cont_1").fadeOut();
  });

  $("#btn_AddClass").on("click", function () {
    $("#cont_1").show();
    $("#cont_1").addClass("nueva");
    $(".nueva").css("background-color", "yellow");
  });
  $("#btn_Before").on("click", function () {
    $("#cont_1").before("Agregamos algo antes");
  });
  $("#btn_After").on("click", function () {
    $("#cont_1").after("Agregamos algo después");
  });
  $("#btn_Append").on("click", function () {
    $("#cont_1").show();
    $("#cont_1").append("<b> hacemos un append </b>");
  });
  $("#btn_Html").on("click", function () {
    $("#cont_1").html("<b> Cambiando contenido con atributos </b>");
  });
  $("#btn_Attr").on("click", function () {
    let anuncio =
      "El atributo id del elemento de texto es : " + $("#cont_1").attr("id");
    alert(anuncio);
  });
  $("#btn_Val").on("click", function () {
    alert("El valor de este input es : " + $("#campo_input").val());
    $("#campo_input").val("Gigitty");
    alert("y ahora el valor de este input es : " + $("#campo_input").val());
  });
  $("#btn_Text").on("click", function () {
    $("#cont_1").text("Ahora cambiamos este texto sin atributos");
  });
  $("#btn_Reset").on("click",function(){
    location.reload();
  });
});
