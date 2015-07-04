<?php
require_once('php/faker/autoload.php');
$faker = Faker\Factory::create();
  sendHTMLPage();
exit();
function sendHTMLPage()
{
  header("Content-Type: text/html; charset=utf-8");
  header("X-UA-Compatible: IE=edge");
  header("X-Powered-By: Olli PHP Framework");
  $modified = filemtime('template.php');
  $status = 200;
  //if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) == $modified)
  //  $status = 304;
  header ("Last-Modified: ".gmdate("D, d M Y H:i:s", $modified )." GMT",true,$status);
  echo HTML();
}
function SiteHeader()
{
  $html = "";
  $html.= "<div class='module header'>";
  $html.=   "<div class='header-logoWrapper'>";
  $html.=     "<!--[if gte IE 9]><!--><img class='header-logo' width='320' alt='F.E.O.' src='/img/feo.svg' data-fallback='/img/feo-320.png' onerror='this.src=this.getAttribute(\"data-fallback\");this.onerror=null;' /><!--<![endif]-->";
  $html.=     "<!--[if lt IE 9]><img class='header-logo' width='320' alt='F.E.O.' src='/img/feo-320.png' /><![endif]-->";
  $html.=   "</div>";
  $html.=   "<h1 class='header-title'><small>Förderverein</small><div>„Pro Eisenbahn im Oderbruch“ e.V.</div></h1>";
  $html.=   "</div>";
  return $html;
}
function SiteMenu()
{
  $html ="";
  $html.= "<div class='module menuWrapper'>";

  $html.= "<input type='checkbox' id='mainmenu' aria-hidden='true'>";
  $html.= "<label for='mainmenu'  aria-hidden='true' taborder='0' onclick>Menü</label>";
  $html.= "<script>document.getElementById('mainmenu').checked=false</script>";

  $html.=   "<ul class='menu'>";
  $html.=     "<li class='menu-item'><a href='/verein'>Unser Verein</a></li>";
  $html.=     "<li class='menu-item'><a href='/fahrzeuge'>Unsere Fahrzeuge</a></li>";
  $html.=     "<li class='menu-item'><a href='/aktuell'>Aktuelles</a></li>";
  $html.=     "<li class='menu-item menu-item-grow text'><a href='/region'>Region</a></li>";
  $html.=     "<li class='menu-item'><a href='/kontact'>Kontakt</a></li>";
  $html.=   "</ul>";
  $html.= "</div>";
  return $html;
}
function SiteFooter()
{
  $fromYear = 2015;
  $thisYear = (int)date('Y');
  $Year = $fromYear . (($fromYear != $thisYear) ? '-' . $thisYear : '');
  $html ="";
  $html.= "<div class='module footerWrapper'>";
  $html.= "<div class='footer'>";
  $html.= "Der Footer mit Impressum Link";
  $html.= "</div>";
  $html.= "</div>";

  return $html;
}
function PageHeader()
{
  $html ="";
  $html.= "<div class='pageWrapper-header'>";
  $html.= "<div class='typo pageHeader'>";
  $html.= "<h1>Förderverein „Pro Eisenbahn im Oderbruch“ e.V.</h1>";
  $html.= "</div>";
  $html.= "</div>";

  return $html;
}
function PageContent()
{
  $html ="";
  $html.= "<div class='pageWrapper-content'>";
  $html.= "<div class='pageContent'>";
  $html.= "<article class='typo content clearfix'>";
  $html.= file_get_contents("pages/start.html");
  $html.= "</article>";
  $html.= "</div>";
  $html.= "</div>";

  return $html;
}
function PageNav()
{
  global $faker;
  $html ="";
  $html.= "<nav class='pageWrapper-nav'>";
  $html.= "<div class='typo pageNav'>";
  $html.=   "<ul class='submenu'>";
  for ($i=0;$i<10;$i++)
  {
    $text = str_replace(".","",$faker->text(20));
    $url = '/'.str_replace(" ","_",$text);
    $html.=     "<li class='submenu-item'><a href='".$url."'>".$text."</a></li>";
  }
  $html.=   "</ul>";
  $html.= "</div>";
  $html.= "</nav>";

  return $html;
}
function PageAds()
{
  global $faker;
  $html ="";
  $html.= "<aside class='pageWrapper-aside'>";
  $html.= "<div class='typo pageAside'>";
  $html.= "<h3>Neuigkeiten</h3><ul>";
  for ($j=0;$j<3;$j++)
  {
    $html.="<li><strong>".$faker->catchPhrase."</strong><br>";
    $html.=$faker->paragraph(1)."</li>";
  }
  $html.= "</ul></div>";
  $html.= "</aside>";

  return $html;
}

function PreLoad()
{
  $html = "";
  $html.= "<link rel='stylesheet' type='text/css' href='/css/styles.css'>";
  /* bootstrap scripts */
  $html.= "<script src='_assets/js/components/html5shiv.js'></script>";
  $html.= "<script src='_assets/js/components/webfontloader.js'></script>";
  $html.= "<script src='_assets/js/components/modernizr-custom.js'></script>";
  $html.= "<script src='_assets/js/init.js'></script>";

  return $html;
}
function PostLoad()
{
  $html = "";
  return $html;
}

function HTMLHeader()
{
  $html = "";
  $html.= "<head>";
  $html.=   "<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=yes'>";
  $html.=   "<meta name='format-detection' content='telephone=no'/>";
  $html.=   "<title>F.E.O.</title>";
  $html.=   PreLoad();
  $html.= "</head>";
  return $html;
}
function Favicons()
{
  $html = "";
  $html.= "<link rel='apple-touch-icon' sizes='57x57' href='/app/apple-touch-icon-57x57.png'>";
  $html.= "<link rel='apple-touch-icon' sizes='60x60' href='/app/apple-touch-icon-60x60.png'>";
  $html.= "<link rel='apple-touch-icon' sizes='72x72' href='/app/apple-touch-icon-72x72.png'>";
  $html.= "<link rel='apple-touch-icon' sizes='76x76' href='/app/apple-touch-icon-76x76.png'>";
  $html.= "<link rel='apple-touch-icon' sizes='114x114' href='/app/apple-touch-icon-114x114.png'>";
  $html.= "<link rel='apple-touch-icon' sizes='120x120' href='/app/apple-touch-icon-120x120.png'>";
  $html.= "<link rel='icon' type='image/png' href='/app/favicon-32x32.png' sizes='32x32'>";
  $html.= "<link rel='icon' type='image/png' href='/app/favicon-96x96.png' sizes='96x96'>";
  $html.= "<link rel='icon' type='image/png' href='/app/favicon-16x16.png' sizes='16x16'>";
  $html.= "<link rel='manifest' href='/app/manifest.json'>";
  $html.= "<link rel='shortcut icon' href='/app/favicon.ico'>";
  $html.= "<meta name='msapplication-TileColor' content='#221144'>";
  $html.= "<meta name='msapplication-config' content='/app/browserconfig.xml'>";
  $html.= "<meta name='theme-color' content='#221144'>";
  return $html;
}
function HTMLBody()
{
  $html = "<body>";
  $html.= "<header class='headerContainer'>";
  $html.=   SiteHeader();
  $html.= "</header>";
  $html.= "<nav class='menuContainer'>";
  $html.=   SiteMenu();
  $html.= "</nav>";
  $html.= "<div class='pageContainer'>";
  $html.=   "<div class='module module--page pageWrapper'>";
  $html.=     PageHeader();
  $html.=     PageNav();
  $html.=     PageContent();
  $html.=     PageAds();
  $html.=   "</div>";
  $html.= "</div>";
  $html.= "<footer class='footerContainer'>";
  $html.=   SiteFooter();
  $html.= "</footer>";
  $html.= "</body>";

  return $html;
}
function HTML()
{
  $html = "<!DOCTYPE HTML>";
  $html.= "<html  lang='de'>";
  $html.= HTMLHeader();
  $html.= HTMLBody();
  $html.= "</html>";
  return $html;
}
function error_page()
{
  $html = "<!DOCTYPE HTML>";
  $html.= "<head>";
  $html.=   "<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=yes'>";
  $html.=   "<meta name='format-detection' content='telephone=no'/>";
  $html.=   "<title>Page Not Found</title>";
  $html.=  "<style type='text/css'>";
  $html.=    file_get_contents("css/404.css");
  $html.=  "</style>";
  $html.= "</head>";
  $html.= "<body>";
  $html.=  "<img src='img/yawn.png' alt=''>";
  $html.=  "<h1>Page Not Found</h1>";
  $html.=  "<p>Sorry, but the page you were trying to view does not exist.</p>";
  $html.=  "<p>&nbsp;</p>";
  $html.=  "<p>Maybe, you try it here:</p>";
  $html.=   "<ul>";
  $html.=   getLinkList("main");
  $html.=   "</ul>";
  $html.= "</body>";
  $html.= "</html>";
  $html.=  "<!-- IE needs 512+ bytes: http://blogs.msdn.com/b/ieinternals/archive/2010/08/19/http-error-pages-in-internet-explorer.aspx -->";

  echo $html;
}
/*
<iframe height='268' scrolling='no' src='//codepen.io/olli/embed/qEKMZm/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/olli/pen/qEKMZm/'>Olli's canvas spinner animation</a> by Oliver Jean Eifler  (<a href='http://codepen.io/olli'>@olli</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>



*/
?>