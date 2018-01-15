// pages/open/open.js
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
    console.log(options)
    let boxId = options['box_id']
    this.setData({
      boxId: boxId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  handleOpen: function (event) {
    console.log(event)
    wx.navigateTo({
      url: '/pages/invite/invite?boxId=' + this.data.boxId,
    })
  }
})