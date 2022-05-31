(() => {
  // 下单的按钮是一个弹窗, 所以需要延时获取dom
  console.log("开始抢购!!😄");
  const button = document.getElementsByClassName("buy-btn")[0];
  // 查看下单按钮是否存在
  let orderButton = setInterval(() => {
    if (button) {
      // 如果button存在, 就点击
      button.click();
    }
  });
})();
