// pages/add_plan/step1.js

var app=getApp()
var common = require('add_plan.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '请问想要创作什么类型的作品呢？',
    works_type: [
      { id: 1, value: '原创音乐' },
      { id: 2, value: '翻唱'},
      { id: 3, value: '填词翻唱' },
      { id: 4, value: '改编音乐'},
      { id: 6, value: '视频' },
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    app.globalData.tempPlan.worksType = e.detail.value
    console.log(app.globalData.tempPlan.worksType)
  },
  next: function (e) {
    wx.navigateTo({
      url: './step2'
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