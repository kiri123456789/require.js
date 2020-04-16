介紹
由 JavaScript 寫成，用於自動載入物件檔。當你 new 一個物件時，物件檔才會載入，不用預載。

使用
data-main   自訂義的設定檔路徑
src         require.js 檔案路徑
<script data-main="js/require/config" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.18/require.min.js"></script>

設定檔
此為 data-main 所指的檔案

自訂物件
1.先設 paths
在 data-main 設定檔裡 paths 的屬型與值
例

paths: {                //要使用的 js 框架路徑檔名，不要 js 副檔名，每一個框架都有2個路徑，第1個為優先使用 
        "jquery": ["https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min","../lib/jquery.min-1.11.2"],
        "bootstrap":['https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min','../lib/bootstrap.min-3.3.7'],
        "underscore":['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.0/underscore-min.js','../lib/underscore.1.9.0'],
        "workjs01":"work/workjs01",
        "workjs02":"work/workjs02"
    }

2.用 requier 指定要檔案載入順序，例如 require(["jquery","bootstrap","workjs02"]);


