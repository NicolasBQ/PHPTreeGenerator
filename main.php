<?php
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '';
    $dbname = 'arbol_navidad';

    if(isset($_POST)) {
        treeGenerator($_POST['tree_value']);
    }


    function treeGenerator($tree_size) {
        for($i = 1; $i < $tree_size; $i++) {
            echo str_repeat('*', $i) . "<br>";
        }
    }
?>