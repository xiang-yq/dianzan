Page({
  data: {
    count: 0
  },
  onReady(){
    setInterval(()=>{
      this.clickHandler()
    },500)
  },
  clickHandler: function() {
    this.setData({
      count: this.data.count + 1
    });
  }
});
