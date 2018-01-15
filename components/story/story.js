Component({
  options: {
    multipleSlots: true
  },
  properties: {
    storyInfo: {
      type: Object,
      value: {
        'logo_url': '/static/images/logo/img02.jpg',
        'title': '必胜客',
        'desc': '【江湖传言】据说发现了必胜客老板私藏的私房钱，为了不被发现，他偷偷藏到了3个地方。快去寻找吧...',
        'id': ''
      }
    }
  },
  methods: {
    tapStoryDetail: function (event) {
      let storyId = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + storyId,
        success: function () {
          console.log('查看详情跳转成功')
        }
      })
      console.log('查看详情')
    }
  }
})