
			// TODO 1: Change paragraph text on page load
			//document.addEventListener('DOMContentLoaded', function () {
			//	let paragraphs = document.body.querySelectorAll('.paragraph');
			//	for (let i=0; i<paragraphs.length; i++) {
			//		paragraphs[i].textContent = 'Loaded!';
			//	}
			//});

			$(function () {
				$('.paragraph').text('Loaded!');
			});

			// TODO 2: Load response from URL and display it in div
			//let loadURLButton = document.getElementById('load-url');

			//loadURLButton.addEventListener('click', function () {
			//	let url = document.body.querySelector('input').value;
			//	let req = new XMLHttpRequest();
			//	let ajaxResult = document.body.querySelector('.ajax-result');

			//	req.addEventListener('load', function () {
			//		ajaxResult.innerHTML = this.responseText;
			//	});

			//	req.open('GET', url);
			//	req.send();

			//	ajaxResult.textContent = 'Loading...';
			//});

			$('#load-url').on('click', function () {
				$('.ajax-result').text('Loading');

				$.get($('#url-field').val(), function (data) {
					$('.ajax-result').html(data);
				});
			});
