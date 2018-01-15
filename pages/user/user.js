// pages/user/user.js
var promise = require('../../plugins/es6-promise.js')
Page({
  data:{
    userInfo:{},
    items:[{
      icon:'wallet',
      name:'钱包',
      bottomLine:''
    },{
      icon:'collection',
      name:'收藏',
      bottomLine: 'border-1px-bottom'
    },{
      icon:'album',
      name:'相册',
      bottomLine: 'border-1px-bottom'
    },{
      icon:'card',
      name:'卡包',
      bottomLine: 'border-1px-bottom'
    },{
      icon:'emotion',
      name:'表情',
      bottomLine: ''
    },{
      icon:'set',
      name:'设置',
      bottomLine: ''
    }]
  },
  onLoad(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.getUserInfo({
      success:function(res){
        this.setData({
          userInfo: res.userInfo
        })
      }.bind(this)
    })
  },
  clickUser(e){
    console.log('点击用户信息')
    wx.navigateTo({
      url: '/pages/user_detail/user_detail',
    })
  },
  clickwallet(e){
    console.log('点击钱包信息')
    wx.navigateTo({
      url: '/pages/wallet_detail/wallet_detail',
    })
  },
  clickcollection(){
    console.log('点击收藏信息')
    wx.navigateTo({
      url: '/pages/collection_detail/collection_detail',
    })
  },
  clickalbum(){
    console.log('点击相册信息')
    wx.navigateTo({
      url: '/pages/album_detail/album_detail',
    })
  },
  clickcard(){
    console.log('点击卡包信息')
    wx.navigateTo({
      url: '/pages/card_detail/card_detail',
    })
  },
  clickemotion(){
    console.log('点击表情信息')
    wx.navigateTo({
      url: '/pages/emotion_detail/emotion_detail',
    })
  },
  clickset(){
    console.log('点击设置信息')
    wx.navigateTo({
      url: '/pages/set_detail/set_detail',
    })
  }
})