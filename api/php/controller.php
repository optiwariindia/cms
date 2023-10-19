<?php

namespace optiwariindia\cms;

use optiwariindia\website\view;

class controller
{
    private static $config;
    private static function configure()
    {
        $temp = config::file();
        if ($temp == null) {
            die("misconfigured");
        }

        if (!file_exists($temp)) {
            die("misconfigured");
        }

        $data = file_get_contents($temp);
        try {
            self::$config = json_decode($data, true);
        } catch (\Throwable $th) {
            die("miconfigured");
        }
        if (isset(self::$config["database"])) {
            module::config(self::$config["database"]);
        }
    }
    public static function init()
    {
        self::configure();
        $url = request::url();
        $method = request::method();
        $data = [];
        switch (count($url)) {
            case 0:
                self::api($data);
                break;
            case 1:
                $data = self::call(["\\optiwariindia\\cms\\" . $url[0], $method], $data);
                self::api($data);
                break;
            case 2:
                $data = self::call(["\\optiwariindia\\cms\\" . $url[0], $url[1]], $data);
                self::api($data);
                break;
            default:
                $data["uri"]=$url;
                $data["method"]=$method;
                $data = self::call(["\\optiwariindia\\cms\\" . $url[0], $url[1]], $data);
                self::api($data);
                break;
        }
    }
    public static function api($data)
    {
        view::api($data);
    }
    public static function call($callableMethod, $data)
    {
        if (!class_exists($callableMethod[0])) return $data;
        if (!method_exists($callableMethod[0], $callableMethod[1])) return $data;
        return call_user_func_array($callableMethod, [$data]);
    }
}
