require.config({
    baseUrl: "js/require",  //路徑
    shim: {                 //非 AMD 規範的 js 框架
        'name': {
            deps: ['dep'],
            exports: '_'
        }
    },
    paths: {                //要使用的 js 框架路徑檔名，不要 js 副檔名，每一個框架都有2個路徑，第1個為優先使用 
        "jquery": ["https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min","../lib/jquery.min-1.11.2"],
        "bootstrap":['https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min','../lib/bootstrap.min-3.3.7'],
        "underscore":['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.0/underscore-min.js','../lib/underscore.1.9.0'],
        "workjs01":"work/workjs01",
        "workjs02":"work/workjs02"
    }
});
//按不同先後的依賴關系加載各個JS文件
// require(["jquery","bootstrap","workjs01"],function($,w2,w1){
//     require(['workjs02']);
// });
require(["jquery","bootstrap","workjs02"]);