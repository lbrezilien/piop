$(document).ready(function(){

  filterByGenre();



});

function manageActiveLink(){
  var currentRoute = $(location).attr('href');
      if(currentRoute == 'videos'){
        //append class active
      }
      else if (currentRoute == 'sheets') {
        //append class active
      }
      else {
        //append class active
      }
}


function filterByGenre(){
  $('ul #filterSelection').on('click', function(){
    // debugger
    var selection = this.textContent;
    var mediaArray = $('.genre')
    for(var x=0; x < mediaArray.length; x++){
      // debugger
        if(mediaArray[x].textContent !== selection){
            $(mediaArray[x]).parent().parent().parent().parent().hide()

        }
    }

  });

}
