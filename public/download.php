<?php

$dir = '../';
$result = [];

if (is_dir($dir)) {
    $iterator = new RecursiveDirectoryIterator($dir);
    foreach (new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::CHILD_FIRST) as $file) {
        if (! $file->isFile()) {
            $result[] = 'path: '.$file->getPath().',  filename: '.$file->getFilename();
        } else {
            $result[] = 'path: '.$file->getPath().',  filename: '.$file->getFilename();
        }
    }

}

echo json_encode($result);
