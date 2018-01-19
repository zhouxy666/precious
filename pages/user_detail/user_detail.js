// pages/user_detail/user_detail.js
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
  },
  clickUserImg(){
    console.log('点击用户头像')
    wx.navigateTo({
      url: '/pages/user_detail_img/user_detail_img',
    })
  }
})