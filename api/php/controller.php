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
        if(isset(self::$config["database"])){
            module::config(self::$config["database"]);
        }
    }
    public static function init()
    {
        self::configure();
        self::api(
            request::method()
        );
    }
    public static function api($data){
        view::api($data);
    }
    
}
