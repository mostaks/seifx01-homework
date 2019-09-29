(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  
  
  let button = document.getElementById('button').addEventListener('click', function() {
    let address = document.getElementById('addressLine1').value + " " + document.getElementById('addressLine2').value + " " + document.getElementById('city').value + " " + document.getElementById('state').value + " " + document.getElementById('postCode').value;
    
    let map = document.getElementById('google-map');
    let innermap = document.createElement('div');
    innermap.innerHTML =`
      <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>
    `
    map.appendChild(innermap);
    console.log(address);
  });
  
  