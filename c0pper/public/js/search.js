$( document ).ready(function() {
  $.getScript("https://rate-your-cop.uc.r.appspot.com/static/bindings.js", function() {});
  $("#profile").hide();

  $("#submit").click(function() {
    $("#profile").show();
    $("#form").hide();

    var ar = [];
    Ratings.list($("#prec").val()).then(function(res){
      arr = res.data;
      for (var i = 0; i < arr.length; i++){
        if (arr[i].badge.toString() === $("#badge").val()) {
          ar.push(arr[i]);
        }
      }
      console.log($("#badge").val() === "1234");
      console.log(ar);
      for (var i = 0; i < ar.length; i++){
          let newdiv = document.createElement("div");
          console.log(ar[i]);
          var lis = document.getElementById("cop-info");
          lis.appendChild(newdiv);
          newdiv.appendChild(document.createTextNode(ar[i].comments));
          newdiv.appendChild(document.createElement("br"));
          newdiv.appendChild(document.createElement("br"));
          newdiv.appendChild(document.createElement("br"));
          newdiv.appendChild(document.createTextNode("Average rating " + ave(ar[i].friendliness, ar[i].difficulty, ar[i].appropriateness, ar[i].helpfulness, ar[i].nonviolence)));
          newdiv.appendChild(document.createElement("br"));
          newdiv.appendChild(document.createTextNode("Friendliness " + ar[i].friendliness));
          newdiv.appendChild(document.createElement("br"));
          newdiv.appendChild(document.createTextNode("Ease of Interaction " + ar[i].difficulty));
          newdiv.appendChild(document.createElement("br"));
          newdiv.appendChild(document.createTextNode("Appropriateness " + ar[i].appropriateness));
          newdiv.appendChild(document.createElement("br"));
          newdiv.appendChild(document.createTextNode("Helpfulness " + ar[i].helpfulness));
          newdiv.appendChild(document.createElement("br"));
          newdiv.appendChild(document.createTextNode("Nonviolence " + ar[i].nonviolence));
          newdiv.setAttribute("class", "badgenum");
      }
    });

  });
});

function ave (a,b,c,d,e) {
  return (a+b+c+d+e)/5;
}