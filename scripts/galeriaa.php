<?php

$conn = new mysqli('localhost', 'root', '', "apadrinamiento");
$query=  "SELECT * FROM pergat";


$jsonprub =array();


$result = $conn->query($query);

while($row = $result->fetch_assoc()) {
    $id=$row['id'];
    $imagen=$row['imagen'];
    $nombre=$row['nombre'];
    $raza=$row['raza'];
    $sexo=$row['sexo'];
    $años=$row['años'];                    
    
    $jsonprub[]=array('id'=> $id,'imagen'=> $imagen,'nombre'=> $nombre,'raza'=>$raza,'sexo'=>$sexo,'años'=>$años);
}

$json_string = json_encode($jsonprub);
echo $json_string;

/*
$file = 'galeriaprueba.json';

file_put_contents($file,$json_string);
  */


?>