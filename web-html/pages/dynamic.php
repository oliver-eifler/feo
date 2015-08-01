<?php
require_once('php/class/basepage.class.php');
class DynamicPage extends BasePage
{
    protected function init()
    {
        $this->title = "PHP Test Page";

        $this->error = !$this->LoadPage();
    }
    protected function LoadPage()
    {
        $this->html.="<p>Eine PHP Test Seite</p>";
        return true;
    }
}
?>
