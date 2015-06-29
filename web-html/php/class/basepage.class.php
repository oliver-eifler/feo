<?php
/*
   Olli PHP Framework
*/
require_once('php/class/registry.class.php');
require_once("php/config.php");

class BasePage extends _registry
{
    protected $error=false;
    protected $html  ="";

    function __construct(&$data)
    {
        $this->error = false;
        $this->build = false;
        $this->modified = time();
        foreach ($data as $k => $v)
          $this->offsetSet($k,$v);
        $this->init();
    }
    //overwrite functions
    protected function init() {}



    //public functions
    public function getError()  {return $this->error;}
    public function getHtml()   {return $this->html;}
    public function getData($idx)
    {
        return $this->offsetGet($idx);
    }
    public function setData($idx,$value)
    {
        $this->offsetSet($idx,$value);
    }
    public function getPreparedTitle()
    {
        $config = Config::getInstance();
        $title = $this->title;
        $title .= (!empty($title)? " || ":"").$config->title;
        return $title;
    }
    public function getPreparedDescription()
    {
        $config = Config::getInstance();
        $desc = (!empty($this->description)?$this->description:$config->desc);
        return $desc;
    }
    public function getPreparedTags()
    {
        return implode(", ",$this->getTagsArray());
    }
    protected function getTagsArray()
    {
        $config = Config::getInstance();
        $tags = $config->tags;
        if (!empty($this->tags))
            $tags = array_merge(explode(",",$this->tags),$tags);
        foreach($tags as $k => $v)
            $tags[$k] = strtolower(trim($v));
        return $tags;
    }
    public function getModifiedTime()
    {
        $time = $this->mtime;
        if (!empty($time))
            return strtotime($time);
        $time = $this->ctime;
        if (!empty($time))
            return strtotime($time);
        return $this->modified;
    }
    public function debugData()
    {
        $html="<ul>";
        foreach($this as $k => $v)
            $html.="<li><b>".$k."</b>: ".htmlentities(print_r($v,true),ENT_QUOTES|ENT_HTML401)."</li>";
        foreach ($_SERVER as $name => $value)
        {
           if (substr($name, 0, 5) == 'HTTP_' || substr($name, 0, 6) == 'HTTPS_')
           {
               $html.="<li>".$name." = ".$value."</li>";
           }
        }

        $html.="</ul>";
        return $html;
    }
}
?>