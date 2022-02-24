<?php
	include 'database.php';

	$phone=$_POST['phone'];
$sql = "INSERT INTO `phone_numbers`( `Phone`) 
	VALUES ('$phone')";
	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);
?>