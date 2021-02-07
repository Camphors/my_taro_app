import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
import 'taro-ui/dist/style/components/flex.scss';
import 'taro-ui/dist/style/components/avatar.scss';
import './index.less';

const Mine = () => {
  const [follwerCount, setFollwerCount] = useState(0);
  const [fansCount, setFansCount] = useState(0);
  const recommendList = [{
    title: '会员中心',
    description: '淘气值快速提升',
  }, {
    title: '淘宝省钱卡',
    description: '领91远红包'
  }, {
    title: '淘宝人生',
    description: '大牌装扮免费拿'
  }, {
    title: '芭芭农场',
    description: '免费水果包邮送'
  }]
  return (
    <View className="mine-page">
      {/* 个人信息 */}
      <View className="at-row profileInfo">
        <View className="at-col at-col-3 avatar">
          <AtAvatar
            image={require('../../assets/images/avatar.png')}
            size="large"
            circle
          ></AtAvatar>
        </View>
        <View className="at-col at-col-9 profile">
          <View>camphor</View>
          <View className="tag">
            点击这里添加个性签名
            <Text className="iconfont icon-edit"></Text>
          </View>
          <View className="tag">
            <Text className="num">{follwerCount}</Text> 关注 | <Text className="num">{fansCount}</Text> 粉丝
          </View>
        </View>
      </View>
      {/* 推荐中心 */}
      <View className="recommend">
          {
            recommendList.map(item => {
              return <View className="recom-item">
                <View>{item.title}</View>
                <View>{item.description}</View>
              </View>
            })
          }
      </View>
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
