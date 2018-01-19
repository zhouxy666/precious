Component({
  options: {
    multipleSlots: true
  },
  properties: {
    boxItem: {
      type: Object,
      value: {
        logo_url: '',
        title: '',
        desc: '',
        id: ''
      }
    }
  },
  data: {
    logo_url: '/static/images/logo-active.png',
    title: '必胜客',
    desc: '【江湖传言】据说发现了必胜客老板私藏的私房钱，为了不被发现，他偷偷藏到了3个地方。快去寻找吧。。。',
    id: ''
  },
  methods: {
    onBoxEvent: function (event) {
      let boxid = event.currentTarget.dataset.boxid
      this.triggerEvent('boxEvent', { 'boxid': boxid })
    }
  }
})