// index.ts
// 获取应用实例
var app = getApp()
var valid=false;
var Switch1Checked=false;
var clicked=false;
var getlocals;
var tempFilePaths;
let that=this;
var Audio=false;
var pageData = {
    data: {
        switch1Style: '',
        switch2Style: 'text-decoration: line-through',
        //fs: null,
        getlocals: false,
        getgitees: false,
        getlocal: false,

        Switchhint: "网络词表(近3000组)",
        switch1Checke: app.globalData.switch1Checked,
        switch2Checke: app.globalData.switch2Checked,
        switch3Checke: app.globalData.switch3Checked,
        switch4Checke: app.globalData.switch4Checked,
        switch5Checke: app.globalData.switch5Checked,
        switch6Checke: app.globalData.switch6Checked,
        switch7Checke: app.globalData.switch7Checked,
        tempFilePaths: '',
        motto: '获取词表',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
      },
    
      // 事件处理函数
      bindViewTap() {
        wx.showLoading({
            title: '加载中',
          })
new function() {

if(getlocals==true){

  if(app.globalData.alltxt!='' && tempFilePaths.length==0){
    wx.hideLoading()
    wx.navigateTo({
        url: '../input0/index',
      })
     // tempFilePaths.length=0
}

        valid=true;
        //app.globalData.alltxt=''
            //console.log(tempFilePaths[0]["path"])
                  const fs = wx.getFileSystemManager();
                  for (var t=0 ; t<tempFilePaths.length ; t++){

                  fs.readFile({
                      filePath: tempFilePaths[t]["path"],
                      encoding: 'utf8',
                      success(res){
                        app.globalData.alltxt = app.globalData.alltxt || '';
                          app.globalData.alltxt+=res.data
                          app.globalData.alltxt+="\n"
                          valid=true;
                          console.log(res.data)
                          console.log('读取成功')
                      },
                      fail(res) {
                          console.error(res)
                           },
                      complete(res){
                      }
                })
              }
                if(app.globalData.alltxt!='' && t==tempFilePaths.length){
                  wx.hideLoading()
                  wx.navigateTo({
                      url: '../input0/index',
                    })
                    tempFilePaths.length=0
                  }
        }

else if(Switch1Checked==true && clicked!=true){
    clicked=true;
    const fs = wx.getFileSystemManager();
    fs.readFile({
        filePath: "/pages/index/alltxt.mp3", //词表路径，后缀只为能够上传
        encoding: 'utf8',
        success(res){
            app.globalData.alltxt=res.data
            valid=true;
            console.log(res.data)
            console.log('读取成功')
            app.globalData.modechanged = true
            if(app.globalData.alltxt==null || app.globalData.alltxt==''){
                wx.showModal({
                    title: '提示',
                    content: '词表未加载',
                    showCancel: false // 取消按钮不可见
                  });
            }
            
            else{
            valid=true;
            wx.hideLoading()
            wx.navigateTo({
              url: '../input0/index',
            })
            }
        },
        fail(res) {
            wx.hideLoading()
            wx.showModal({
                title: '提示',
                content: '词表未加载',
                showCancel: false // 取消按钮不可见
              });
            console.error(res)
             }
      })
}
else if(Switch1Checked==false && clicked!=true){

    clicked=true;
    wx.downloadFile({
        //filePath: './',
        url: 'https://cb222.gitee.io/ali/dict',
        //console.log(FilePaths)
        success (res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          const fs = wx.getFileSystemManager()
          if (res.statusCode === 200) {
            let FilePaths = res.tempFilePath
            console.log(res.tempFilePath)
            fs.saveFile({
                tempFilePath: FilePaths,
                success : function(res){
                    let FilePaths2=res.savedFilePath
                    console.log(FilePaths2)
                    fs.readFile({
                        filePath: res.savedFilePath,
                        encoding: 'utf8',
                        success(res){
                            app.globalData.alltxt=res.data
                            valid=true;
                            console.log('读取成功')
                            app.globalData.modechanged = true
                            if(app.globalData.alltxt==null || app.globalData.alltxt==''){
                                wx.showModal({
                                    title: '提示',
                                    content: '词表未加载',
                                    showCancel: false // 取消按钮不可见
                                  });
                            }
                            
                            else{
                            valid=true;
                            wx.hideLoading()
                            wx.navigateTo({
                              url: '../input0/index',
                            })
                            }

                        },
                        fail(res) {
                            wx.showModal({
                                title: '提示',
                                content: '词表未加载',
                                showCancel: false // 取消按钮不可见
                              });
                            wx.hideLoading()
                       console.error(res)
                        }
                      })
                }
            })
          }
        },
        fail (res) { 
            console.log(res)
        }
      })
}
else if(app.globalData.alltxt!=null || app.globalData.alltxt!=''){
    valid=true;
    wx.hideLoading()
    wx.navigateTo({
        url: '../input0/index',
      })
    }

    else{
        wx.showModal({
            title: '提示',
            content: '词表未加载',
            showCancel: false // 取消按钮不可见
          });
    }
}

    },
    
      bindViewTap1() {
        const fs = wx.getFileSystemManager()
        fs.readFile({
            filePath: `${wx.env.USER_DATA_PATH}/day37`,
            encoding: 'utf-8',
            success(res){
                app.globalData.alltxt=res.data
                console.log('读取成功',res.data)

            },
            fail(res) {
           console.error(res)
            }
          })
      },



    bindViewTap4(){
        that=this
   new function(){
     var txt=[]
     txt.push("txt")
            wx.chooseMessageFile({
                count: 99,
                type: 'file',
                extension: txt,
                success (res) {
                  // tempFilePath可以作为img标签的src属性显示图片
                  tempFilePaths = res.tempFiles
                  app.globalData.modechanged = true
                  //app.globalData.alltxt=''

                    console.log(tempFilePaths[0]["path"])
                    //app.globalData.modechanged = true
                    getlocals=true;
                    app.globalData.alltxt=null
                    that.setData({ //that用于在success(res){}内的setData
                        getlocals: true,
                    })
                }
            })
        }

    },

    Switch1Change : function (e) {
        clicked=false;
        getlocals=false;
        this.setData({
            valid: false,
            getlocals: false
        })
        console.log(e.detail.value)
        app.globalData.modechanged == true
        if(e.detail.value == true){
            Switch1Checked = e.detail.value
            this.setData({
                Switchhint: "内置完整词表(近10000组)",
                Switch1Checked: e.detail.value,
            })
        }
            if(e.detail.value == false){
                Switch1Checked = e.detail.value
                this.setData({
                    Switchhint: "网络词表(近3000组)",
                   Switch1Checked: e.detail.value,
                })
        }
        return e.detail.value


    },

      onLoad() {
        wx.getSystemInfo({
            success: function(res) {
              //console.log(res.platform) // 可能的值有：android、ios、devtools等
              console.log(res)
               app.globalData.plat=res.platform
            }
          })  
          
        // @ts-ignore
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          })
        }
      },
      getUserProfile() {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log(res)
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      },



      getUserInfo(e) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e)
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
      },
      
    
  }


for (var i = 0; i <= 7; ++i) {
    (function (index) {
      pageData[`switch${index}Change`] = function (e) {
        wx.vibrateShort({
            type:"light"
        })
        if(index==1 || index ==2 || index==6){
            app.globalData.switch1Checked=false
            app.globalData.switch2Checked=false
            app.globalData.switch6Checked=false
            app.globalData.modechanged=true
            this.setData({
              switch1Checke : false,
              switch2Checke : false,
              switch6Checke: false
            })
            var obj = {}
            obj[`switch${index}Checke`] = e.detail.value
            this.setData(obj)
        }
        if(index==3 || index ==4 || index==7 ){
            app.globalData.switch3Checked=false
            app.globalData.switch4Checked=false
            app.globalData.switch7Checked=false
        //  app.globalData.modechanged=true
          this.setData({
            switch3Checke : false,
            switch4Checke : false,
            switch7Checke: false
          })
          var obj = {}
          obj[`switch${index}Checke`] = e.detail.value
          this.setData(obj)
      }

      if(index==5){
        app.globalData.switch5Checked=e.detail.value
    //  app.globalData.modechanged=true
      this.setData({
        switch5Checke : e.detail.value,
      })

  }
  if(index==0){
    app.globalData.audio=e.detail.value
//  app.globalData.modechanged=true
  this.setData({
    Audio : e.detail.value,
  })

}

        //console.log(`switch${index}发生change事件，携带值为`, e.detail.value);
        //app.globalData.modechanged=true

        //result=func
        //func();
        //console.log(result);

//    if (this.data.switch3Checke==true){
      //  app.globalData.switch3Checked = this.data.switch3Checke
  //      if (app.globalData.switch4Checked==true){
  //      app.globalData.switch4Checked = false
  //      this.setData({
  //          switch4Checke:false
  //      })
   // }
 //   }
  //  if (this.data.switch4Checke==true){
       // app.globalData.switch4Checked = this.data.switch4Checke
       app.globalData.switch1Checked = this.data.switch1Checke
       app.globalData.switch2Checked = this.data.switch2Checke
       app.globalData.switch3Checked = this.data.switch3Checke
       app.globalData.switch4Checked = this.data.switch4Checke
        app.globalData.switch5Checked = this.data.switch5Checke
        app.globalData.switch6Checked = this.data.switch6Checke
        app.globalData.switch7Checked = this.data.switch7Checke
        //app.globalData.audio = this.data.Audio
        console.log(this.data.switch1Checke)
        console.log(this.data.switch2Checke)
        console.log(this.data.switch3Checke)
        console.log(this.data.switch4Checke)
        console.log(this.data.switch5Checke)
        console.log(this.data.switch6Checke)
        console.log(this.data.switch7Checke)
    //    if (app.globalData.switch3Checked==true){
    //    app.globalData.switch3Checked = false
     //   this.setData({
     //       switch3Checke:false
     //   })
  //  }
  //  }

      }
    })(i)
  }


Page(pageData)
