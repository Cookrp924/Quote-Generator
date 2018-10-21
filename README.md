<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Quote Generator</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700i" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
	<link rel="stylesheet" href="QuoteGenerator.css">
</head>

<body>
	<h1>Ron Swanson's Quote of the Day</h1>
	<h2>A selection of quotes, wisdom, and life lessons</h2>
	<button class="btn" id="getQuote"><strong>New Quote</strong></button>
	<div class="container-fluid" id="wrapper"></div>
	<button class="social"><a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a></button>
	<button class="social"><a href="https://twitter.com/intent/tweet"><i class="fab fa-twitter"></i></a></button>

<script src="QuoteGenerator.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script>
	//clicking btn loads JSON-encoded data from server via a GET HTTP request
	//function places data in container, now it can be read
	$(document).ready(function(){
		$("#getQuote").on("click", function(){
			$.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(quote){
				$(".container-fluid").html('"' + quote + '"');
			});		
		});
	});
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
</body>

</html> 
