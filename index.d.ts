import { Component } from "react";

declare module "react-native-super-timepicker" {
  export type TimePickerProps = {
    minHour?: number;
    maxHour?: number;
    minMinute?: number;
    maxMinute?: number;
    hourInterval?: number;
    minuteInterval?: number;
    hourUnit?: string;
    hourUnitSingular?: string;
    minuteUnit?: string;
    minuteUnitSingular?: string;
    selectedHour?: string;
    selectedMinute?: string;
    itemStyle: object;
    textCancel?: string;
    textConfirm?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
  };

  class TimePicker extends Component<TimePickerProps> {
    open(): void;
    close(): void;
  }

  export default TimePicker;
}
