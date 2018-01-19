Page({
  handleEntSignIn: function () {
    console.log('入驻成功')
  },
  handleUsername: function (event) {
    let username = event.detail.value
    this.setData({
      username: username
    })
  },
  handlePassword: function (event) {
    let password = event.detail.value
    this.setData({
      password: password
    })
  },
  handleEntSignIn: function () {
    let signData = {
      username: this.data.username,
      password: this.data.password
    }
    this.setData({
      signData: signData
    })
  }
})