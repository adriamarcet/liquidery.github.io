/*
	Using the new FileAPI, latest feature added to HTML5: https://w3c.github.io/FileAPI/
	Reference: https://www.webcodegeeks.com/html5/html5-file-upload-example/
*/

/*
	1.1 Show inputed file information
*/
	// When the user choose a file, the “change“ event is fired on the input element, so we can listen for it :
	document.getElementById('file').addEventListener('change', function(){
		
		// we retrieved the chosen file, by accessing the index 0 of the FileList collection
		var fileUploaded = this.files[0];

		console.log("name:" + fileUploaded.name);
		console.log("size:" + fileUploaded.size);
		console.log("type:" + fileUploaded.type);
		console.log("date:" + fileUploaded.lastModified);

		previewImage(fileUploaded);

	}, false);


/*
	1.2 Previewing the file

	As we can read the file(s) information, 
	we can also read the content of the file, this, for example, can allow us 
	to preview selected files before upload.
*/

	function previewImage(file) {

		var previewContainerId = "uploaded-image--preview";

		var previewContainer = document.getElementById(previewContainerId);
		var imageType = /image.*/;

		if (!file.type.match(imageType)) {
		    throw "File Type must be an image";
		}

		var img = document.createElement("img");
		img.file = file;
		previewContainer.appendChild(img);

		/*
			Here we introduced the FileReader object, 
			that allow us to asynchronously read the contents of files.
			
			Using FileReader to display the image content
		*/
		var reader = new FileReader();
		/*
			Instantiate the object with the new FileReader(), then tell the object to read the data from the file with the method readAsUrl.
			The onload method is called after the content is read by the object like an event, then the content of the file is assigned to the image src attribute: aImg.src = e.target.result;
		*/
		reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
		reader.readAsDataURL(file);
	}


/*
	2. Upload the file(s)
*/
	/*
		First create a function to upload a file using XMLHttpRequest
		This function will create an ajax request (POST) on the url and send the file in the “upload_file” request parameter
	*/

	function uploadFile(file){

	    var url = 'index.php';
	    var xhr = new XMLHttpRequest();
	    var fd = new FormData();
	    xhr.open("POST", url, true);
	    xhr.onreadystatechange = function() {
	    
	        if (xhr.readyState == 4 && xhr.status == 200) {
	    
	            // Every thing ok, file uploaded
	            console.log(xhr.responseText); // handle response.
	        }
	    };
	    
	    fd.append("uploaded_file", file);
	    xhr.send(fd);
	}


	/*
		Now we’ll connect the uploadFile function to the javascript that manage the selected files:
	*/

	var uploadfiles = document.querySelector('#file');
	uploadfiles.addEventListener('change', function () {
	    var files = this.files;
	    for(var i=0; i<files.length; i++){
	        uploadFile(this.files[i]); // call the function to upload the file
	    }
	}, false);