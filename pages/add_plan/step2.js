// pages/add_plan/step2.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '请问想要招募哪些技能的圈友呢？',
 
    profession: [
      { id: 1, value: '演唱' },
      { id: 10, value: '作曲' },
      { id: 13, value: '混音' },
    ]
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    app.globalData.tempPlan.profession = e.detail.value
    console.log(app.globalData.tempPlan.profession)
  },
  next: function (e) {
    wx.navigateTo({
      url: './step3'
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