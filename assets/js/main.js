document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.is-preload').forEach(node => {
      console.log(node);
      node.classList.remove('is-preload');
  })
});

  // // Play initial animations on page load.
  // window.onload = function() {
	// 		window.setTimeout(function() {
	// 			body.removeClass('is-preload');
	// 		}, 100);
	// 	};
