import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import logo from './assets/images/logo.jpg'
import wx from 'weixin-js-sdk'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


const link = window.location.href;

function successFun(data) {
  data = data.data;
  var app_id = data.app_id;
  var timestamp = data.timestamp;
  var noncestr = data.noncestr;
  var signature = data.signature;
  wx.config({
    debug: false,
    appId: app_id,
    timestamp: timestamp,
    nonceStr: noncestr,
    signature: signature,
    // JSSDK 1.4.0以上版本支持
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
  });

  wx.ready(function () {
    var shareData = {
      title: '奧克斯', // 分享标题  
      desc: '奥克斯导览系统', // 分享描述   
      link: link, // 分享链接   
      imgUrl: logo, // 分享图片 
      success: function () {
        return false;
      },
      cancel: function () {
        return false;
      }
    };

    //  分享给朋友及分享到QQ
    wx.updateAppMessageShareData(shareData);
    // 分享到朋友圈及分享到QQ空间
    wx.updateTimelineShareData(shareData);
  })
}

axios.get('./wx_api/api.php', {
  params: {
    url: link
  }
}).then(successFun)