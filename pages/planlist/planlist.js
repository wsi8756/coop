// pages/planlist/planlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    planlist: [
      {
        plan_id:0,//plan表中的id
        worksType: "",//招募的大作品类型（文字）
        profession: [""],//该plan正在招募中的职种（对应recruit中state为1,is_delete为0的）。
        title: "",//plan表中的title
        describe: "",//plan表中的描述
        time:"",//最后更新时间，update_time减去现在时间。
      }
    ]

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