(function(){  //匿名函数立即执行，不许导入导出
    
    function resize(){
        let rootSize = 100;  //100px等于1rem,如果750px的设计稿，7.5rem就为设计稿的宽度，如果屏幕宽度是1000px,那么1000/7.5就是1rem对应的屏幕宽度
        let designWidth = 750;  //设计稿的宽度
        let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let fontSize = (screenWidth/designWidth) * rootSize;
        document.querySelector("html").style.fontSize = fontSize + "px";
    }

    window.onresize = function(){
        resize()
    }

    document.addEventListener("DOMContentLoaded",resize);
}())