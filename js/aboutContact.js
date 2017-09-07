
// µ¼º½À¸²¿·Ö
window.onload =function() {
    var dh = document.getElementById("dh");
    var lis = dh.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            var is = this.children[0].children[0];
            var span = this.children[0].children[1];
            this.style.backgroundColor = "#c69";
            is.style.top = 18 + "px";
            is.style.color = "#fff";
            span.style.top = -30 + "px";
            span.style.color = "yellow";
        }
        lis[i].onmouseout = function () {
            var is = this.children[0].children[0];
            var span = this.children[0].children[1];
            this.style.backgroundColor = "";
            is.style.top = 0;
            span.style.top = 0;
            span.style.color = "";

        }
    }
}





