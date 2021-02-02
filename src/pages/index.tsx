import React from 'react';
import { View } from '@tarojs/components';
// import { AtButton } from 'taro-ui';
// import Taro from '@tarojs/taro'
import ThreadList from '../components/thread_list';
// import api from '../../utils/api'

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './index.less';

const Index = () => {
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
  return (
    <View className="index">
      {/* <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton> */}
      <ThreadList threads={threads}></ThreadList>
    </View>
  );
};

export default Index;
