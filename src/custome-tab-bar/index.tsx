import React, { useState } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/tab-bar.scss';
import 'taro-ui/dist/style/components/badge.scss';
import './index.less';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入

const customTabBar = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const threads = [
    {
      title: '这里是标题',
      member: {
        avatar_large: '1234',
        username: 'camphor'
      },
      replies: 'Taro的开发语法遵循React,基本上写过React的都是很好上手。',
      last_modified: '2021-02-02',
      node: {
        title: '小标题'
      },
      not_navi: '11'
    }
  ];

  const titles = [
    {
      title: '首页',
      // iconPrefixClass: 'iconfont',
      // iconType: 'Homehomepagemenu',
      iconType: 'home',
      // icon: 'icon-Homehomepagemenu',
      key: 'home'
    },
    {
      title: '消息',
      // iconPrefixClass: 'iconfont',
      // iconType: 'message',
      iconType: 'bell',
      // icon: 'icon-message',
      key: ' message'
    },
    {
      title: '我的',
      // iconPrefixClass: 'iconfont',
      // iconType: 'cc-user',
      iconType: 'user',
      // icon: 'icon-cc-user',
      key: 'user'
    }
  ];

  const handleChangeMenu = e => {
    setCurrentTab(e);
    switch (e) {
      case 0: {
        // Taro.redirectTo({
        //   url: '/pages/home/index'
        // });
        Taro.navigateTo({
          url: '/pages/home/index',
          events: {
            // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            acceptDataFromOpenedPage: function(data) {
              console.log(data)
            },
            someEvent: function(data) {
              console.log(data)
            }
          },
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
          }
        })
        break;
      }
      case 1: {
        Taro.redirectTo({
          url: '/pages/message/index'
        });
        break;
      }
      case 2: {
        // Taro.redirectTo({
        //   url: '/pages/mine/index'
        // });
        Taro.switchTab({
          url: '/pages/mine/index',
          // events: {
          //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          //   acceptDataFromOpenedPage: function(data) {
          //     console.log(data)
          //   },
          //   someEvent: function(data) {
          //     console.log(data)
          //   }
          // },
          // success: function (res) {
          //   // 通过eventChannel向被打开页面传送数据
          //   res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
          // }
        })
        break;
      }
    }
  };
  return (
    <View className="dashboard">
      {/* <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton> */}
      {/* <ThreadList threads={threads}></ThreadList> */}
      {/* <AtButton>
        <AtIcon value='clock' size='30' color='red'></AtIcon>
        <AtIcon prefixClass="iconfont" value='message' size='30' color='red'></AtIcon>
      </AtButton> */}
      {/* <AtTabBar
        className="menu-item"
        fixed
        tabList={titles}
        onClick={e => handleChangeMenu(e)}
        current={currentTab}
      /> */}
      {/* {titles.map(item => (
        <View className="menu-item">
          <View className={`iconfont ${item.icon}`}></View>
          <View className="bt-title">{item.title}</View>
        </View>
      ))} */}
    </View>
  );
};

export default customTabBar;
