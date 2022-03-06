$(function(){
    $(".phone-button-next").click(function() {
		
		$('.magazine').turn('next');

	});

    $(".phone-button-previous").click(function() {
		
		$('.magazine').turn('previous');

	});
})

function openPhoneButton(){
    $(".phone-button-previous").css("display", "block")
    $(".phone-button-next").css("display", "block")
}

function closePhoneButton(){
    $(".phone-button-previous").css("display", "none")
    $(".phone-button-next").css("display", "none")
}