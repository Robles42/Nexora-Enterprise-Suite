<?php
header('Content-Type: application/json');
echo json_encode([
    "service" => "Nexora Billing",
    "runtime" => "PHP 8.2 Apache",
    "last_sync" => date('Y-m-d H:i:s')
]);