// 网站标题控制

var routeTitle = "",
    siteTitle = "";


function setTitle() {
    if (!routeTitle && !siteTitle) { // 如果路由标题和网站标题都没有，就显示下载中
        document.title = "loading..."
    } else if (routeTitle && !siteTitle) { // 只有路由标题就只显示路由标题
        document.title = routeTitle;
    } else if (!routeTitle && siteTitle) { // 只有网站标题就只显示网站标题
        document.title = siteTitle;
    } else {
        document.title = `${routeTitle}-${siteTitle}`; // 都有就都显示，拼接一下
    }
}


export default {
    //设置路由标题
    setRouteTitle(title) {
        routeTitle = title;
        setTitle();
    },

    //设置网站标题
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    },
}