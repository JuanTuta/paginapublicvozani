<?php

$conn = new mysqli('localhost', 'root', '', "apadrinamiento");
$query=  "SELECT * FROM apadrinados";


$jsonprub =array();


$result = $conn->query($query);

while($row = $result->fetch_assoc()) {
    $id=$row['id'];
    $nombre=$row['nombre'];
    $celular=$row['celular'];
    $cedula=$row['cedula'];
    $email=$row['email'];
    $cuota=$row['cuota'];                    
    
    $jsonprub[]=array('id'=> $id,'nombre'=> $nombre,'celular'=> $celular,'cedula'=>$cedula,'email'=>$email,'cuota'=>$cuota);
}

$json_string = json_encode($jsonprub);
echo $json_string;

/*
$file = 'galeriaprueba.json';

file_put_contents($file,$json_string);
  */


?>