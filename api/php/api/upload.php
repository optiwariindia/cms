<?php
namespace optiwariindia\cms\api;

class upload extends \optiwariindia\cms\module{
    public static function post(){
        $file=$_FILES["file"];
        if($file["error"]!=0)return [
            "error"=>"Unable to upload this file, contact administrator for more details"
        ];
        $name=str_replace("=","",base64_encode($_SERVER['REMOTE_ADDR']).$_SERVER["REQUEST_TIME"]);
        $ext=pathinfo($file["name"],PATHINFO_EXTENSION);
        move_uploaded_file($file["tmp_name"],"./uploads".DIRECTORY_SEPARATOR.$name.".".$ext);
        return [
            "name"=>$name,
            "ext"=> $ext,
        ];
        // return $_FILES;
    }
}