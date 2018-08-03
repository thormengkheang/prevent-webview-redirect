import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class extends Component {
  shouldStartLoadWithRequestHandler = ({url}) => url === this.props.url;

  navigationStateChangedHandler = ({url}) => {
    if (url.startsWith('https://') && url !== this.props.url) {
      this.WebView.stopLoading();
    }
  };

  render() {
    const {url, ...props} = this.props;
    return <WebView
      {...props}
      source={{uri: url}}
      onShouldStartLoadWithRequest={this.shouldStartLoadWithRequestHandler}
      onNavigationStateChange={this.navigationStateChangedHandler}
      ref={c => {
        this.WebView = c;
      }}
    />
  }
}
