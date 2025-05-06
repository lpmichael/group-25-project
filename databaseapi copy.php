
<?php
//Initial API taken from Upload to canvas


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("content-type: application/json");
$servername = "faure";
$username = "[EID]";
$db = "[EID]";
$password = "[PASSWORD]";
$conn = new mysqli($servername, $username, $password, $db);
//TODO
//POPULATE OPTIONS //Done?
//ADD COLOR
//REMOVE COLOR
//EDIT COLOR

// Check connection
if ($conn->connect_error) {
	http_response_code(400);
  die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] === "GET"){
	if (isset($_GET["coloramount"])){
		// set "coloramount" params in component to some value to do this function instead of defualt
		getColorAmount($conn);
	}
	//default is get all color table values
	handleGet($conn);
}

elseif ($_SERVER["REQUEST_METHOD"] === "POST"){
	handlePost($conn);
}

elseif ($_SERVER["REQUEST_METHOD"] === "PUT"){
	updateColor($conn);
}

//if first is set, set default selected values
function handleGet($conn) {
	
	$count = intval(isset($_GET["count"]) ? $_GET["count"] : "0");
	$firstTime = intval(isset($_GET["first"]) ? $_GET["first"] : "0");

	$sql = $conn->prepare("CALL getColors(?, ?)");
		if ($sql == false){
			die("Prepare Get Statement Failed" . $conn->error);
		}

	$sql-> bind_param("ii" ,$count, $firstTime);
	$sql->execute();


	$result = $sql->get_result();

	$output = array();

	while($row = $result -> fetch_assoc()){
		array_push($output, $row);
	}

	http_response_code(200);
	echo json_encode($output);
}

// get the number of colors in the table for input validation

function getColorAmount($conn){
	$sql = $conn->prepare();
	$sql -> bind_param();
	$sql -> execute();

	$result = $sql->get_result();
	//handle output

	http_response_code(200);

	//probably. Write this as an int somehow??
	echo json_encode($output);
}

//updateColor

function updateColor($conn){
	//put
	$id = intval(isset($_PUT["id"]) ? $_PUT["id"] : '');
	$hex_value = (isset($_PUT["hexval"]) ? $_PUT["hexval"] : "");
	$name = intval(isset($_PUT["name"]) ? $_PUT["name"] : "");


	$sql = $conn->prepare("CALL updateColor(?,?,?)") or trigger_error($conn->error, E_USER_ERROR);
	$sql -> bind_param("iss", $id, $hex_value, $name) or trigger_error($conn->error, E_USER_ERROR);
	$sql -> execute() or trigger_error($conn->error, E_USER_ERROR);
	http_response_code(201);
	
}


//insertColor

function insertColor($conn){
//post

}

//deleteColor

function deleteColor($conn){
	//delete

}
?>
