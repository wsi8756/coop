// pages/add_plan/step1.js

var app = getApp()
var common = require('add_plan.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inquiry: {
      msg: '请问想要创作什么类型的作品呢？',
      option: [
        { index: 0, option: '原创音乐' },
        { index: 1, option: '翻唱' },
        { index: 2, option: '填词翻唱' },
        { index: 3, option: '改编音乐' },
        { index: 4, option: '视频' },
      ],
          bgUrl: '../../img/top.png'
    },


  },
  choose: function (e) {
    console.log('选择了：', e.detail.value,'，策划数据变为：')
    app.globalData.newPlan.worksType = this.data.inquiry.option[e.detail.value].option
    console.log(app.globalData.newPlan.worksType)
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