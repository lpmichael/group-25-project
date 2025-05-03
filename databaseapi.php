
<?php
//Initial API taken from Upload to canvas

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("content-type: application/json");
$servername = "faure";
$username = "oceans77";
$db = "oceans77";
$password = "835247512";
$conn = new mysqli($servername, $username, $password, $db);
//TODO
//POPULATE OPTIONS
//ADD COLOR
//REMOVE COLOR
//EDIT COLOR

// Check connection
if ($conn->connect_error) {
	http_response_code(400);
  die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] === "GET"){
	handleGet($conn);
}

elseif ($_SERVER["REQUEST_METHOD"] === "POST"){
	handlePost($conn);
}


function handleGet($conn) {
	$count = isset($_GET["count"]) ? $_GET["count"] : "5";
	$sql = "CALL getColors($count);";
	$result = $conn->query($sql);
	
	$output = array();
	while($row = $result->fetch_assoc())
		array_push($output, $row);
	http_response_code(200);
	echo json_encode($output);
}



?>
