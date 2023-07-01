// app.ts
App<IAppOption>({
  globalData: {
      alltxt: null,
      question: null,
      switch1Checked: true,
      switch2Checked: false,
      switch3Checked: true,
      switch4Checked: false,
      modechanged : false,
      switch5Checked :false,
      switch6Checked: false,
      switch7Checked: false,
      plat: '',
      audio: false,
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})