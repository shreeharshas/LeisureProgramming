<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>

<script type="text/javascript">
$(document).ready(function(){
    var timer;
    $("#mylink").mouseenter(function(){
        $("#mylink").css('color','yellow');
        timer = setTimeout(function(){$("#mylink").css('color','blue');}, 1000);
    });
    $("#mylink").mouseout(function(){
        clearTimeout(timer);
        $(this).css('color','red');
    });
});
</script>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
<span id="mylink">asgfashgakjsbfalkjsdbf</span>
</body>
</html>
