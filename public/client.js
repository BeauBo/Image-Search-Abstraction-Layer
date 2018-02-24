$(document).ready(function(){
  $('#getImage').click(function(){

    var searchVal = $("#searchVal").val();
    var count = $("#count").val();
    var offset = $("#offset").val();
    if(searchVal && count && offset){
      var href = "/api/imagesearch/" + searchVal + "?count=" + count + "&offset=" + offset;
      $(this).attr("href",href);
    }else{
      alert("All fields are required!");
      $("#searchVal").val("");
      $("#count").val("")
      $("#offset").val ("");
    }
  });

  $("#getLatest").click(function(){
    var href = "/api/latest/imagesearch/";
    $(this).attr("href", href);
  });

  $("button").click(function(){
    $("#searchVal").val("");
    $("#count").val("")
    $("#offset").val ("");
  });
})
