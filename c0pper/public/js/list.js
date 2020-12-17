$( document ).ready(function() {
    $.getScript("https://rate-your-cop.uc.r.appspot.com/static/bindings.js", function() {});
    $("#profile").hide();
  
    $("#submit").click(function() {
      $("#profile").show();
      $("#form").hide();

      var set = new Set();
      Ratings.list($("#prec").val()).then(function(res){
        arr = res.data;
        for (var i = 0; i < arr.length; i++){
            set.add(arr[i].badge);
        }
        set = Array.from(set);
        console.log(set);
        for (var i = 0; i < set.length; i++){
            let newdiv = document.createElement("div");
            console.log(set[i]);
            var lis = document.getElementById("list");
            lis.appendChild(newdiv);
            newdiv.appendChild(document.createTextNode(set[i]));
            newdiv.setAttribute("class", "badgenum");
        }
      });

    });
});
  