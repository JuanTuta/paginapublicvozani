<?php
$conn = new mysqli('localhost', 'root', '', "apadrinamiento");

$nombre =$_POST["nombre"];


echo $nombre;



$query=  "DELETE FROM apadrinados WHERE `apadrinados`.`id` = $nombre";



if ($conn->query($query) === TRUE) {
    echo "registro";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();

?>