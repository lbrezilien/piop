$(document).ready(function(){
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


});
