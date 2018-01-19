// pages/rank/rank.js
let mockData = require('../../data/mock.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    rankerList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let rankerList = mockData.rankerList
    this.setData({
      rankerList: rankerList
    })
    wx.setTopBarText({
      text: '排行榜'
    })
  }
})