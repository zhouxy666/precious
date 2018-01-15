// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  bindTre: function (event) {
    let treType = event.currentTarget.dataset.id
    wx.switchTab({
      url: '../index/index?treType=' + treType,
      success() {
        console.log('跳转成功')
      }
    })
    console.log('demo', treType)
  }
})