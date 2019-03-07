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
                 // alert('onreadystatechange');
                 // alert(xhttp.readyState);
                 //alert(xhttp.responseText);
                 if (this.readyState == 4 && this.status == 200) {
                   
                     document.getElementById("demo").innerHTML =
                     xhttp.responseText;
                 }
             };
            xhttp.open("GET", "ajax_info.aspx", true);
            xhttp.send();
            //xhttp.onload = function() {
            //    alert('onload');
			//	alert(xhttp.responseText);
            //}
            
            
        }
    </script>

</body>

</html>
