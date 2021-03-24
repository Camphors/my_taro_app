import React, { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { getCurrentInstance  } from '@tarojs/taro';
import './details.less';
import BrandItem from './BrandItem';

const MessageDetails = () => {
  const [title, setTitle] = useState('');
  let params = getCurrentInstance()
  let name = params?.router?.params?.name;

  useEffect(() => {
    setTitle(name);
  }, []);

  // 返回消息tab页面
  const goBack = () => {
    Taro.switchTab({
      url: '/pages/message/index'
    })
  };

  return (
    <View>
      <View className="header">
        <Text className="left-icon iconfont icon-arrow-left" onClick={() => goBack()}></Text>
        <Text className="title">{title}</Text>
        <Text className="setting-icon iconfont icon-setting-copy-copy"></Text>
      </View>
      <View className="main">
        <BrandItem/>
      </View>
    </View>
  )
};

export default MessageDetails;