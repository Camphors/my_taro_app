import React, { createContext, useCallback, useContext, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
// import 'taro-ui/dist/style/components/avatar.scss';
const CountContext = createContext();

function GetCount() {
  const count = useContext(CountContext);
  return <View>子组件接收到的来自父组件的count：{count}</View>
}

const Home = () => {
  const [count, setCount] = useState(0);
  const tsMap = () => {
    type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };
    type Coordinate = [number, number]
    type PromiseCoordinate = MapToPromise<Coordinate>;
  }
  return (
    <View>
      <Text>home</Text>
      <Text onClick={() => setCount(count + 1)}>父组件被点击了{count}次</Text>
      <CountContext.Provider value={count}>
        <GetCount/>
      </CountContext.Provider>
      {/* <AtAvatar
        image={'../../assets/images/avatar.png'}
        circle
      ></AtAvatar> */}
    </View>
  );
};
export default Home;
