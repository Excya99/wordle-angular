<?php
// Required headers for CROSS ORIGIN SCRIPTING
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT");

$file = file("directory or URL of some word list in .txt", true); #text file (.txt) must be formatted as a single word per line
$word = trim($file[rand(0, count($file)-1)]);
$output = ["random_word" => $word];
header("Content-Type: application/json");
echo json_encode($output, JSON_PRETTY_PRINT);
/*
Normally for standard input:
$json = file_get_contents("php://input");
$input = json_decode($json, true);
*/