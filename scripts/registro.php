<?php
$conn = new mysqli('localhost', 'root', '', "apadrinamiento");

$nombre =$_POST["nombre"];
$celular =$_POST["celular"];
$cedula=$_POST["cedula"];
$email=$_POST["email"];
$cuota=$_POST["cuota"];

echo $nombre;



$query=  "INSERT INTO `apadrinados` (`nombre`, `celular`, `cedula`, `email`, `cuota`) VALUES ('$nombre','$celular','$cedula','$email','$cuota')";



if ($conn->query($query) === TRUE) {
    echo "registro";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();

?>