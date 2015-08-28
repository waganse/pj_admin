<?php
/**
 * The development database settings. These get merged with the global settings.
 */

return array(
  'default' => array(
    'type'   => 'mysqli',
    'connection' => array(
      'hostname'   => 'localhost',
      'database'   => 'admin',
      'username'   => 'yossy',
      'password'   => 'yossy',
      'persistent' => FALSE,
    ),
    'table_prefix' => '',
    'charset'   => 'utf8',
    'caching'   => false,
    'profiling' => true,
  ),
);
