import { View, Text } from '@tarojs/components';
import React, { useReducer, useContext, createContext, useState } from 'react';
import { Color, ColorContext } from './Color';
import Buttons from './Button';

const BrandItem = () => {
  const { color } = useContext(ColorContext);
  console.log(color);
  // const color="red";
  // const [count, disptach] = useReducer((state, action) => {
  //   switch(action) {
  //     case 'add':
  //     return state + 1;
  //     case 'sub':
  //       return state -1;
  //     default:
  //       return state;
  //   }

  // }, 0);
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>当前父组件count的值是{count}</Text>
      {/* <button style={{color: color}} onClick={() => disptach('add')} >增加并将颜色改为红色</button>
      <button onClick={() => disptach('sub')}>减少并将颜色改为蓝色</button> */}
      <button style={{ color: color }} onClick={() => setCount(count + 1)}>
        增
      </button>
      <button style={{ color: color }} onClick={() => setCount(count - 1)}>
        减
      </button>
      <Color>
        <Buttons />
      </Color>
    </View>
  );
};

export default BrandItem;
