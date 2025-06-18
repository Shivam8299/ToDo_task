import React, { useState } from "react";
import { X } from "lucide-react";

function Todo() {
  const [item, setItem] = useState("");
  const [inputItem, setInputItem] = useState([]);
  const listItem = () => {
    setInputItem((oldvalue) => {
      return [...oldvalue, item];
    });
    setItem("");
  };

  const deleteItem = (indexToDelete) => {
    setInputItem((oldValue) =>
      oldValue.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="bg-emerald-100 h-screen pt-32">
      <div className="bg-white h-80 w-80 rounded-xl border mx-auto my-auto">
        <h1 className="text-3xl bg-cyan-300 mt-3 text-white p-1 text-center">
          ToDo List
        </h1>
        <div className="mt-8">
          <input
            onChange={(e) => setItem(e.target.value)}
            value={item}
            className=" text-xl  pl-3 py-1 focus:ring-gray-600 w-40 mr-4 rounded border-1 border-black ml-8"
            type="text"
            placeholder="add new items"
          />
          <button
            onClick={listItem}
            className="text-sm py-1 px-4 bg-blue-500 cursor-pointer text-white rounded"
          >
            Add
          </button>
          <div>
            <ol className="mt-4 mb-3 pl-8">
              {inputItem.map((itemValue, index) => {
                return (
                  <div key={index} className="flex">
                    <button onClick={() => deleteItem(index)}>
                      <X className="w-5 h-5 p-1 rounded-full mr-1  bg-blue-300 cursor-pointer hover:bg-red-600 text-white" />
                    </button>
                    <li className="text-xl">{itemValue}</li>
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
