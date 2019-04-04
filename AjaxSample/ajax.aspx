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
        // onreadystatechange: Defines a function to be called when the readyState 
        // property changes.
        //
        // readyState: Holds the status of the XMLHttpRequest. 
        // 0: request not initialized 
        // 1: server connection established
        // 2: request received 
        // 3: processing request 
        // 4: request finished and response is ready
        //
        // responseText: returns the response as a string.
        //
        // status:
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Page not found"
        //
        // statusText: Returns the status-text (e.g. "OK" or "Not Found")
        //
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