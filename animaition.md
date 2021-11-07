动画
transform:
          rotate（）围绕中心旋转
          skew() 扭曲，倾斜
          scale()缩放
          translate()移动 translateX(300px)
          matrix 矩阵变形

animation-name:动画名字
animation-duration:时长
animation-fill-mode 动画结束后做什么
animation-delay: 延迟4秒后执行
animation-inertaion-count:执行次数 infinite(无限)
animation-direction:
                     alternate: 0到100是慢慢 100到0也是慢慢

 animation: name duration timing-function delay iteration-count direction fill-mode;
@keyframes hd {
  from{
    起始点
  }
  to{
   结束点
  }

  可以划分很多帧

  //0就是我的初始位置,这里就有3帧
  0%{

  }

  10%{

  }

  100%{
    最后去到哪里？
  }
}



####例子
h1{
  transform:sale(0) //一开始不显示
  animation:show
  duration:2s
}

@keyframe show {
  100%{
    scal(1) //放大到正常尺寸
  }
}



19 939第一页  939 1857 第二页
46 1269第一页 1269 2643第二页