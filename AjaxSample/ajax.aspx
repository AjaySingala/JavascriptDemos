<!DOCTYPE html>
<html>
<body>
    <div id="demo">
        <h2>The XMLHttpRequest Object</h2>
        <button type="button" onclick="loadDoc()">Change Content Async</button>
        <button type="button" onclick="loadDocSync()">Change Content Sync</button>
        <button type="button" onclick="loadDocCallback()">Change Content Callback</button>
    </div>
    <script>
        function loadDoc() {
            
            var xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function () {
                 if (this.readyState == 4 && this.status == 200) {
                   
                     document.getElementById("demo").innerHTML = xhttp.responseText;
                 }
             };
            xhttp.open("GET", "ajax_info.aspx", true);
            xhttp.send();
            //xhttp.onload = function() {
			//	alert(xhttp.responseText);
            //}
        }

        function loadDocSync() {
            
            var xhttp = new XMLHttpRequest();
            
            xhttp.open("GET", "ajax_info.aspx", false);
            xhttp.send();
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }

        function loadDocCallback() {
            loadDocWithCallBack("ajax_info.aspx", setData);
        }
        
        function loadDocWithCallBack(url, callbackFunction) {
            var xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function () {
                 if (this.readyState == 4 && this.status == 200) { 
                     callbackFunction(this);
                 }
             };
            xhttp.open("GET", url, true);
            xhttp.send();
            //xhttp.onload = function() {
			//	alert(xhttp.responseText);
            //}
        }

        function setData(xmlHttpObject) {
            alert("in callback function");
            document.getElementById("demo").innerHTML = xmlHttpObject.responseText;
        }
    </script>
</body>

</html>
