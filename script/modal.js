$(document).ready(()=>{

	$("#modalBtn").click(()=>{

		$(".modal").show();
	})

$("#closeIcon, .submitbtn , .closebtn ").click(()=>{

		$(".modal").hide();
	})


// Click anywhere on window to close the modal box exepct on click me button and modal-content

$("#modalBtn").click(function(e){
    e.stopPropagation();
});
$(".modal-content").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $(".modal").hide();
});

})






