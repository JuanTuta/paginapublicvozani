<?php
$conn = new mysqli('localhost', 'root', '', "apadrinamiento");

$imagen =$_POST["imagen"];
$nombre =$_POST["nombre"];
$raza=$_POST["raza"];
$sexo=$_POST["sexo"];
$años=$_POST["años"];

echo $imagen;



$query=  "INSERT INTO `pergat` (`imagen`, `nombre`, `raza`, `sexo`, `años`) VALUES ('$imagen','$nombre','$raza','$sexo','$años')";



if ($conn->query($query) === TRUE) {
    echo "registro";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();

?>