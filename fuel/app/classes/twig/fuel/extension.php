<?php

class Twig_Fuel_Extension extends \Parser\Twig_Fuel_Extension
{
    public function getFunctions()
    {
        return array_merge(parent::getFunctions(), array(
            'asset_js'  => new Twig_Function_Function('Asset::js'),
            'asset_img' => new Twig_Function_Function('Asset::img'),
            'asset_css' => new Twig_Function_Function('Asset::css'),
        ));
    }
}