
var app = getApp();
var showquestion;
var question0=[];
var answer0=[];
var en='';
var zh='';
var zhs=[];
var zhs2=[];
var ifright
var ifrightd
var scanf
var answer
//var question
var enter
var definition
var index=0
var lastTapTime
var lastCursor
var theCursor
var inputValue
var tmp=0
var count=0
var myanswer2
var enshade
var zhen
var enzh
var showtext;
var ysv
var hint='提示'
var thefocus=false
var thefocus2=false
var tmp2;
var thelinecolor="#333"
//var globaldata

var orders=[]
var showlast
var shownext
var indexs=[]
var then=0

var them=0

var max;
var Question0=[];
var Answer0=[];
var ifenter=false;

var orders2=[];
var ifrights=[];

var index0=[];
var index1=0;
//var constindexs=[];
var Index0=[];

var theanswer;

var keepIndex;

const innerAudioContext = wx.createInnerAudioContext({
    useWebAudioImplement: true // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
  });
Page({
    theshift: function (e) {
        wx.vibrateShort()
        this.setData({
            thefocus2: false,
            thefocus: true,
        })
    },

    theshift2: function (e) {
      wx.vibrateShort()
      this.setData({
          thefocus2: false,
          thefocus: false,
      })
  },

    handleInput: function (e) {

          //delay(100)

         var value = e.detail.value;
         //console.log(value); 
         //this.delay(100000)
        if(tmp!=1){
           inputValue=value //不能加var
          //  console.log(inputValue);
           // tmp2=1
            }
            else{
              //inputValue="\n"
                tmp=0
            }
            inputValue=inputValue
            //console.log(inputValue)
        if(enzh==true){
            if (/\n/.test(inputValue)){
                this.setData({
                enter : 1
                })
                //let value = e.detail.value.replace(/\n/g,'')
                //let value=e.detail.value.slice(0,-1)
                if(this.data.ifright==1) {
                    let value = '';
                    this.setData({
                        myanswer2 :value,
                        myanswer :value,
                        ifright: 0,
                        inputValue : "",
                        thelinecolor: "#ccc",
                        })
                        ifright = 0
                    this.updateText();
                   // this.lastCursor = 0;
                    return value //不能去掉
                }
                else if(ifright!=1 && inputValue=='\n' ){ 
                    //let value=inputValue.slice(0,-1)
                    //栏空时，回车显示答案
                    //console.log(answer0[index])  
                    ifenter=true;   
                    let value=theanswer    
            this.setData({
                myanswer : theanswer,
                myanswer2:  theanswer,
                ifright: 1,
                ifrightd : 1,
                thelinecolor: "black",
                hint: '继续'
                })
                inputValue=theanswer
                zhs2=[] //必须，不然delete后出现逗号
                //ifright=1;
                    //value=answer0[index];
                    return value;
                    }
                    else{
                      inputValue=e.detail.value.replace(/\n/,'');
                      //zhs=zhs2
    if (/…/.test(inputValue) ){
        //console.log(',') 
        inputValue=e.detail.value.replace(/…/,'...')
       }    

    if (inputValue.indexOf("，")){
    var eachword = inputValue.split("，");
    }
    else{
        var eachword=[];
    eachword.push(inputValue);
    }   
var zhslength=zhs.length
var count=0;
ifright=0;
this.setData({
ifright :0,
thelinecolor: "#ccc",
})
console.log(eachword);

        for (var n = 0; n < eachword.length; n++) {
            //console.log(zhslength);
              for ( var i = 0; i < zhslength; i++) {
               //console.log("++");
              if ( eachword[n]===(zhs[i]) ){
                console.log("++");
               console.log(eachword[n]);
               //zhs2[i]=''; 
               count=count+1;
            }


            
            }
        }
          console.log('count:',count);
            if (count==zhslength){
                //let value=inputValue
                wx.vibrateShort()
                console.log("right");
                this.setData({
                    ifright: 1,
                    thelinecolor: "black",
                    hint: '继续',
                })
                return inputValue; 
                //ifright=1;
                //this.lastCursor = this.theCursor;
             }
            else if(count>0 && ifright==2){
                wx.vibrateShort({
                    type:"light"
                }
                )
            let value=inputValue;
            inputValue=value
            //this.lastCursor = this.theCursor;
            console.log(value)

                this.setData({
                    myanswer: value,
                    myanswer2: value,
                })
            return value
            }
            else{
                
                this.setData({
                    ifright: 0,
                    thelinecolor: "#ccc",
                    hint: '提示',
                })
            }
        
        this.setData({
            enter : 0
            })

  //  scanf = e.detail.value

                        this.setData({
                            myanswer : '',
                            myanswer2 : '',
                            lastCursor : 0,
                            ifright: 0,
                            ifrightd: 0,
                            hint: '提示',
                        })
                        //this.data.myanswer='',
                        //ifright=0;
                        for (var n=0;n<zhs.length;++n){
                            zhs2[n]=zhs[n];
                        }
        
                        this.lastCursor = 0;
                        return 
                    }
                }
                else{
                    if ((/[a-zA-Z]/.test(inputValue))){

                        inputValue=inputValue.replace( /[a-zA-Z]+/g, '');
                
                    }
                    value=inputValue
                    ifenter=false;
                    //this.lastCursor = this.theCursor;
                    this.setData({
                        myanswer: value,
                        myanswer2: value
                        })
                        //inputValue=value
                        this.theCursor = e.detail.cursor;
                        //setTimeout(this.bindKeyInput, 400)
                        this.bindKeyInput(e);
                        this.lastCursor = this.theCursor;
                        //return inputValue;
                }
        }
        else if(zhen==true){
            if (/\n/.test(inputValue)){
                //console.log(this.data.ifrightd)
                this.setData({
                enter : 1
                })
                
                // =e.detail.value.slice(0,-1)
                //let value = e.detail.value.replace(/\n/g,'')
        
                if(this.data.ifright==1) {
                    value = '';
                    this.setData({
                        myanswer:value,
                        myanswer2:value,
                        ifright: 0,
                        inputValue : "",
                        thelinecolor: "#ccc",
                        hint: '提示',
                        })
                        ifright = 0
                    lastCursor=0;
                    this.updateText();
                    this.lastCursor = 0;
                    return//不能去掉
                }
                else if(ifright!=1 && inputValue == '\n'){  //栏空时，回车显示答案
                    let value=theanswer
                    ifenter=true; 
                    this.setData({
                        ifright: 1,
                        ifrightd : 1,
                        thelinecolor: "black",
                        myanswer: theanswer,
                        myanswer2: theanswer,
                        hint: '继续'
                        })
                    ifright=1;
                    return value;
                    }
                    else{
                      ifenter=false;
                        value='';
                        this.setData({
                            myanswer : '',
                            myanswer2 : '',
                            lastCursor : 0,
                            ifright: 0,
                            thelinecolor: "#ccc",
                            hint: '提示',
                        })
                        this.data.myanswer='',
                        ifright=0;
                        this.lastCursor = 0;
                        return 
                    }
                 //   console.log(value)
            }
            else{
              ifenter=false;
                //this.lastCursor = this.theCursor;
                    //this.lastCursor = this.theCursor;
                    this.theCursor = e.detail.cursor;
                    //inputValue=value
                    //setTimeout(this.bindKeyInput, 400)
                    this.bindKeyInput(e)
                    this.lastCursor = this.theCursor;
                    return value;
            }
        }

        this.theCursor = e.detail.cursor
        //this.bindKeyInput(e)
        this.lastCursor = this.theCursor;
        return inputValue; 
    },

    splitzh(thezh){
        theanswer=thezh
        zhs.length=0;
        zhs2.length=0;
        var eachzhs = thezh.split("，");
        eachzhs.forEach(function(zh){
            zhs.push(zh);
            zhs2.push(zh);
            console.log(zh);
            })
        },

        spliten(theen){
            theanswer=theen
            this.setData({
                enshade: '',
            })
            let shade='';
           // console.log(app.globalData.plat)
           //console.log(theen);
            
           if(app.globalData.plat=="android"){
            for(var i = 0 ; i < theen.length ;  ++i){
            //shade+="–"
            //shade+="−"    
            shade+="−"
        }
    }
    else {
        for(var i = 0 ; i < theen.length ;  ++i){ 
            shade+="-"
    }
}
            this.setData({
                enshade: shade,
            })
           // console.log(enshade)
            },
       
       showexample :  function(){
        wx.vibrateShort()
                wx.request({
                  url: `https://www.keyboarder.xyz/define?theword=${en}&type=v`,
                  success: (res) => {
                    var datav=[]
                    //console.log(res.data)
                    const highlightedText = `<text style="color: red;">${en}</text>`;
                    const line = res.data.split("\n");
                    for (let n = 0; n < line.length; n++) {
                    var textParts = line[n].split(en);
                    //var datav=[]
                    if(line[n].indexOf("|")!=true && line[n]!=''){
                        var colord="green"
                        }
                        else{
                        var colord="black"
                        }
                    for (let i = 0; i < textParts.length; i++) {
                      datav.push({
                        type: 'text',
                        text: textParts[i],
                      });
                      if (i < textParts.length - 1) {
                        datav.push({
                            name: 'span',
                            attrs: {
                              style: `color: ${colord};`
                            },
                            children: [{
                              type: 'text',
                              text: en
                            }],
                        });
                    }
                }
                if(line[n].indexOf("|")!=true && line[n]!=''){
                datav.push({
                    name: 'div',
                    attrs: {
                      class: 'div_class',
                      style: 'width: 100%;height: 1px;background-color: #ccc;'
                    },
                  })
                }
                    //var regex = new RegExp(en, 'gi');
                    //console.log(regex)
                    //const data1 = res.data.replace(regex, `<span style="color: yellow;">${en}</span>`); // 将匹配到的文本高亮显示;
                    }
                   // console.log(datav)
                    this.setData({
                        showtext : datav,
                        ysv: 'v'
                    })
                  },
                  fail: (err) => {
                    console.log('请求失败：', err)
                  }
                })
 
            },     
            showdefinition :  function(){
                wx.vibrateShort()
            wx.request({
                  url: `https://www.keyboarder.xyz/define?theword=${en}&type=y`,
                  success: (res) => {
                    var datay=[]
                    //console.log(res.data)
                    const line = res.data.split("\n");
                    for (let n = 0; n < line.length; n++) {
                    var textParts = line[n].split(en);
                    //var datav=[]
                    if(line[n].indexOf("|")!=true && line[n]!=''){
                        var colord="green"
                        }
                        else{
                        var colord="black"
                        }
                    for (let i = 0; i < textParts.length; i++) {
                      datay.push({
                        type: 'text',
                        text: textParts[i],
                      });
                      if (i < textParts.length - 1) {
                        datay.push({
                            name: 'span',
                            attrs: {
                              style: `color: ${colord};`
                            },
                            children: [{
                              type: 'text',
                              text: en
                            }],
                        });
                    }
                }
//    <div class="element" style="width: 100%;height: 2px;background-color: #ccc;" ></div>
if(line[n].indexOf("|")!=true && line[n]!=''){
                datay.push({
                    name: 'div',
                    attrs: {
                      class: 'div_class',
                      style: 'width: 100%;height: 1px;background-color: #ccc;'
                    },
                  })
                }
                    //var regex = new RegExp(en, 'gi');
                    //console.log(regex)
                    //const data1 = res.data.replace(regex, `<span style="color: yellow;">${en}</span>`); // 将匹配到的文本高亮显示;
                    }
                    this.setData({
                        showtext : datay,
                        ysv: 'y'
                    })
                  },
                  fail: (err) => {
                    console.log('请求失败：', err)
                  }
                })
            },       

    getfromio(){
        this.lastCursor = 0
        this.setData({
            thefocus2: false,
            thefocus: true,
        })
        //console.log(app.globalData.switch2Checked);
        if((app.globalData.modechanged == true || app.globalData.question==null)){
        index=0;
            enzh=false
            zhen=false
        //console.log('globalData.switch1Checked',app.globalData.switch1Checked);
        //console.log('globalData.switch2Checked',app.globalData.switch2Checked);
        question0.length=0;
        Question0.length=0;
        answer0.length=0;
        Answer0.length=0;
        index0.length=0;
      var linen=-1
        var lines = app.globalData.alltxt.split("\n");
    lines.forEach(function(line){
      if(line.indexOf("\t")!=-1){
      linen=linen+1
        var words=line.split("\t");
        //answer0.push(words[words.length-1]);
        if(app.globalData.switch1Checked==true && app.globalData.switch2Checked==false){
            //console.log('模式1');
            answer0.push(words[0]);
            index0.push(linen);
            question0.push(words[words.length-1]);
            //console.log(words[words.length-1]);
        }
        else if (app.globalData.switch1Checked==false && app.globalData.switch2Checked==true){
           // console.log('模式2');
           index0.push(linen);
        question0.push(words[0]);
        answer0.push(words[words.length-1]);
        //console.log(words[words.length-1]);
        }
        else if (app.globalData.switch6Checked==true){
            //console.log('模式3');
            index0.push(linen*2);
            index0.push(linen*2+1);
            question0.push(words[0]);
            question0.push(words[words.length-1]);
            answer0.push(words[words.length-1]);
            answer0.push(words[0]);
        }
      }
      })
    Index0=index0.concat()
    Question0=question0.concat();
    Answer0=answer0.concat();
    this.setData({
        question0: question0,
    })
    max=question0.length
    if(app.globalData.switch7Checked == true){
        index=index0[Math.round(Math.random()*(question0.length-1))];
        console.log('rindex',index);
    }

   // console.log('app.globalData.switch3Checked',app.globalData.switch3Checked)
   // console.log('app.globalData.switch4Checked',app.globalData.switch4Checked)
        if((app.globalData.switch4Checked==true && app.globalData.switch3Checked==false)){
        index=index0[max-1]
    }
}

console.log("them: ",them)
if (them>0 || keepIndex==true){
    Index=index
    //keepIndex=false
    //console.log("222");
  }
else if(them==0){
    var Index=index0[index]
    //console.log("111");
    } 
// console.log("question",question0)
        app.globalData.question = Question0[Index];
        console.log(app.globalData.question)
        if(app.globalData.switch2Checked==true && app.globalData.switch1Checked!=true){
        this.splitzh(Answer0[Index]);
        enzh=true
        zhen=false
        zh=Answer0[Index];
        en=Question0[Index];
        }
        else if(app.globalData.switch1Checked==true && app.globalData.switch2Checked!=true){
            zhen=true
            enzh=false
        this.spliten(Answer0[Index]);
        en=Answer0[Index];
        zh=Question0[Index];
    }
    else if (app.globalData.switch6Checked==true){
        if(Index%2==1){
            zhen=true
            this.spliten(Answer0[Index]);
            en=Answer0[Index];
            zh=Question0[Index];
        }
        else if(Index%2==0){
            enzh=true
            this.splitzh(Answer0[Index]);
            zh=Answer0[Index];
            en=Question0[Index];
        }
    }

    if((app.globalData.modechanged == true || app.globalData.question==null)){
    then=then+1
    orders.push(question0[index])
    orders2.push(answer0[index])
    indexs.push(index0[index])
    app.globalData.modechanged = false
    }

    if(app.globalData.audio==true){
        if(enzh==true){
          innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Question0[Index]}&type=2`
          innerAudioContext.play()
        }
        else if(zhen==true){
            innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Answer0[Index]}&type=2`
            innerAudioContext.play() 
        }
    }

    //this.theshift();
    this.setData({
        max: max,
        index: index+1,
        hint: '提示',
        ifrightd: 0,
        ifright: 0,
        enter: 0,
        myanswer: '',
        myanswer2: '',
        showquestion:getApp().globalData.question,
    });
    },



    lastText: function() {
        ifenter=false
        // 获取text组件的实例
        if(then>1){

        wx.vibrateShort()
        enzh=false
        zhen=false
        zhs.length=0;
        zhs2.length=0;
        this.setData({
            hint: '提示',
            showtext: '',
            enshade: '',
            ysv: '',
            lastCursor : 0,
            tmp:0,
            //inputValue: '',
            //myanswer: '',
        })
        this.lastCursor = 0
        then=then-1
        //app.globalData.question = orders[then-1];
       // if(indexs[then]){
        //indexs[then-1]
        
        ifenter=false;
index=indexs[then-1]
//index_=index0.indexOf(index);
them=them+1
        //}
        console.log("index:",index)

        if(ifrights[then-1] == true){
        console.log("扩大范围")

        if(app.globalData.audio==true){
            if(index%2==0){
                 innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Question0[index]}&type=2`
                 innerAudioContext.play()
            }
            else if(index%2==1){
             innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Answer0[index]}&type=2`
             innerAudioContext.play()
            }
         }

            app.globalData.question = Question0[index];

            this.setData({
              question0:question0,
                max: max,
                index: index+1,
                showlast:orders[then-2],
                shownext: orders[then],
                ifrightd: 0,
                ifright: 0,
                hint: '提示',
                enter: 0,
                myanswer: '',
                myanswer2: '',
                showquestion:getApp().globalData.question,
            });
            if(then==1){
                this.setData({
                    showlast: '',
                })
            }
    
            if(app.globalData.switch1Checked==false && app.globalData.switch2Checked==true){
                this.splitzh(Qnswer0[index]);
                enzh=true;
                zh=Qnswer0[index];
                en=Question0[index];
                }
                else if(app.globalData.switch1Checked==true && app.globalData.switch2Checked==false){
                this.spliten(Answer0[index]);
                zhen=true;
                zh=Question0[index];
                en=Answer0[index];
                }
                else if (app.globalData.switch6Checked==true){
                    if(index%2==0){
                        this.splitzh(Answer0[index]);
                        enzh=true
                        zh=Answer0[index];
                        en=Question0[index];
                     //   console.log("zh:",zh)
                    }
                    else if(index%2==1){
                        this.spliten(Answer0[index]);
                        zhen=true
                        zh=Question0[index];
                        en=Answer0[index];
                      //  console.log("en:",en)
                    }
                }
        }

else{
        if(app.globalData.switch5Checked==true  ){
            console.log("回退+1")     
          if(index0.indexOf(index)==-1 && ifrights[then-1]==false ){



            var constarray = [];
            
            var filteredArr1 = []
            var filteredArr1 = answer0.filter(function(item) {
              return item !== '' && item !== null && item !== undefined;
            });
          //  console.log("filter",filteredArr1);
            answer0=filteredArr1


          var filteredArr2 = []
          var filteredArr2 = question0.filter(function(item) {
            return item !== '' && item !== null && item !== undefined;
          });
       //   console.log("filter",filteredArr2);
          question0=filteredArr2

            for (let i = 0; i < index0.length; i++) {
              if (index0[i] != null) {
                constarray.push(index0[i])
              }
             // index0.splice(i,0,"")
            }
            for (let i = 0; i < Index0.length-1; i++) {
              if (constarray[i] == i) {
                continue;
              }
              else{
                constarray.splice(i,0,null)
                answer0.splice(i,0,null)
                question0.splice(i,0,null)
              }
             // index0.splice(i,0,"")
            }

            console.log("cons",constarray)            
            // 填充空元素
            console.log("ans",answer0)  

          //  for(var n=max;n>=index;--n){
             // question0[n+1]=question0[n]
            //  answer0[n+1]=answer0[n]
              //constarray[n+1]=constarray[n]
           // }
          //  console.log("index:",index)
            //console.log("index_:",index_)
            constarray[index]=index
            index0=constarray.concat()
            console.log("index0:",index0)

            question0[index]=Question0[index]
            answer0[index]=Answer0[index]

            var filteredArr = []
            var filteredArr = index0.filter(function(item) {
              return item !== '' && item !== null && item !== undefined;
            });
            
            index0=filteredArr
            console.log("index0:",index0);

            var filteredArr1 = []
            var filteredArr1 = answer0.filter(function(item) {
              return item !== '' && item !== null && item !== undefined;
            });
            console.log("filter",filteredArr1);
            answer0=filteredArr1


          var filteredArr2 = []
          var filteredArr2 = question0.filter(function(item) {
            return item !== '' && item !== null && item !== undefined;
          });
          console.log("filter",filteredArr2);
          question0=filteredArr2


            //Index0[index]=index
            console.log(index0)
            //console.log(Index0)
            //question0[index]=orders[then-1]

            //answer0[index]=orders2[then-1]
            
           // console.log(question0[index])
           // console.log(question0[index])
           // console.log(question0[index])
            console.log(then-1)
          max=max+1
          //ifrights.pop()
          //orders.pop()
          //orders2.pop()
          ifrights[then-1] == true
          }
          else if(ifrights[then-1] == true){
           //ifrights.pop()
           // orders.pop()
           // orders2.pop()
           //ifrights[then-1]
           //ifrights[then-1] == false
            max=max
          }
          else if(index0.indexOf(index)!=-1){

          }
        }
        app.globalData.question = Question0[index];

        this.setData({
          question0:question0,
            max: max,
            index: index+1,
            showlast:orders[then-2],
            shownext: orders[then],
            ifrightd: 0,
            ifright: 0,
            hint: '提示',
            enter: 0,
            myanswer: '',
            myanswer2: '',
            showquestion:getApp().globalData.question,
        });
        if(then==1){
            this.setData({
                showlast: '',
            })
        }

        if(app.globalData.switch1Checked==false && app.globalData.switch2Checked==true){
            this.splitzh(Answer0[index]);
            enzh=true;
            zh=Answer0[index];
            en=Question0[index];
            }
            else if(app.globalData.switch1Checked==true && app.globalData.switch2Checked==false){
            this.spliten(Answer0[index]);
            zhen=true;
            zh=Question0[index];
            en=Answer0[index];
            }
            else if (app.globalData.switch6Checked==true){
                if(index%2==0){
                    this.splitzh(Answer0[index]);
                    enzh=true
                    zh=Answer0[index];
                    en=Question0[index];
                }
                else if(index%2==1){
                    this.spliten(Answer0[index]);
                    zhen=true
                    zh=Question0[index];
                    en=Answer0[index];
                }
            }

            if(app.globalData.audio==true){
                if(enzh==true){
                  innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Question0[index]}&type=2`
                  innerAudioContext.play()
                }
                else if(zhen==true){
                    innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Answer0[index]}&type=2`
                    innerAudioContext.play() 
                }
            }

    }


}
    },



updatetheText(e){
    //var theindex;
    //this.theshift2()
    ifenter=false
    console.log(e.detail.value)
    //theindex=e.detail.value
    if( e.detail.value != index  ){
        zhen=false;
        enzh=false;
        enshade=null;
        this.setData({
            enshade:null,
        })
        index=parseInt(index0[e.detail.value])
        console.log(index)

       app.globalData.question = Question0[index];
       if(app.globalData.switch1Checked==false && app.globalData.switch2Checked==true){
       this.splitzh(Answer0[index]);
       enzh=true;
       zh=Answer0[index];
       en=Question0[index];
       }
       else if(app.globalData.switch1Checked==true && app.globalData.switch2Checked==false){
       this.spliten(Answer0[index]);
       zhen=true;
       zh=Question0[index];
       en=Answer0[index];
       }
       else if (app.globalData.switch6Checked==true){
           if(index%2==0){
               this.splitzh(Answer0[index]);
               enzh=true
               zh=Answer0[index];
               en=Question0[index];
           }
           else if(index%2==1){
               this.spliten(Answer0[index]);
               zhen=true
               zh=Question0[index];
               en=Answer0[index];
           }
       }
       if(them<=0){
        then=then+1
       orders.push(Question0[index])
       orders2.push(Answer0[index])
       ifrights.push(true)
       //constindexs.push(Index0.indexOf(index0[index]))
       indexs.push(index)
       }
       else{
        //then=then+1
           indexs[then-1]=index
           orders[then-1]=Question0[index]
           orders2[then-1]=Answer0[index]
       }
       //var value=this.data.thearea;
       //getApp().globalData.question
       //console.log(value)
       innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${en}&type=2`
       innerAudioContext.play()
       this.setData({

           showtext: '',
           index: index+1,
           //shownext : "",
           showlast:orders[then-2],
           ifrightd: 0,
           ifright: 0,
           hint: '提示',
           enter: 0,
           myanswer: '',
           myanswer2: '',
           showquestion:getApp().globalData.question,
       });
    }
    var that=this
    new function(){
        that.setData({
            thefocus: true,
            thefocus2 :false
        })
    }
    //this.theshift()
},

    updateText: function() {
        // 获取text组件的实例
        //var App=app
        keepIndex=false
        enzh=false
        zhen=false
        zhs.length=0;
        zhs2.length=0;
        this.setData({
            hint: '提示',
            showtext: '',
            enshade: '',
            ysv: '',
            lastCursor : 0,
            tmp:0,
            //inputValue: '',
            //myanswer: '',

        })
        //this.tmp=0

        if(them>0){
            wx.vibrateShort()
            this.lastCursor = 0
            then=then+1
           // if(indexs[then]){
          //  indexs[then-1]
    index=indexs[then-1]

    them=them-1
    if(them<=1){
      keepIndex=true
    }
    else{
      keepIndex=false
    }

            //}
            if(app.globalData.switch5Checked==true && ifenter==false && ifrights[then-1]==true){

            }
            else if(app.globalData.switch5Checked==true && ifenter==true && ifrights[then-1]==false){
                ifrights[then-1] == true
            }
            else{
              ifenter=false;
             // orders.pop()
             // orders2.pop()
              this.setData({
                question0:question0,
              })
            }
            app.globalData.question = Question0[index];
            this.setData({
                max: max,
                index: index+1,
                shownext: orders[then],
                showlast:orders[then-2],
                ifrightd: 0,
                ifright: 0,
                hint: '提示',
                enter: 0,
                myanswer: '',
                myanswer2: '',
                showquestion: app.globalData.question,
            });
if(app.globalData.audio==true){
           if(index%2==0){
                innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Question0[index]}&type=2`
                innerAudioContext.play()
           }
           else if(index%2==1){
            innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Answer0[index]}&type=2`
            innerAudioContext.play()
           }
        }
            if (them==0){
                this.setData({
                    shownext : "",
                })
            }
            

            if(app.globalData.switch1Checked==false && app.globalData.switch2Checked==true){
                this.splitzh(Answer0[index]);
                enzh=true;
                zh=Answer0[index];
                en=Question0[index];
                }
                else if(app.globalData.switch1Checked==true && app.globalData.switch2Checked==false){
                this.spliten(Answer0[index]);
                zhen=true;
                zh=Question0[index];
                en=Answer0[index];
                }
                else if (app.globalData.switch6Checked==true){
                    if(index%2==0){
                        this.splitzh(Answer0[index]);
                        enzh=true
                        zh=Answer0[index];
                        en=Question0[index];
                    }
                    else if(index%2==1){
                        this.spliten(Answer0[index]);
                        zhen=true
                        zh=Question0[index];
                        en=Answer0[index];
                    }
                }

        }
        else{
        them=0
        then=then+1
        this.lastCursor = 0
        //console.log("ifenter:",ifenter)
        ifrights.push(ifenter)
        if(app.globalData.switch5Checked==true && ifenter==false){

          if(max>1  ){
            console.log("delete")
          for(var n=index;n<max;++n){
            question0[n]=question0[n+1]
            answer0[n]=answer0[n+1]
            index0[n]=index0[n+1]
          }
          //index0.splice(index,1)
          question0.pop()
          answer0.pop()
          index0.pop()
          //Index0[index]=""
          //console.log("Index:",Index0)
          this.setData({
            question0:question0,
          })
          max=max-1
        }
        else{
          var that=this;
          this.setData({
            shownext: '',
            showlast: '',
            showtext: '',
            index: 0,
            max: 0
          })
          wx.showModal({
            title: '通关了',
            content: '再来一遍',
            success (res) {
              if (res.confirm) {
                app.globalData.modechanged=true
                orders=[];
                showlast='';
                shownext='';
                indexs=[];
                then=0;
                them=0;
                Question0=[];
                Answer0=[];
                ifenter=false;
                orders2=[];
                ifrights=[];
                index0=[];
                index1=0;
                Index0=[];
                theanswer='';
                keepIndex=false;
                that.getfromio();
                this.theshift();
                console.log('用户点击确定')
                return 
              } else if (res.cancel) {
                app.globalData.modechanged=true
                wx.navigateBack({
                  delta: 1
                })
                console.log('用户点击取消')
              }
            }
          })
          return ;
        }
        }
        else if(app.globalData.switch5Checked==true && ifenter==true){
          
        }
if((app.globalData.switch3Checked==true && app.globalData.switch4Checked ==false)){
  if(app.globalData.switch5Checked==true && ifenter==false && them<=0){
        index = index % max ;
        console.log("bubian");
  }
  else if(app.globalData.switch5Checked==true && ifenter==true && them<=0 ){
    index1=(index+1)%max
    index=index1
    //index = index0[(index1 ) % max];
  }
  else{
    index1=(index+1)%max
    index=index1
    //index = index0[(index1) % max];
  }
       // zh=question0[index];
       // en=answer0[index];
}
else if(app.globalData.switch4Checked ==true && app.globalData.switch3Checked == false){
    console.log('index',index);
    if(index<=0){
      index=max-1
  }
  else{
    index=(index-1)%max
  }

  console.log('index',index);
    //index = question0.length-index;
}
else if(app.globalData.switch7Checked == true){
    index=Math.round(Math.random()*(max-1));
    console.log('rrndex',index);
}
ifenter=false;
//console.log(orders)
var Index=index0[index]
app.globalData.question = Question0[Index];
         console.log(app.globalData.question)
         //select("#text");
        // 设置text组件的内容为当前单词
        //text.setText(words[index]);
        // 更新index变量，如果超过数组长度，就从头开始

        if(app.globalData.switch1Checked==false && app.globalData.switch2Checked==true){
        this.splitzh(Answer0[Index]);
        enzh=true;
        zh=Answer0[Index];
        en=Question0[Index];
        }
        else if(app.globalData.switch1Checked==true && app.globalData.switch2Checked==false){
        this.spliten(Answer0[Index]);
        zhen=true;
        zh=Question0[Index];
        en=Answer0[Index];
        }
        else if (app.globalData.switch6Checked==true){
            if(index0[index]%2==0){
                this.splitzh(Answer0[Index]);
                enzh=true
                zh=Answer0[Index];
                en=Question0[Index];
            }
            else if(index0[index]%2==1){
                this.spliten(Answer0[Index]);
                zhen=true
                zh=Question0[Index];
                en=Answer0[Index];
            }
        }
        orders.push(Question0[Index])
        indexs.push(index0[index])
        //constindexs.push(Index0.indexOf(index0[index]))
        orders2.push(Answer0[Index])
        if(app.globalData.audio==true){
        if(enzh==true){
          innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Question0[Index]}&type=2`
          innerAudioContext.play()
        }
        else if(zhen==true){
            innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${Answer0[Index]}&type=2`
            innerAudioContext.play() 
        }
    }
        //var value=this.data.thearea;
        //getApp().globalData.question
        //console.log(value)
        this.setData({
            max:max,
            index: index+1,
            shownext : "",
            showlast:orders[then-2],
            ifrightd: 0,
            ifright: 0,
            hint: '提示',
            enter: 0,
            myanswer: '',
            myanswer2: '',
            showquestion:getApp().globalData.question,
        });
    }
      },

    onLoad: function(){
        //console.log('app.globalData.switch2Checked',app.globalData.switch2Checked);
        wx.hideLoading()
        
        if((app.globalData.modechanged == true || app.globalData.question==null)){
        this.theshift();
        then=0
        indexs=[]
        orders=[]
        orders2=[]
        index0=[]
        Index0=[]
        them=0
        theanswer=null
        }
        else{
            this.theshift();
            this.setData({

                question0: question0,
                shownext: orders[then],
                showlast: orders[then-2]
            })
        }
        let systemInfo = wx.getSystemInfoSync()
        this.systemInfo = systemInfo
        this.getfromio();
        //this.updateText();
        wx.onKeyboardHeightChange(res => {
            if (res.height>0){
            this.setData({
                keyboardHeight1: res.height+'px',  
            })
        }
        else{
            this.setData({
                keyboardHeight1: 0,  
            })
        }
          });
    },


    onShow: function() {
        // 在切换回前台时执行相应的操作
        this.setData({
            thefocus2: false,
            thefocus: true,
        })
      },

  data: {
    thelinecolor: "#ccc",
    focus: false,
    inputValue: '',
    keyboardHeight1: '0',  
},


  inputWord: function(e) {
    this.setData({
      word: e.detail.value,
    })
  },
  areaconfirm: function(e){
      //this.theshift();
      inputValue=e.detail.value
if(enzh==true){
    this.setData({
        //thefocus: true,
        enter : 1
        })
        //let value = e.detail.value.replace(/\n/g,'')
        //let value=e.detail.value.slice(0,-1)
        if(this.data.ifright==1) {
            let value = '';
            this.setData({
              myanswer2 :value,
              myanswer :value,
              ifright: 0,
              inputValue : "",
              thelinecolor: "#ccc",
              })
                ifright = 0
            this.updateText();
            this.lastCursor = 0;
            return value //不能去掉
        }
        else if(ifright!=1 && inputValue==''){ 
            //let value=inputValue.slice(0,-1)
            //栏空时，回车显示答案
            //console.log(answer0[index])   
            ifenter=true 
            //theanswer      
            this.setData({
              myanswer : theanswer,
              myanswer2:  theanswer,
              ifright: 1,
              ifrightd : 1,
              thelinecolor: "black",
              hint: '继续'
              })
              zhs2=[]
        //ifright=1;
            //value=answer0[index];
            return ;
            }
            else{
                ifenter=false;
                this.setData({
                    myanswer : '',
                    myanswer2 : '',
                    lastCursor : 0,
                    ifright: 0,
                    thelinecolor: "#ccc",
                    hint: '提示',
                })
                //this.data.myanswer='',
                //ifright=0;
                for (var n=0;n<zhs.length;++n){
                    zhs2[n]=zhs[n];
                }
                var eachword=[];
                      inputValue=e.detail.value.replace(/\n/,'');
                      //zhs=zhs2
    if (/…/.test(inputValue) ){
        //console.log(',') 
        inputValue=e.detail.value.replace(/…/,'...')
       }    

    if (inputValue.indexOf("，")){
    var eachword = inputValue.split("，");
    }
    else{
        var eachword=[];
    eachword.push(inputValue);
    }                   
                var zhslength=zhs.length
                var count=0;
                ifright=0;
                inputValue=e.detail.value.replace(/\n/,'');
                //zhs=zhs2
if (/…/.test(inputValue) ){
  //console.log(',') 
  inputValue=e.detail.value.replace(/…/,'...')
 }    
let value=inputValue
if (inputValue.indexOf("，")){
var eachword = inputValue.split("，");
}
else{
  var eachword=[];
eachword.push(inputValue);
}   
var zhslength=zhs.length
var count=0;
ifright=0;
this.setData({
ifright :0,
thelinecolor: "#ccc",
})
console.log(eachword);

  for (var n = 0; n < eachword.length; n++) {
      //console.log(zhslength);
        for ( var i = 0; i < zhslength; i++) {
         //console.log("++");
        if ( eachword[n]===(zhs[i]) ){
          console.log("++");
         console.log(eachword[n]);
         //zhs2[i]=''; 
         count=count+1;
      }


      
      }
  }
    console.log('count:',count);
      if (count==zhslength){
          //let value=inputValue
          wx.vibrateShort()
          console.log("right");
          this.setData({
              ifright: 1,
              thelinecolor: "black",
              hint: '继续',
              myanswer: value,
              myanswer2: value,
          })
          return value; 
          //ifright=1;
          //this.lastCursor = this.theCursor;
       }
      else if(count>0 && ifright==2){
          wx.vibrateShort({
              type:"light"
          }
          )
      let value=inputValue;
      inputValue=value
      //this.lastCursor = this.theCursor;
      console.log(value)

          this.setData({
              myanswer: value,
              myanswer2: value,
          })
      return value
      }
      else{
          
          this.setData({
              ifright: 0,
              thelinecolor: "#ccc",
              hint: '提示',
          })
      }
  
  this.setData({
      enter : 0
      })

//  scanf = e.detail.value

                  this.setData({
                      myanswer : '',
                      myanswer2 : '',
                      lastCursor : 0,
                      ifright: 0,
                      ifrightd: 0,
                      hint: '提示',
                  })
                  //this.data.myanswer='',
                  //ifright=0;
                  for (var n=0;n<zhs.length;++n){
                      zhs2[n]=zhs[n];
                  }
  
                  this.lastCursor = 0;
                  return 
              }

            }
else if(zhen==true){
    this.setData({
        enter : 1
        })
        let value// =e.detail.value.slice(0,-1)
        //let value = e.detail.value.replace(/\n/g,'')

        if(this.data.ifright==1) {
            value = '';
            this.setData({
                myanswer2:value,
                ifright: 0,
                thelinecolor: "#ccc",
                hint: '提示',
                })
                ifright = 0
            lastCursor=0;
            this.updateText();
            this.lastCursor = 0;
            return//不能去掉
        }
        else if(ifright!=1  && inputValue==''){  //栏空时，回车显示答案
            this.setData({
                ifright: 1,
                ifrightd : 1,
                thelinecolor: "black",
                myanswer: theanswer,
                hint: '继续'
                })
            ifenter=true;  
            value=theanswer;
            ifright=1;
            }
            else{
                ifenter=false;
                value='';
                this.setData({
                    myanswer : '',
                    myanswer2 : '',
                    lastCursor : 0,
                    ifright: 0,
                    thelinecolor: "#ccc",
                    hint: '提示',
                })
                this.data.myanswer='',
                ifright=0;
                this.lastCursor = 0;
                return 
            }
         //   console.log(value)
            //this.lastCursor = this.theCursor;
            this.setData({
                myanswer2: value
                })
        return value
}
  },

  bindKeyInput: function (e) {
    this.setData({
//      inputValue: e.detail.value,
//      tmp: e.detail.value
    })
   // console.log('last',this.lastCursor);
   // console.log('now',this.theCursor);
    inputValue=inputValue
//console.log('enzh',enzh)
//console.log('zhen',zhen)
if(enzh==true){
    if (/…/.test(inputValue) ){
        //console.log(',') 
        inputValue=e.detail.value.replace(/…/,'...')
       }    

    if (inputValue.indexOf("，")){
    var eachword = inputValue.split("，");
    }
    else{
        var eachword=[];
    eachword.push(inputValue);
    }
  console.log(this.lastCursor)
 
    if(this.lastCursor===undefined || this.lastCursor==0 || this.theCursor==undefined || this.theCursor - this.lastCursor > -2  ){
        if(this.theCursor == this.lastCursor || this.theCursor - this.lastCursor == -1){
            //ifrightd = 0
            
        }
        if (/ /.test(inputValue) ){
           //console.log(',') 
            let value=e.detail.value.replace(/ /,'，')
            //this.lastCursor = this.theCursor;
            this.setData({
            myanswer: value,
            myanswer2: value
            })
            inputValue=value;
            return value
        }    

var zhslength=zhs.length
count=0;
ifright=0;
this.setData({
ifright :0,
thelinecolor: "#ccc",
})
console.log(eachword);

        for (var n = 0; n < eachword.length; n++) {
            //console.log(zhslength);
              for ( var i = 0; i < zhslength; i++) {
               //console.log("++");
              if ( eachword[n]===(zhs[i]) ){
                console.log("++");
               //console.log(i);
               //zhs2[i]=''; 
               count=count+1;
            }

            if ( eachword[n]==(zhs2[i]) ){
               console.log("+++++");
                ifright=2;
               //console.log(i);
               zhs2.splice(i,1);
               //count=count-1;
            }

            
            }
        }
          //console.log('count:',count);
            if (count==zhs.length && ifright==2){
                //let value=inputValue
                wx.vibrateShort()
                console.log("right");
                this.setData({
                    ifright: 1,
                    thelinecolor: "black",
                    hint: '继续',
                })
                return inputValue; 
                //ifright=1;
                //this.lastCursor = this.theCursor;
             }
            else if(count>0 && ifright==2){
                wx.vibrateShort({
                    type:"light"
                }
                )
            let value=inputValue.concat("，");
            inputValue=value
            //this.lastCursor = this.theCursor;
            console.log(value)

                this.setData({
                    myanswer: value,
                    myanswer2: value,
                })
            return value
            }
            else{
                
                this.setData({
                    ifright: 0,
                    thelinecolor: "#ccc",
                    hint: '提示',
                })
            }
        
        this.setData({
            enter : 0
            })

  //  scanf = e.detail.value
}
else{

    this.setData({
        myanswer: inputValue,
        myanswer2: inputValue,
    })
    return inputValue
}
////this.lastCursor = this.theCursor;
}
else if(zhen==true){
//console.log(this.theCursor)
//console.log(this.lastCursor)
    if( this.lastCursor===undefined || this.lastCursor==0 || this.theCursor==undefined || this.theCursor - this.lastCursor >= -1 ){
        //console.log(this.lastCursor)
        var words = '';
        if ((/[a-zA-Z\s-\u002D]/.test(inputValue))){
            //console.log(inputValue)
            inputValue.replace( /[a-zA-Z\s-\u002D]+/g, function(match){
                words+=match;
            });
            this.setData({
            myanswer : words,
            myanswer2 : words
            })
            if(inputValue==theanswer){
                wx.vibrateShort()
                this.setData({
                    ifright : 1,
                    ifrightd : 1,
                    thelinecolor: "black",
                    hint: '继续',
                    })
            }

            else{
                //let value=''
                this.setData({
                    ifright: 0,
                    thelinecolor: "#ccc",
                    hint: '提示',
                })

            }
            //return words
        }
else{
    var words = '';
        //console.log(inputValue)
        inputValue.replace( /[a-zA-Z\s-\u002D]+/g, function(match){
            words+=match;
        });
    this.setData({
        myanswer : words,
        myanswer2 : words
        })
}

        return words
    }
else{
    //let value=inputValue.slice(0,-1)
    //console.log(inputValue)
    this.setData({
        myanswer: inputValue,
        myanswer2:inputValue,
        //ifright: false,
    })
}

   // //this.lastCursor = this.theCursor;
}

//console.log('value',value)
////this.lastCursor = this.theCursor;


  },

  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = this.theCursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },

  doubleTap: function(e) {
    wx.vibrateShort()
    //var currentTime = e.timeStamp;
    //var lastTapTime = this.lastTapTime;
    if(this.data.hint == "继续"){
    // 获取textarea元素实例
    //const textarea = this.selectComponent('thearea');
    // 设置焦点
    //console.log(textarea)
    //this.updateText();
    ifenter=false
    tmp=1
    inputValue="\n"
    this.setData({
        thefocus: true,
        lastTapTime: null,
        lastCursor : 0
    })
    this.handleInput(e)
    //textarea.focus();
    //this.lastCursor = 0
    }
    else {
        this.setData({
            thefocus: true
        })
    if(enzh==true){
        var currentanswer=this.data.myanswer2
        while (zhs2.length>0){
        var thei = Math.round(Math.random()*(zhs2.length-1));
        if(zhs2[thei]==null || zhs2[thei]==='' ){
            continue
            }
        var addon=currentanswer.concat(zhs2[thei])
        currentanswer=null
        //zhs2.splice(thei,1)
        if(zhs2.length-1>0){
          var addon1=addon.concat("，")
          }
          else{
            var addon1=addon
          }
        this.setData({
            myanswer: addon1,
            myanswer2: addon1
        })
      //  console.log('zhs2length:',zhs2.length)
        inputValue=addon
        //zhs2.splice(thei,1)
        tmp=1
        this.handleInput(e)
      //  console.log('double tap')
        addon=null
    break
    }
}
else if(zhen==true){
    //var addon1=null
    var currentanswer=this.data.myanswer2
    if (currentanswer==''){
        let addon1=answer0[index][0]
        this.setData({
            myanswer: addon1,
            myanswer2: addon1
        })
    }
    else if(answer0[index].startsWith(currentanswer)){
     //   console.log('double tapsss')
        let theanswer=answer0[index]
        var addon1=currentanswer
        if(currentanswer.length<theanswer.length){
        addon=addon1.concat(theanswer[currentanswer.length])
        this.setData({
            myanswer: addon,
            myanswer2: addon
        })
        inputValue=addon
      //  console.log("inputvalue",inputValue)
        tmp=1
        this.handleInput(e)
    }

    }
    //zhs2.splice(thei,1)

    //addon1=null
}

    }
    this.lastTapTime = 0;
  }
  
})

