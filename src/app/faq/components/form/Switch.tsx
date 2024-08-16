import {ChangeEventHandler} from "react";

export type SwitchProps = {
  label?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>
}
const Switch = (props: SwitchProps) => {
  return <div className="flex items-center">
    <span className="mr-4">
      {
        props.label
      }
    </span>
    <label className="inline-flex items-center cursor-pointer">
      <input onChange={props.onChange} type="checkbox" checked={props.checked} className="sr-only peer"/>
      <div
        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  </div>
}

export default Switch;