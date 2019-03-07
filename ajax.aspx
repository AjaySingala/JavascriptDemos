<!DOCTYPE html>
<html>
<body>
    <div id="demo">
        <h2>The XMLHttpRequest Object</h2>
        <button type="button" onclick="loadDoc()">Change Content</button>
    </div>
    <script>
        function loadDoc() {
            
            var xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function () {
                 if (this.readyState == 4 && this.status == 200) {
                   
                     document.getElementById("demo").innerHTML =
                     xhttp.responseText;
                 }
             };
            xhttp.open("GET", "ajax_info.aspx", true);
            xhttp.send();
            //xhttp.onload = function() {
			//	alert(xhttp.responseText);
            //}
        }
    </script>
</body>

</html>
