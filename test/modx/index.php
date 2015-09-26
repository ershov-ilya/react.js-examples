<?php
/**
 * Created by PhpStorm.
 * User: ershov-ilya
 * Website: ershov.pw
 * GitHub : https://github.com/ershov-ilya
 * Date: 26.09.2015
 * Time: 22:54
 */

header('Content-Type: text/plain; charset=utf-8');
define('MODX_API_MODE', true);
require_once('../../../index.php');

/** @var modX $modx */
print $modx->getOption('site_name');

/** @var modResource $resource */
//$resource->get('pagetitle');

