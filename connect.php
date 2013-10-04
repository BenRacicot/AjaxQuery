<?php

// Post the user's search query to this file
if (isset($_POST['searchquery']) && $_POST['searchquery'] != "")
	{ 
		echo json_encode(mainquery($_POST['searchquery'])); 
	}

function mainquery($query){

	// gets its own file for production
	$PDO = new PDO("mysql:host=localhost;dbname=DBNAME", "USER", "PASS");

	$sql = 'SELECT *
			FROM results
			WHERE title LIKE :searchquery
			ORDER BY date DESC';

	$datas = $PDO->prepare($sql);

	$datas->execute(array(':searchquery' => $query . '%'));

	return $datas->fetchALL(PDO::FETCH_OBJ);
}