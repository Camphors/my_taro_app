import React from 'react';
import { View, Text } from '@tarojs/components';
import { AtAvatar, AtIcon } from 'taro-ui';
import 'taro-ui/dist/style/components/icon.scss';
import "taro-ui/dist/style/components/flex.scss";
import './index.less';

const Mine = () => {
  return (
    <View className="mine-page">
      {/* 个人信息 */}
      <View className="at-row profileInfo">
        <View className="at-col at-col-4 avatar">
          <AtAvatar circle text="头像"></AtAvatar>
        </View>
        <View className="at-col at-col-8 profile">
          <View>camphor</View>
          <View>
            点击这里添加个性签名
            <AtIcon prefixClass="iconfont" value="message" size="30" color="red"></AtIcon>
            <Text className="iconfont icon-edit"></Text>
          </View>
          <View>camphor</View>
        </View>
      </View>
      {/* 推荐中心 */}
      <View></View>
      {/* 订单 */}
      <View></View>
      {/* 应用 */}
      <View></View>
      {/* 信息 */}
      <View></View>
    </View>
  );
};
export default Mine;
