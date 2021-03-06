import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Picker } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";

class TimePicker extends Component {
  constructor(props) {
    super(props);
    const { selectedHour, selectedMinute } = props;
    this.state = { selectedHour, selectedMinute };
  }

  componentDidUpdate(prevProps) {
    const { selectedHour, selectedMinute } = prevProps;
    if (selectedHour !== this.props.selectedHour) {
      this.setState({ selectedHour: this.props.selectedHour });
    }
    if (selectedMinute !== this.props.selectedMinute) {
      this.setState({ selectedMinute: this.props.selectedMinute });
    }
  }

  getHourItems = () => {
    const items = [];
    const {
      minHour,
      maxHour,
      hourInterval,
      hourUnit,
      hourUnitSingular,
    } = this.props;
    for (let i = minHour; i <= maxHour; i = i + hourInterval) {
      const value = `${i}`;
      const unitLabel = hourUnit
        ? `${i === 1 ? hourUnitSingular || hourUnit : hourUnit}`
        : "";
      const item = (
        <Picker.Item key={value} value={value} label={value + unitLabel} />
      );
      items.push(item);
    }
    return items;
  };

  getMinuteItems = () => {
    const items = [];
    const {
      minMinute,
      maxMinute,
      minuteInterval,
      minuteUnit,
      minuteUnitSingular,
    } = this.props;
    for (let i = minMinute; i <= maxMinute; i = i + minuteInterval) {
      const new_value = i < 10 ? `0${i}` : `${i}`;
      const unitLabel = minuteUnit
        ? `${i === 1 ? minuteUnitSingular || minuteUnit : minuteUnit}`
        : "";
      const item = (
        <Picker.Item key={i} value={new_value} label={new_value + unitLabel} />
      );
      items.push(item);
    }
    return items;
  };

  onValueChange = (selectedHour, selectedMinute) => {
    this.setState({ selectedHour, selectedMinute });
  };

  onCancel = () => {
    if (typeof this.props.onCancel === "function") {
      const { selectedHour, selectedMinute } = this.state;
      this.props.onCancel(selectedHour, selectedMinute);
    }
  };

  onConfirm = () => {
    if (typeof this.props.onConfirm === "function") {
      const { selectedHour, selectedMinute } = this.state;
      this.props.onConfirm(selectedHour, selectedMinute);
    }
  };

  close = () => {
    this.RBSheet.close();
  };

  open = () => {
    this.RBSheet.open();
  };

  renderHeader = () => {
    const { textCancel, textConfirm } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.onCancel} style={styles.buttonAction}>
          <Text style={[styles.buttonText, styles.buttonTextCancel]}>
            {textCancel}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onConfirm} style={styles.buttonAction}>
          <Text style={styles.buttonText}>{textConfirm}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderBody = () => {
    const { selectedHour, selectedMinute } = this.state;
    return (
      <View style={styles.body}>
        <Picker
          selectedValue={selectedHour}
          style={styles.picker}
          itemStyle={this.props.itemStyle}
          onValueChange={(itemValue) =>
            this.onValueChange(itemValue, selectedMinute)
          }
        >
          {this.getHourItems()}
        </Picker>
        <Text style={styles.separator}>:</Text>
        <Picker
          selectedValue={selectedMinute}
          style={styles.picker}
          itemStyle={this.props.itemStyle}
          onValueChange={(itemValue) =>
            this.onValueChange(selectedHour, itemValue)
          }
        >
          {this.getMinuteItems()}
        </Picker>
      </View>
    );
  };

  render() {
    return (
      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
      >
        {this.renderHeader()}
        {this.renderBody()}
      </RBSheet>
    );
  }
}

TimePicker.propTypes = {
  minHour: PropTypes.number,
  maxHour: PropTypes.number,
  minMinute: PropTypes.number,
  maxMinute: PropTypes.number,
  hourInterval: PropTypes.number,
  minuteInterval: PropTypes.number,
  hourUnit: PropTypes.string,
  hourUnitSingular: PropTypes.string,
  minuteUnit: PropTypes.string,
  selectedHour: PropTypes.string,
  selectedMinute: PropTypes.string,
  itemStyle: PropTypes.object,
  textCancel: PropTypes.string,
  textConfirm: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

TimePicker.defaultProps = {
  minHour: 0,
  maxHour: 23,
  minMinute: 0,
  maxMinute: 59,
  hourInterval: 1,
  minuteInterval: 1,
  hourUnit: "",
  hourUnitSingular: "",
  minuteUnit: "",
  minuteUnitSingular: "",
  selectedHour: "0",
  selectedMinute: "00",
  itemStyle: {},
  textCancel: "Cancel",
  textConfirm: "Done",
};

export default TimePicker;
