// pages/add_plan/step2.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {


    inquiry: {
      msg: '请问想要招募哪些技能的圈友呢？',
     
      option: [
        { index: 0, option: '演唱' },
        { index: 1, option: '作曲' },
        { index: 2, option: '混音' },
      ],
      bgUrl: '../../img/top.png'
    }

   
  },

  checkboxChange: function (e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    var option = this.data.inquiry.option;
      var checkArr = e.detail.value;
     for (var i = 0; i < option.length; i++) {
      if (checkArr.indexOf(i + "") != -1) {
        option[i].checked = true;
      } else {
        option[i].checked = false;
      }
     }
    var s='inquiry.option'
    this.setData({
      [s]: option
    })
    app.globalData.newPlan.profession=[];
    for (var i = 0; i < checkArr.length; i++)
    {
      app.globalData.newPlan.profession[i] = this.data.inquiry.option[checkArr[i]].option
         
    }
    console.log('现在选择了：',app.globalData.newPlan.profession)
  },
  next: function (e) {
    wx.navigateTo({
      url: './step3'
    })
    console.log('策划信息为：',app.globalData.newPlan)
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