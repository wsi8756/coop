// pages/add_plan/step3.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function (e) {
    app.globalData.newPlan.title = e.detail.value.input
    app.globalData.newPlan.describe = e.detail.value.describe
    console.log("约稿信息为",app.globalData.newPlan)
    wx.request({
      // url: app.buildUrl('login'),
      url:'http://192.168.0.19:8882/api/test',
      method: 'POST',
      header: {
        // 'content-type': 'application/x-www-form-urlencoded'
        "Content-Type": "application/json"
      },
      data: app.globalData.newPlan,
      success: function (res) {
        console.log("成功发送", app.globalData.newPlan)
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})