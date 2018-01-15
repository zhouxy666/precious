// pages/rank/rank.js
const mockData = require('../../data/mock.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: {
      navList: [
        {
          icon: '/static/images/fast-food.png',
          name: '美食寻宝',
        },
        {
          icon: '/static/images/sell_2.png',
          name: '购物寻宝',
        },
        {
          icon: '/static/images/ktv.png',
          name: '娱乐寻宝',
        }
      ],
      navLink: []
    },
    mapData: {
      cenLatLon: [],
      scale: "17",
    },
    markers: [],
    controls: [{
      id: 1,
      iconPath: '/static/images/location-2.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    this.setData({
      storyList: mockData.foodStoryList,
      boxList: mockData.nearList
    })
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        let cenLatLon = []
        cenLatLon[0] = res.latitude
        cenLatLon[1] = res.longitude
        setTimeout(function () {
          that.setData({
            cenLatLon: cenLatLon
          })
        }, 500)
        console.log(res)
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('map')
  },
  onShow: function () {
    console.log('onShow')
    let that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        let cenLatLon = []
        cenLatLon[0] = res.latitude
        cenLatLon[1] = res.longitude
        that.setData({
          cenLatLon: cenLatLon
        })
        console.log(res)
      },
    })
  },
  handleNavEvent: function (event) {
    console.log(event.detail.index)
  },
  /**
   * 移动到当前地图中心点
   */
  handleCenterTap(event) {
    this.mapCtx.moveToLocation()
  },
  /**
   * 寻找宝箱
   */
  handleSearchTap(event) {
    let that = this
    this.mapCtx.getRegion({
      success: function (res) {
        let testMarker1 = [res.northeast.longitude, res.northeast.latitude]
        let testMarker2 = [res.southwest.longitude, res.southwest.latitude]
        let markerComOpt = {
          iconPath: '/static/images/map-marker.png',
          width: '30',
          height: '30',
        }
        let marker1 = Object.assign({
          id: 1,
          latitude: testMarker1[1],
          longitude: testMarker1[0]
        }, markerComOpt)
        let marker2 = Object.assign({
          id: 2,
          latitude: testMarker2[1],
          longitude: testMarker2[0]
        }, markerComOpt)
        let markers = [marker1, marker2]
        that.setData({
          markers: markers
        })
      }
    })
  },
  /**
   * 增加缩放等级
   */
  handlePlusTap() {
    let that = this
    this.mapCtx.getScale({
      success: function (res) {
        let scale = res.scale + 1
        that.setData({
          mapData: {
            scale: scale
          }
        })
      }
    })
  },
  /**
   * 减少缩放等级
   */
  handleMinusTap() {
    let that = this
    this.mapCtx.getScale({
      success: function (res) {
        let scale = res.scale - 1
        scale = (scale < 15) ? 15 : scale
        that.setData({
          mapData: {
            scale: scale
          }
        })
      }
    })
  },
  /**
   * 点击marker跳转到宝物页面
   */
  handleMarkerTap(event) {
    let boxId = event.markerId
    console.log(boxId)
    wx.navigateTo({
      url: '/pages/open/open?box_id=' + boxId,
      success: function () {
        console.log('寻宝成功')
      }
    })
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