  $(document).ready(function(){
    $('.modal1').modal();
    $('.sidenav').sidenav();
  });
  
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});