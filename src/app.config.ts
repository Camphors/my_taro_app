export default {
  pages: ["pages/home/index", "pages/message/index", "pages/mine/index", "pages/threadDetails/index"],
  tabBar: {
    // custom: true,
    list: [{
      pagePath: "pages/home/index",
      text: "首页"
    },{
      pagePath: "pages/message/index",
      text: "消息"
    },{
      pagePath: "pages/mine/index",
      text: "我的"
    }]
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
