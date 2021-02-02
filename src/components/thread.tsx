import { View, Image, Text } from '@tarojs/components';
import React from 'react';
import Taro from '@tarojs/taro';

const Thread = ({
  title = '',
  member: { avatar_large = '', username = '' },
  last_modified = '',
  replies = '',
  node: { node: nodeTitle = '' },
  not_navi = ''
}) => {
  const handleNavigate = () => {
    console.log(1);
    // if (not_navi) {
    //   return
    // }
    Taro.navigateTo({ url: '/pages/threadDetails/index' });
  };

  const usernameCls = `author ${not_navi ? 'bold' : ''}`;
  return (
    <View
      className="thread"
      onClick={() => {
        handleNavigate();
      }}
    >
      <View className="info">
        <Image src={avatar_large} className="avatar" />
      </View>
      <View className="middle">
        <View className={usernameCls}>{username}</View>
        <View className="replies">
          <Text className="mr10">{last_modified}</Text>
          <Text>
            评论
            {replies}
          </Text>
        </View>
      </View>
      <View className="node">
        <Text className="tag">{nodeTitle}</Text>
      </View>
      <Text className="title">{title}</Text>
    </View>
  );
};
export default Thread;
