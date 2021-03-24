import React, { createContext, useState } from 'react';

const [color, setColor] = useState('blue');
export const ColorContext = createContext({});

export const Color = props => {
  return <ColorContext.Provider value={{ color }}>{props.children}</ColorContext.Provider>;
};
