import TimePicker from "react-time-picker";

export default function Time({ value, onChange, ...rest }) {
  return <TimePicker onChange={onChange} value={value} {...rest} />;
}
