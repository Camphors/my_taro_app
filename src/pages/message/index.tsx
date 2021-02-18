import React from 'react';
import { View, Text } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
// import 'taro-ui/dist/style/components/avatar.scss';
import './index.less';

const Message = () => {
  const messageList = [
    {
      avatar: '',
      name: '消息号助手',
      message: '雅诗兰黛：凝聚时光的力量，或称想要的样子',
      time: '星期日',
      count: 0,
      isSilence: true
    },
    {
      avatar: '',
      name: '美潮旗舰店',
      message: '2021过年不打烊',
      time: '星期日',
      count: 39,
      isSilence: false
    },
    {
      avatar: '',
      name: '滋源旗舰店',
      message: '邀请您对丽莎的服务进行评价',
      time: '星期五',
      count: 5,
      isSilence: false
    },
    {
      avatar: '',
      name: 'geoskincare纽西之谜旗舰店',
      message: '您有一条店铺消息',
      time: '星期三',
      count: 4,
      isSilence: false
    },
    {
      avatar: '',
      name: '交易物流',
      message: '您的订单已签收',
      time: '星期日',
      count: 39,
      isSilence: false
    },
    {
      avatar: '',
      name: '菜鸟',
      message: '包裹已到达自提柜，速取',
      time: '21/02/02',
      count: 8,
      isSilence: false
    },
    {
      avatar: '',
      name: 'jmey集米旗舰店',
      message: '地址正确吗亲亲？没问题的话这边就帮您下单了',
      time: '21/01/31',
      count: 3,
      isSilence: false
    },
    {
      avatar: '',
      name: '卡伦灯饰',
      message: '美轮美奂尽在美潮卡伦，全网最好看灯饰',
      time: '21/01/29',
      count: 10,
      isSilence: false
    }
  ];
  return (
    <View className="message">
      {/* <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar> */}

      {messageList.map((item, index) => {
        return (
          <View className="msg-item" key={index}>
            {/* <AtAvatar
                image={require('../../assets/images/avatar.png')}
              ></AtAvatar> */}
            <View className="avatar"></View>
            <View className="content">
              <View className="name">{item.name}</View>
              <View className="msg">{item.message}</View>
            </View>
            <View className="tail">
              <View>{item.time}</View>
              <View>
                {item.isSilence ? <Text className="iconfont icon-bell-off-full"></Text> : null}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
export default Message;
