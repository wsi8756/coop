// pages/conversation/conversation.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据结构：
    msglist: [
      {
        letter_id:0,//线上letter表中的id
        me: 0,//是否是自己发的（0为接受的信息，1为用户自己发出的信息）
        name: "",//发件人用户名（user表中，发件人user_id对应的用户名）
        avatarUrl: '',//发件人头像（user表中，发件人user_id对应的头像地址）
        msg: "",//msg消息内容（content）
        time: "",//消息时间（当前时间减去create_time，1分钟内为“刚刚”，1分-1小时内为“x分钟前”,1小时-1天内为“x小时前”，>一天为“x天前”——（此处写成单独的时间转换函数，米哥有写过此逻辑，暂时可以考虑先用消息时间文字本身，之后再细化此函数））
        type:0,//消息类型（type）
        is_read:0,//是否已读（is_read）
      }
    ],

     msglist: [
      {
        me: 0,
        name: "圈儿",
        time: "1小时前",
        avatarUrl: '../../img/top.png',
        msg: '圈友你好哈哈哈哈哈好哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈好哈哈哈哈哈或或或或或或或或或或或或或或或'
      },
      {
        me: 0,
        name: "圈儿",
        time: "30分钟前",
        avatarUrl: '../../img/top.png',
        msg: '有什么事吗？'
      },
      {
        me: 1,
        name: "我",
        time: "28分钟前",
        msg: '圈儿你好哈哈哈哈哈好哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或'
      },
      {
        me: 0,
        name: "圈儿",
        time: "28分钟前",
        avatarUrl: '../../img/top.png',
        msg: '你好呀'
      },
      {
        me: 1,
        name: "我",
        time: "刚刚",
        msg: '我要向圈儿表白'
      },
      {
        me: 1,
        name: "我",
        time: "刚刚",
        msg: '圈儿最萌！'
      },
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