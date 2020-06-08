document.querySelector(".time").innerText = new Date().toLocaleTimeString();

document.querySelector(".get-ajax-html").addEventListener("click", getAjaxHTML);

function getAjaxHTML() {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.querySelector(".html-container").innerHTML = xhr.responseText;
		}
	};
	xhr.open("get", "client.html", true);
	xhr.send();
}
