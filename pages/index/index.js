// pages/index/index.js
const mockData = require('../../data/mock.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: ['link-active', '', ''],
    storyList: [],
    boxList: [],
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log(mockData.boxList)
    this.setData({
      storyList: mockData.foodStoryList,
      boxList: mockData.nearList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  bindNav: function (event) {
    let tapIndex = event.currentTarget.dataset.id
    if (tapIndex == 1) {
      this.setData({
        active: ['link-active', '', ''],
        contentData: '这里是美食寻宝',
        storyList: mockData.foodStoryList,
        tabScrollTop: 0
      })
    }
    if (tapIndex == 2) {
      this.setData({
        active: ['', 'link-active', ''],
        contentData: '这里是购物寻宝',
        storyList: mockData.sellStoryList,
        tabScrollTop: 0
      })
    }
    if (tapIndex == 3) {
      this.setData({
        active: ['', '', 'link-active'],
        contentData: '这里是娱乐寻宝',
        storyList: mockData.funStoryList,
        tabScrollTop: 0
      })
    }
    console.log(this.data.active)
    console.log(this.data.scrollTop)
  },
  handleTapEvent: function (event) {
    let tabIndex = event.detail.index
    console.log(tabIndex)
    if (tabIndex == 1) {
      this.setData({
        boxList: mockData.nearList,
        boxScrollTop: 0
      })
    }
    if (tabIndex == 2) {
      this.setData({
        boxList: mockData.friendList,
        boxScrollTop: 0
      })
    }
  }
})