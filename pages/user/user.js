// pages/user/user.js
var promise = require('../../plugins/es6-promise.js')
Page({
  data: {
    userInfo: {},
    items: [{
      icon: 'wallet',
      name: '我的宝藏',
      bottomLine: 'border-1px-bottom',
      id: "1"
    }, {
      icon: 'collection',
      name: '累计获得',
      bottomLine: 'border-1px-bottom',
      num: '1000',
      id: "2"
    }, {
      icon: 'album',
      name: '排行榜',
      bottomLine: 'border-1px-bottom',
      id: "3"
    }, {
      icon: 'card',
      name: '商家入驻',
      bottomLine: 'border-1px-bottom',
      id: "4"
    }, {
      icon: 'emotion',
      name: '关于我们',
      bottomLine: '',
      id: "5"
    }]
  },
  onLoad(options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.getUserInfo({
      success: function (res) {
        this.setData({
          userInfo: res.userInfo
        })
      }.bind(this)
    })
  },
  clickUser(e) {
    console.log('点击用户信息')
    wx.navigateTo({
      url: '/pages/user_detail/user_detail',
    })
  },
  clickwallet(e) {
    console.log('点击我的宝藏信息')
    wx.navigateTo({
      url: '/pages/my_treasure/my_treasure',
    })
  },
  clickcollection() {
    console.log('点击累计获得')
  },
  clickalbum() {
    console.log('点击排行榜')
    wx.switchTab({
      url: '/pages/rank/rank',
    })
  },
  clickcard() {
    console.log('点击商家入驻')
    wx.navigateTo({
      url: '/pages/ent_settle/ent_settle',
    })
  },
  clickemotion() {
    console.log('点击关于我们')
    wx.navigateTo({
      url: '/pages/about_us/about_us',
    })
  }
})