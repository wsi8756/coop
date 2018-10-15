// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 数据结构：
    conversationlist: [
      {
        uid:0,//对话人用户ID
        name: "",//对话人用户名（user表中，发件人user_id对应的用户名）
        avatarUrl: '',//对话人头像（user表中，发件人user_id对应的头像地址）
        msg: "",//最近一条消息的内容
        time: "",//最近一条消息的时间（当前时间减去create_time）
        type: 0,//消息类型（type）
        msgnew: 0,//未读消息数量
      }
    ],
    conversationlist: [
      {
        uid: 0,
        name: "圈儿",
        avatarUrl: '../../img/top.png',
        msg: "哈哈哈哈哈或或哈哈哈哈哈好哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或",
        time: "刚刚",
        type: 0,
        msgnew: 1,
      },
      {
        uid: 0,
        name: "凉儿",
        avatarUrl: '',
        msg: "你好",
        time: "1天前",
        type: 1,
        msgnew: 3,
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