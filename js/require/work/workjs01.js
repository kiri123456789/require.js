define(['jquery'], function($) {
    //變數宣告
    var myModule = {};
    var moduleName = "work module 01";
    var version = "1.0.0";

    //函式定義
	var loadTip = function(tipMsg, refConId){
		var tipMsg = tipMsg || "module is loaded finish.";
		if(undefined === refConId || null === refConId || "" === refConId+""){
			alert(tipMsg);
		}else{
			$('#' + (refConId+"")).html(tipMsg);
		}
    };
    
    //如有需要回傳此API的變數或函式供外部使用
	myModule.moduleName = moduleName;
	myModule.version = version;
	myModule.loadTip = loadTip;	
    return myModule;
    
    /*等同於上方的return
    return {
		"moduleName":"work module 01"
		,"version":"1.0.0"
		,loadTip:loadTip
    };
    */
});