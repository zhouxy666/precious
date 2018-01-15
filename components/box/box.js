Component({
  options: {
    multipleSlots: true
  },
  properties: {
    boxList: {
      type: Object,
      value: {
        logo_url: '',
        title: ''
      }
    }
  },
  data: {
    logo_url: '/static/images/logo/img02.jpg',
    title: '必胜客',
    desc: '【江湖传言】据说发现了必胜客老板私藏的私房钱，为了不被发现，他偷偷藏到了3个地方。快去寻找吧。。。'
  }
})