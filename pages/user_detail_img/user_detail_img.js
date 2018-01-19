// pages/user_detail_img/user_detail_img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        this.setData({
          userInfo: res.userInfo
        })
      }.bind(this)
    })
  }
})