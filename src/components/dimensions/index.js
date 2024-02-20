import React from 'react';
import {Dimensions} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const widthFigma = 390;
const heightFigma = 840;

export function globalWidth(a) {
  return (width * a) / widthFigma;
}

export function globalHeight(a) {
  return (height * a) / heightFigma;
}
