<?php

/* OrbitusBiomedicalDipoleBundle:Bernard:twiggy.html.twig */
class __TwigTemplate_9bf204b6aba495c4d52b9e5122c4d5c1e2e4c543b3395d1bb44fed591115ce90 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "Twiggy ";
        echo twig_escape_filter($this->env, (isset($context["cheese"]) ? $context["cheese"] : $this->getContext($context, "cheese")), "html", null, true);
        echo "!
";
    }

    public function getTemplateName()
    {
        return "OrbitusBiomedicalDipoleBundle:Bernard:twiggy.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }
}
