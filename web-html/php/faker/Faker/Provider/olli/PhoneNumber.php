<?php

namespace Faker\Provider\olli;

class PhoneNumber extends \Faker\Provider\PhoneNumber
{
    protected static $formats = array(
        '+49(0)##########',
        '+49(0)#### ######',
        '+49 (0) #### ######',
        '+49(0) #########',
        '+49(0)#### #####',
        '0##########',
        '0#########',
        '0#### ######',
        '0#### #####',
        '(0####) ######',
        '(0####) #####',
    );
}
