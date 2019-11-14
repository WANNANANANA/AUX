<template>
  <div class="visition">
    <div id="box"></div>
  </div>
</template>
<script>
import { get } from "http";
export default {
  mounted() {
    var box = document.getElementById("box"); //获取指针元素
    var initAngle = 0;
    var nowAngle = 0;
    //触摸事件
    function touches(e) {
      var ev = window.event || event;
      switch (ev.type) {
        case "touchstart": // 刚触摸时 // 先求初始角度
          var ox = ev.touches[0].clientX;
          var oy = ev.touches[0].clientY;
          initAngle = getAngle(ox, oy);
          nowAngle = box.style.transform ? parseInt(box.style.transform.match(/[0-9]{1,3}(deg)/)[0]) : nowAngle;

          box.addEventListener("touchmove", touches, false);
          break;
        case "touchend":
          box.removeEventListener("touchmove", touches, false);
          box.removeEventListener("touchend", touches, false);
          break;
        case "touchmove":    
          var endAngle = getAngle(
            ev.changedTouches[0].clientX,
            ev.changedTouches[0].clientY
          ); // 传入此时鼠标的坐标点\
          box.style.transform = "rotate(" + (endAngle - initAngle + nowAngle) + "deg)";
          break;
      }
    }
    box.addEventListener("touchstart", touches, false);

    function getAngle(mx, my) {
      var px = 187.5;
      var py = 333.5; // 旋转物以中心点为坐标进行旋转 鼠标也以这个点作为中心
      var x = Math.abs(px - mx); // Math.abs 绝对值
      var y = Math.abs(py - my);
      var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); // x的2次方 y的2次方 相加求平方根
      var cos = y / z;
      var radina = Math.acos(cos); //用反三角函数求弧度
      var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

      if (mx > px && my > py) {
        //鼠标在第四象限
        angle = 180 - angle;
      }

      if (mx == px && my > py) {
        //鼠标在y轴负方向上
        angle = 180;
      }

      if (mx > px && my == py) {
        //鼠标在x轴正方向上
        angle = 90;
      }

      if (mx < px && my > py) {
        //鼠标在第三象限
        angle = 180 + angle;
      }

      if (mx < px && my == py) {
        //鼠标在x轴负方向
        angle = 270;
      }

      if (mx < px && my < py) {
        //鼠标在第二象限
        angle = 360 - angle;
      }
      return angle;
    }
  }
};
</script>
<style lang="less">
input[placeholder] {
  color: #333;
}
input::-webkit-input-placeholder {
  color: #333;
}
#box {
  width: 150px;
  height: 150px;
  border-top: 6px solid red;
  border-left: 6px solid blue;
  border-bottom: 6px solid orange;
  border-right: 6px solid black;
  border-radius: 50%;
  margin: 0 auto;
  transform-origin: center center;
}
</style>