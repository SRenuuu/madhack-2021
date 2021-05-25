var acc = document.getElementsByClassName("faq-button");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}
