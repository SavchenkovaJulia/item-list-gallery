'use strict'

$(document).ready(function () {
	// navigation hover
	$(".left_nav  li").click(function () {
		$(this).addClass("iamselected");
		$(".left_nav li").not(this).removeClass("iamselected");
	});

	// Confirm deleting picture modal window

	$('.delete_btn').on('click', function () {
		var figureId = $(this).closest(".picture").attr('id');
		$('#Overlay').css('display', 'block');
		$('#ModalConfirm').data('deleteId', figureId).css('display', 'block');
	});

	$('#CloseModalConfirm').on('click', function () {
		$('#Overlay').css('display', 'none');
		$('#ModalConfirm').css('display', 'none');
	});

	$('#DeletePicture').on("click", function () {
		var deleteId = $('#ModalConfirm').data('deleteId');
		$("#" + deleteId).remove();
		$('#Overlay').css('display', 'none');
		$('#ModalConfirm').css('display', 'none');
	});


	//	Preview window

	$('.preview').on("click", function () {
		var currentPicture = $(this).closest(".picture");
		var picScr = currentPicture.find(".productImage").attr('src');
		$('#Overlay').css('display', 'block');
		$('#PreviewImage').attr("src", picScr);
		$('#ModalPreview').css('display', 'block');

		var currentTitle = currentPicture.find(".itemName").text();
		$("#PreviewTitle").text(currentTitle);

		var currentDescription = currentPicture.find(".description").text();
		$("#PreviewDescription").text(currentDescription);


	});

	$(".close").on("click", function () {
		$('#ModalPreview').css('display', 'none');
		$('#Overlay').css('display', 'none');

	});


});
