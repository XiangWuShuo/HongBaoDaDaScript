// ==UserScript==
// @name         hongbaodada
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://pc.hongbaodada.com/bao/My_redPack_Creat.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function setText(input, value) {
        input.value = value;
        var myEvent = new Event('input');
        input.dispatchEvent(myEvent);
    }

    function restart() {
        window.location.href = 'http://pc.hongbaodada.com/bao/My_redPack_Creat.html';
    }

    function step3() {
        if (true == document.getElementsByClassName('dn')[3].innerHTML.startsWith("bao_")) {
            setTimeout(restart, 500);
        } else {
            setTimeout(step3, 500);
        }
    }

    function step2() {
        document.getElementsByClassName('btn blue_btn')[1].click();
        setTimeout(step3, 500);
    }

    function step1() {
        var inputs = document.getElementsByTagName('input');
        setText(inputs[4], '1');
        setText(inputs[5], '1');
        setText(inputs[6], '1');
        document.getElementsByClassName('btn blue_btn')[0].click();
        setTimeout(step2, 500);
    }

    step1();
})();