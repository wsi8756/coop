Page({
  data: {

    inter: 2000,
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },

  checkboxChange: function (e) {
    console.log('checkbox发生chang事件', e.detail.value)
  }
})