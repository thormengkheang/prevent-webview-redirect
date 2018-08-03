import React from 'react';
import {View, WebView, Platform} from 'react-native';
import CustomWebView from './CustomWebView';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {Platform.OS === "ios" ? <View style={{height: 50}}/> : null}
        <CustomWebView url="https://f4c95006.ngrok.io/" style={{flex: 1}}/>
        <WebView source={{uri: 'https://f4c95006.ngrok.io/'}} style={{flex: 1}}/>
      </View>
    );
  }
}
