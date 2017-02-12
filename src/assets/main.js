$(function() {
     $.ajax({
    url: 'https://www.codeschool.com/users/RdeKoning.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach(function(item,index){
          var a = $("#badges").append("div");
          $(a).addClass("course");
          $(a).append("<h3>"+item.title+"</h3>");
          $(a).append("<img src="+item.badge+">");
          $(a).append("<a href="+item.url+" target=_blank class='btn btn-primary'>'See Course'</a>");
      })
    }
  });
  

});
