// pages/my_treasure/my_treasure.js
const mockData = require('../../data/mock.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ["未使用", "已使用", "已过期"],
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let unUsedList = mockData.unUsedList
    this.setData({
      treasureList: unUsedList
    })
  },
  handleTapEvent: function (event) {
    let tabIndex = event.detail.index
    if (tabIndex == 1) {
      console.log('未使用')
      let unUsedList = mockData.unUsedList
      this.setData({
        treasureList: unUsedList,
        scrollTop: 0
      })
    }
    if (tabIndex == 2) {
      console.log('已使用')
      let usedList = mockData.usedList
      this.setData({
        treasureList: usedList,
        scrollTop: 0
      })
    }
    if (tabIndex == 3) {
      console.log('已过期')
      let expiredList = mockData.expiredList
      this.setData({
        treasureList: expiredList,
        scrollTop: 0
      })
    }
  },
  showTreasureDetail: function () {
    console.log('查看优惠券详情')
    wx.navigateTo({
      url: '/pages/my_treasure_detail/my_treasure_detail'
    })
  }
})