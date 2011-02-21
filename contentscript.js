var lyrics = document.getElementById("content_h").innerHTML;
var text = "<ul id='lyrics_ul'><li>" + lyrics.split("<br>").join("&nbsp;</li><li>") + "&nbsp;</li></ul>";

var content = document.getElementById("content");
content.style.visibility = "visible";
content.style.padding = "20px";
content.style.fontFamily = "Monaco, Courier, monospace";
content.style.fontSize = "12px";
content.innerHTML = text;

var lis = content.getElementsByTagName("li");
for (var i=0; i < lis.length; i++) {
	if((i+1)%2) {
		lis[i].style.backgroundColor = "#efefef";		
	}
	lis[i].style.padding = "4px 10px";
}
