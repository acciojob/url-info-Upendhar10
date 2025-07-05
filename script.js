//your JS code here. If required.
function getURLlength(){
	let currentURL = location.href;
	let urlLength = currentURL.length;
	return urlLength;
}

alert("The length of the URL is: " + getURLlength()); 