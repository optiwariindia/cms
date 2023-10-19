<?php

namespace optiwariindia\cms;

class api extends module
{
    public static function v1($data)
    {
        $uri = $data["uri"];
        array_shift($uri);
        array_shift($uri);
        $method = strtolower($data["method"]);
        switch (count($uri)) {
            case 1:
                return self::call(["\\optiwariindia\\cms\\api\\" . $uri[0], $method], []);
                break;

            default:
                # code...
                break;
        }
        echo json_encode($data);
        die;
    }
    private static function call($method, $data)
    {
        if (!class_exists($method[0])) return $data;
        if (!method_exists($method[0], $method[1])) return $data;
        return call_user_func_array($method, [$data]);
    }
}
