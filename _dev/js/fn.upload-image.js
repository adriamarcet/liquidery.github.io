/*
	All steps to use HTML 5 input type file to upload a picture and show it
	Reference: http://code.hootsuite.com/html5/
*/
	
	// 1 Detecting support for HTML file input using a mix of feature and browser detection:
	function isUploadSupported() {
		if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
			return false;
		}
		
		var elem = document.createElement('input');
		elem.type = 'file';
		return !elem.disabled;
	};

	// 2 Reading the file

		// we first need to listen for changes to the HTML input element 
		if (window.File && window.FileReader && window.FormData) {
			
			// the input file ID
			var $inputField = $('#file');

			$inputField.on('change', function (e) {

				// storing the file uploaded
				var file = e.target.files[0];

				if (file) {
					if (/^image\//i.test(file.type)) {
						readFile(file);
					} else {
						alert('Not a valid image!');
					}
				}
			});
		} else {

			alert("File upload is not supported!");
		}

		// When the user selects an image file, the readFile function will be called with the file object
		// To read the file, we create a new FileReader object and define the success and failure conditions of reading.
		function readFile(file) {
			var reader = new FileReader();

			reader.onloadend = function () {
				processFile(reader.result, file.type);
			}

			reader.onerror = function () {
				alert('There was an error reading the file!');
			}

			reader.readAsDataURL(file);
		}

	// 3 Processing the file

		// Once reading the image has completed, we can process it with Canvas.
		// First we create a new image and set its source to the data URL obtained from reading the file.
		// Next, we create a canvas element which will hold our output image.
			// The canvas getContext method returns an object that provides methods and properties for manipulating the canvas.
			// We use the drawImage method to place the source image on the canvas


		function processFile(dataURL, fileType) {
			
			var maxWidth = 800;
			var maxHeight = 800;

			var image = new Image();
			image.src = dataURL;

			image.onload = function () {
				var width = image.width;
				var height = image.height;
				var shouldResize = (width > maxWidth) || (height > maxHeight);

				if (!shouldResize) {
					sendFile(dataURL);
					return;
				}

				var newWidth;
				var newHeight;

				if (width > height) {
					newHeight = height * (maxWidth / width);
					newWidth = maxWidth;
				} else {
					newWidth = width * (maxHeight / height);
					newHeight = maxHeight;
				}

				var canvas = document.createElement('canvas');

				canvas.width = newWidth;
				canvas.height = newHeight;

				var context = canvas.getContext('2d');

				context.drawImage(this, 0, 0, newWidth, newHeight);

				dataURL = canvas.toDataURL(fileType);

				sendFile(dataURL);
			};

			image.onerror = function () {
				alert('There was an error processing your file!');
			};
		}

			/*  
				An issue particularly relevant to the mobile web is the problem of lost metadata: most browsers will ignore the EXIF metadata of photos, 
				including the orientation tag, resulting in photos being oriented incorrectly. This is not a problem if we upload the original photo, 
				but since we are generating a new image with Canvas, the EXIF data of the original photo is lost. One solution is to read the EXIF data on the client side 
				and use Canvas to correctly orient the image.
			*/

	// 4 Uploading the file

		