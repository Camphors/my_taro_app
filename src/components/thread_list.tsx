import React from 'react';
import Thread from './thread';
import { View } from '@tarojs/components';
const ThreadList = ({ threads = [] }) => {
  const itemList = threads.map(item => {
    return <Thread {...item} key={item.title}></Thread>;
  });
  return <View className="thread-list">{itemList}</View>;
};
export default ThreadList;
