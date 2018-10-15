//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,

  },
// 登陆
   login: function (e) {
    app.console(e)
    app.globalData.userInfo = e.detail.userInfo
    if (!e.detail.userInfo) {
      app.alert({ 'content': '登陆失败，请重新再来~~' });
      return;
    }
    var data = e.detail.userInfo;
    app.console(app.buildUrl('login'))
    // 获取登陆凭证code，发送code至后端服务器验证返回openid
    wx.login({
      success: function (res) {
        if (!res.code) {
          app.alert({ 'content': '登陆失败，请重新再来~~' });
          return;
        }
        data['code'] = res.code
        wx.request({
          url: app.buildUrl('login'),
          method: 'POST',
          header: {
            // 'content-type': 'application/x-www-form-urlencoded'
            "Content-Type": "application/json"
          },
          data: data,
          success: function (res) {
            app.console(res)
          }
        })

      }
    }
    );
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getMsgList:function(){
    wx.request({
      url: app.buildUrl('user/dialogList'),
      header:app.header,
      method:'POST',
      data: {
        "uid": 2018000000008150,
        "id": 2018000000000005,
        "limit": 20,
        "letter_id": 225306
      },
      success:function(res){
        app.console(res.data)
      }
    })
  }
})