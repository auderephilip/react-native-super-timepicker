# react-native-super-timepicker

[![npm version](https://badge.fury.io/js/react-native-super-timepicker.svg)](//npmjs.com/package/react-native-super-timepicker) [![npm downloads](https://img.shields.io/npm/dm/react-native-super-timepicker.svg)
](//npmjs.com/package/react-native-super-timepicker)

## Summary

A 24-hour format time picker which improves on [react-native-24h-timepicker](https://www.npmjs.com/package/react-native-24h-timepicker) by:

- supporting `minHour` and `maxHour` (contribution by [mindmind](https://github.com/mindmind))
- removing deprecated stuff like `componentWillReceiveProps`
- updated dependencies to the latest stuff

### Screenshot

![screenshot](https://user-images.githubusercontent.com/42978089/95019985-60a24e80-061d-11eb-9fad-fb9d437ca7b0.gif)

## Installation

```
npm i react-native-super-timepicker --save
```

### or

```
yarn add react-native-super-timepicker
```

## Example

```jsx
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-super-timepicker";

class Example extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
    };
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>REACT NATIVE</Text>
        <Text style={styles.text}>24 HOURS FORMAT TIMEPICKER</Text>
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>TIMEPICKER</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.time}</Text>
        <TimePicker
          ref={(ref) => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Example;
```

## Props

| Prop               | Type     | Description                                                                                                                           | Default |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| minHour            | number   | Minimum of hour                                                                                                                       | 0       |
| maxHour            | number   | Maximum of hour                                                                                                                       | 23      |
| minMinute          | number   | Minimum of minute                                                                                                                     | 0       |
| maxMinute          | number   | Maximum of minute                                                                                                                     | 59      |
| hourInterval       | number   | The interval at which hours can be selected.                                                                                          | 1       |
| minuteInterval     | number   | The interval at which minutes can be selected.                                                                                        | 1       |
| hourUnit           | string   | Add extra text to hour (e.g. "hrs"). Include a space if you want a gap between the number and the text (e.g. " hrs" for "18 hrs")     | ""      |
| hourUnitSingular   | string   | The first hour's extra text, if not hourUnit (e.g. "1 hr" vs "2 hrs")                                                                 | ""      |
| minuteUnit         | string   | Add extra text to minute (e.g. "mins"). Include a space if you want a gap between the number and the text (e.g. " mins" for "4 mins") | ""      |
| minuteUnitSingular | string   | The first minute's extra text, if not minuteUnit (e.g. "1 min" vs "2 mins")                                                           | ""      |
| selectedHour       | string   | Default hour                                                                                                                          | "0"     |
| selectedMinute     | string   | Default minute                                                                                                                        | "00"    |
| itemStyle          | object   | Item text style                                                                                                                       | {}      |
| textCancel         | string   | Cancel button text                                                                                                                    | Cancel  |
| textConfirm        | string   | Confirm button text                                                                                                                   | Confirm |
| onCancel           | function | Event on Cancel button                                                                                                                |         |
| onConfirm          | function | Event on Confirm button                                                                                                               |         |

## Methods

| Method Name | Description      |
| ----------- | ---------------- |
| open        | Open TimePicker  |
| close       | Close TimePicker |

### Note

Always set `ref` to `TimePicker` and call each method by using `this.TimePicker.methodName()` like example above.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/auderephilip/react-native-super-timepicker/blob/master/LICENSE) file for details

## Author

Made by [Philip Su](https://github.com/auderephilip), with thanks to original
author NYSamnang. Repo was forked to provide more active maintenance and to
accept others' pull requests.
