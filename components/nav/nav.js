// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navList: {
      type: Array,
      value: [
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
        },
        {
          icon: '/static/images/ktv.png',
          name: '其他寻宝',
        }
      ]
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    active: [],
    navLength: 0
  },
  attached: function () {
    let navLength = this.properties.navList.length
    let active = []
    for (let i = 0; i < navLength; i++) {
      active[i] = ''
    }
    active[0] = "nav-active"
    this.setData({
      active: active,
      navLength: navLength
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleNavItemTap: function (event) {
      let navIndex = event.currentTarget.dataset.id
      let navLength = this.data.navLength
      let active = []
      for (let i = 0; i < navLength; i++) {
        active[i] = ''
      }
      active[navIndex] = "nav-active"
      this.setData({
        active: active,
        navIndex: navIndex
      })
      this.triggerEvent('navEvent', { 'index': navIndex + 1 })
    }
  }
})
