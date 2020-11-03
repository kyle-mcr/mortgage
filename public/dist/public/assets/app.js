var myExtObject = (function myFunction() { 
    document.getElementById("mainFrameOne").style.display="none"; 
    document.getElementById("mainFrameTwo").style.display="block"; 
  })(myExtObject||{})

  var webGlObject = (function() { 
    return { 
      init: function() { 
        alert('webGlObject initialized');
      } 
    } 
})(webGlObject||{})