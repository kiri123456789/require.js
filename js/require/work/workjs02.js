define(['workjs01'],function(w01){
	//1,define intenal variable area//變量定義區
	var moduleName = "work module 02";
	var moduleVersion = "1.0.0";
	
	//2,define intenal funciton area//函數定義區
	// var setHtml = function(refId,strHtml){
	// 	if(undefined === refConId || null === refConId || "" === refConId+""){
	// 		return;
	// 	}else{
	// 		$('#' + (refId + "")).html(strHtml+"");
	// 	}
	// };
	
	//3,auto run when js file is loaded finish
	//在JS加載完,可在本模塊尾部[return之前]運行某函數,即完成自動運行
	w01.loadTip("本頁文件都加載完成，本頁設計 workjs01.js 文件依賴jquery, workjs02.js 依賴 workjs01.js","loadMsgCon");
	
	//4,should be return/output a object[exports/API]
	//如有需要暴露(返回)本模塊API(相關定義的變量和函數)給外部其它模塊使用
	return {
		"moduleName":moduleName
		,"version": moduleVersion
	}
	
});