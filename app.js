App({

  globalData: {
    domain: 'http://192.168.0.19:8882/api',
    userInfo: {},
    tempPlan: {
      worksType:null,
      profession:[],
      title:"",
      describe:""
    }
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */



  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo,
               console.log(this.globalData.userInfo)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }

            }
          })
        }
      }
    })
    // 获取openID
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log(1),
          console.log('[云函数] [login] user openid: ', res.result.openid)
        this.globalData.openid = res.result.openid,
          this.globalData.unionid = res.result.unionid,
          console.log(this.globalData.openid)
          // console.log(this.globalData.unionid)

      },
      fail: err => {
        console.log(2),
          console.error('[云函数] [login] 调用失败', err)

      }
    })

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  alert: function (params) {
  },
  console: function (msg) {
    console.log(msg)
  },

  buildUrl: function (Url) {
    var Res
    Res = this.globalData.domain + '/' + Url
    return Res
  },
  header:function(){
    var res 
    res = {
      "Content-Type": "application/json"
      
    }
  }


})
