import { Component } from 'react';
import './assets/iconfont/iconfont.css';
import './app.less';
class App extends Component {
  componentDidMount() {
    wx.getSystemInfo({
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    })
    // const res = wx.getSystemInfoSync()
    // console.log(res)
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
