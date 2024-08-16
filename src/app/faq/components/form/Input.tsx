import {ChangeEventHandler, ReactNode} from "react";

export type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  type: 'text';
  icon?: ReactNode;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: InputProps) => {
  return <div className="relative">
    <input
      type="text"
      className="w-full px-4 py-3 pr-12 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder="Search FAQs..."
      id="search-input"
      value={props.value}
      onChange={props.onChange}
    />
    {
      props.icon
        ? <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          {
            props.icon
          }
        </div>
        : <></>
    }
  </div>
}

export default Input;