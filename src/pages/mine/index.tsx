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
    description: '领91元红包'
  }, {
    title: '淘宝人生',
    description: '大牌装扮免费拿'
  }, {
    title: '芭芭农场',
    description: '免费水果包邮送'
  }]

  const myRecords = [{
    title: '收藏',
    num: '7',
    icon: 'icon-STAR'
  }, {
    title: '订阅店铺',
    num: '27',
    icon: 'icon-dingyue'
  }, {
    title: '足迹',
    num: '209',
    icon: 'icon-zuji'
  }]

  const orderList = [{
    title: '待付款',
    icon: 'icon-qianbao',
    key: 'obligation',
    count: 0
  }, {
    title: '待发货',
    icon: 'icon-daifahuo',
    key: 'deliver',
    count: 1
  }, {
    title: '待收货',
    icon: 'icon-fahuo',
    key: 'shipped',
    count: 0
  }, {
    title: '待评论',
    icon: 'icon-pinglun',
    key: 'comment',
    count: 10
  }, {
    title: '退款/售后',
    icon: 'icon-tuikuan',
    key: 'drawback',
    count: 0
  }]
  return (
    <View className="mine-page">
      {/* 个人信息 */}
      <View className="at-row profileInfo">
        <View className="at-col at-col-3 avatar">
          <AtAvatar
            image={'../../assets/images/avatar.png'}
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
            recommendList.map((item, key) => {
              return <View className="recom-item" key={key}>
                <View className="title">{item.title}</View>
                <View className="introduce">{item.description}</View>
              </View>
            })
          }
      </View>
      {/* 订单 */}
      <View className="profileApply">
        <View className="collects">
          {
            myRecords.map(item => {
              return (
              <View className="collect-item" key={item.icon}>
                <Text className={`iconfont ${item.icon}`}></Text>
                <Text>{item.title}</Text>
                <Text className="num">{item.num}</Text>
              </View>
              )
            })
          }
        </View>
        <View className="my-orders">
          <View className="order-title">
            <Text className="tag title">我的订单</Text>
            <Text className="all">查看全部 <Text className="iconfont icon-arrow"></Text></Text>
            </View>
          <View className="list">
            {
              orderList.map(item => {
                return (
                  <View className="order-item" key={item.icon}>
                    <View className={`iconfont ${item.icon}`}></View>
                    <View className="">{item.title}</View>
                    {
                      item.count > 0 ? <Text className="count">{item.count}</Text> : null
                    }
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
      {/* 应用 */}
      <View></View>
      {/* 信息 */}
      <View></View>
    </View>
  );
};
export default Mine;
