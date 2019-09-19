// plugin/components/update_modal/update_modal.js
Component({

  properties: {
    showModalStatus: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal){
        if(newVal==true){
          this.showModal()
        }else{
          this.hideModal()
        }
      }
    },
    msg: {
      type: String,
      value: ''
    }
  },

  data: {
    animationData:{}
  },

  methods: {
    preventTouchMove: function () { },
    showModal: function () {
      // 显示遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation;
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    },
    hideModal: function () {
      // 隐藏遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation;
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          showModalStatus: false
        })
      }.bind(this), 200)
    },
    confirmHide: function() {
      this.triggerEvent('hidemodal',{showModalStatus:false})
    }
  }
})
