<?php 
    $user = "root";
    $password = "root";
    $host = "localhost";
    $db = "db_scs";

    $conn = mysqli_connect($host, $user, $password, $db);

    if(!$conn) {

        echo "connection didn't work...";
        exit;
    }


    if (isset($_GET["nameID"])) { 

        $name = $_GET["nameID"];
        $myQuery = "SELECT * FROM tbl_operations WHERE `name` = '$name'";

        $result = mysqli_query($conn, $myQuery);
        $rows = array();

        while($row = mysqli_fetch_assoc($result)) {

            $rows[] = $row;
        }
    }

    //send the entire result set as a json encoded array
    echo json_encode($rows);

    // 
?> 