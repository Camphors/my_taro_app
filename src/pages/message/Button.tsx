import { View, Text } from '@tarojs/components';
import React, { useContext } from 'react';
import { ColorContext } from './Color';
const Buttons = () => {
  const { color, changeColor } = useContext(ColorContext);
  return (
    <View>
      <Text style={{ color: color }}>字体颜色为{color}</Text>
      <button onClick={() => changeColor('red')}>红色</button>
      <button onClick={() => changeColor('blue')}>蓝色</button>
    </View>
  );
};

export default Buttons;
