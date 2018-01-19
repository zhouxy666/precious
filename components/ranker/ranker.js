// components/ranker/ranker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rankerItem: {
      type: Object,
      value: {
        avatarUrl: '/static/images/avatar/baby.JPEG',
        name: 'Tracy',
        scroll: '10234',
        heart_num: 0,
        rank_num: 1,
        heart_style: 1
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    width: '40rpx',
    height: '40rpx',
    medal_icon: '/static/images/medal.png',
    heart_empty: '/static/images/heart-empty.png',
    heart_full: '/static/images/heart-full.png',
    background: '#fff'
  },
  ready() {

  },
  attached() {
    let rank_num = this.properties.rankerItem.rank_num
    let heart_style = this.properties.rankerItem.heart_style
    let heart_num = this.properties.rankerItem.heart_num
    // 设置背景颜色
    if (rank_num % 2 !== 0) {
      this.setData({
        background: '#eee'
      })
    }
    // 设置心上的数字
    let hearFontStyle = 1
    this.setData({
      heart_style: heart_style,
      heart_num: heart_num
    })
    if (heart_style == 1 && Number(heart_num) < 10) {
      hearFontStyle = 1
      this.setData({
        hearFontStyle: hearFontStyle
      })
      return
    }
    if (heart_style == 1 && Number(heart_num) >= 10 && Number(heart_num) < 100) {
      hearFontStyle = 2
      this.setData({
        hearFontStyle: hearFontStyle
      })
      return
    }
    if (heart_style == 2 && Number(heart_num) < 10) {
      hearFontStyle = 3
      this.setData({
        hearFontStyle: hearFontStyle
      })
      return
    }
    if (heart_style == 2 && Number(heart_num) >= 0 && Number(heart_num)) {
      hearFontStyle = 4
      this.setData({
        hearFontStyle: hearFontStyle
      })
      return
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleLikeTap: function (event) {
      let heart_style = this.data.heart_style
      let heart_num = this.data.heart_num
      // 发送post请求，success以后改变当前的状态
      if (heart_style == 1) {
        heart_num += 1
        this.setData({
          heart_style: 2,
          heart_num: heart_num,
          font_color: '#666'
        })
        return
      }
      if (heart_style == 2) {
        heart_num -= 1
        this.setData({
          heart_style: 1,
          heart_num: heart_num,
          font_color: "#fff"
        })
        return
      }
    }
  }
})
