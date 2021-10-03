import React from "react";

export default function Counter() {
    let[value,setValue] = React.useState(0);
    const onChange = (x:number) =>{
        setValue(value + x);
    }

    return (
    <div className="custom-number-input h-10 w-32">
      <label className="w-full text-gray-700 text-sm font-semibold">
        Persons
      </label>
      <div className="content-counter">
        <button
          onClick={()=>onChange(-1)}
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="text"
          className="customize-input-number"
          value={value}
          readOnly
        ></input>
        <button
        onClick={()=>onChange(1)}
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
