<?php

namespace App\Service;

class Utilities{
    public static function checkNullity($value, $default)
    {
        return is_null($value) ? $default : $value;
    }

}
