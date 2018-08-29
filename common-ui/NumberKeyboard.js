// @flow
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import deleteIcon from './assets/images/delete.png';

const styles = StyleSheet.create({
  pinKeyboard: {
    flex: -1,
    flexShrink: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 'auto',
    marginBottom: 64,
  },
  pinKey: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    height: 70,
    flexGrow: 1,
  },
  clearText: {
    fontSize: 12,
  },
  pinText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Iosevka',
  },
});

type Props = {
  onTextInput: Function,
};

const KEYCODE_FLOW = {
  CREATE: 'create',
  CONFIRM: 'confirm',
  UNLOCK: 'unlock',
  ATTEMPT: 'attempt',
  REMOVE: 'remove',
};

const KEY_CODE = {
  DELETE: 'delete',
  CLEAR: 'clear',
  CANCEL: 'cancel',
};

class NumberKeyboard extends React.PureComponent<Props> {
  static KEYCODE_FLOW = KEYCODE_FLOW;
  static KEY_CODE = KEY_CODE;

  onTextInput = (val: string) => {
    this.props.onTextInput(val);
  };

  render() {
    const { onTextInput } = this.props;
    return (
      <View style={styles.pinKeyboard}>
        <PinKey label="1" onPress={onTextInput} />
        <PinKey label="2" onPress={onTextInput} />
        <PinKey label="3" onPress={onTextInput} />
        <PinKey label="4" onPress={onTextInput} />
        <PinKey label="5" onPress={onTextInput} />
        <PinKey label="6" onPress={onTextInput} />
        <PinKey label="7" onPress={onTextInput} />
        <PinKey label="8" onPress={onTextInput} />
        <PinKey label="9" onPress={onTextInput} />
        <PinKey label={KEY_CODE.CLEAR} onPress={onTextInput} />
        <PinKey label="0" onPress={onTextInput} />
        <PinKey label={KEY_CODE.DELETE} onPress={onTextInput} />
      </View>
    );
  }
}

type PinKeyProps = {
  label: string,
  onPress: Function,
};

class PinKey extends React.PureComponent<PinKeyProps> {
  static defaultProps = {
    onPress: () => {},
  };

  onPress = () => {
    const { label, onPress } = this.props;
    const emptyKey = label.length === 0;
    if (!emptyKey) {
      onPress(label);
    }
  };

  render() {
    const { label } = this.props;
    const emptyKey = label.length === 0;
    const clearKey = label === KEY_CODE.CLEAR;
    const deleteKey = label === KEY_CODE.DELETE;

    return (
      <TouchableOpacity style={styles.pinKey} activeOpacity={emptyKey ? 1 : 0.5} onPress={this.onPress}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={[styles.pinText, clearKey && styles.clearText]}>{clearKey ? '\u2022' : label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NumberKeyboard;
