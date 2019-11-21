import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/self-adaption'
import './assets/style/reset.css'
import logo from './assets/images/logo.jpg'
import 'script-loader!./assets/js/wx'
import { ajax } from './assets/js/ajax'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


const link = window.location.href;

function successFun(data) {
  data = JSON.parse(data);
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
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'],
  });

  wx.ready(function () {
    var shareData = {
      title: '奧克斯H5', //分享标题  todo
      desc: '这个是奥克斯项目', // 分享描述   todo
      link: link, // 分享链接   todo 微信
      imgUrl: logo, //分享图片   todo
      success: function () {
        return false;
      },
      cancel: function () {
        //用户取消
      }
    };

    //分享给朋友
    wx.onMenuShareAppMessage(shareData);
    //分享到朋友圈
    wx.onMenuShareTimeline(shareData);
    //分享给QQ好友
    wx.onMenuShareQQ(shareData);
    //分享到QQ空间
    wx.onMenuShareQZone(shareData);
  })
}

ajax({ url: './wx_api/api.php', ajaxData: { url: link }, success: successFun });