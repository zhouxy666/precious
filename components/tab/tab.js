 Component({
  options: {
    multipleSlots: true
  },
  properties: {
    tabList: {
      type: Array,
      value: ['附近的宝箱', '好友的宝箱']
    },
    height: {
      type: String,
      value: "80rpx"
    },
    backgroundColor: {
      type: String,
      value: '#ccc'
    },
    fontColor: {
      type: String,
      value: '#fff'
    },
    fontSize: {
      type: String,
      value: '28rpx'
    },
    showTabLine: {
      type: Boolean,
      value: true
    },
    tabLinkColor: {
      type: String,
      value: '#ff530d'
    },
    tabLinkWidth: {
      type: String,
      value: '4rpx'
    }
  },
  data: {
    active: ['tab-active', ''],
    test: [1, 2, 3, 4],
    tabBarStyle: {},
    tabFontStyle: {
      fontColor: '',
      fontSize: '',
      tabLinkColor: '',
      tabLinkWidth: ''
    }
  },
  attached() {
    let tabLength = this.properties.tabList.length
    this.setData({
      tabLength: tabLength
    })
  },
  methods: {
    handleTap: function (event) {
      let tabLength = this.properties.tabList.length
      let tapIndex = event.currentTarget.dataset.id
      let active = []
      for (let i = 0; i < tabLength; i++) {
        active[i] = ''
      }
      active[tapIndex] = 'tab-active'
      this.setData({
        active: active
      })
      this.triggerEvent('tapEvent', { 'index': tapIndex + 1 })
    }
  }
})