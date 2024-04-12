[rewrite_local]
^https?://(api|h5).xiuxiu.meitu.com/(?!(v1/feed/)) url script-response-body https://github.com/ddgksf2013/dev/raw/main/MeiTuXiuXiuProCrack.js
[mitm]
hostname = *.xiuxiu.meitu.com
