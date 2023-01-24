/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import './To-Do.css';

export default function toDo() {
  const [name, setName] = useState('');
  const [list, updateList] = useState([]);
  //   const handleClick = (event) => {
  //     updateList(event.target.elements.task.value);
  //     // console.log(`worked`);
  //     console.log(event.target.elements.task.value);
  //     // const form = document.querySelector('list__box');
  //     // console.log(form);
  const targetInput = (e) => {
    setName(e.target.value);
  };
  const addList = () => {
    updateList([{ name }, ...list]);
  };
  const removeHandler = () => {
    updateList(list.filter((x) => x.id !== list.id));
  };

  return (
    <form
      className="list__main"
      onSubmit={(e) => {
        e.preventDefault();
        // handleClick();
      }}
    >
      <div className="list__box">
        <div className="list__tasks">
          <div className="list__inputs">
            <p className="list__label">Input Task</p>
            <input
              id="task"
              type="text"
              name="task"
              placeholder="Input Task Here"
              className="input__field"
              value={name}
              onChange={targetInput}
            />
          </div>
          <button className="list__btn" type="button" onClick={addList}>
            Add To List
          </button>
        </div>
        <div className="list__added">
          {list.map((list) => (
            <p key={list.id} className="list__items">
              {list.name}
              <button onClick={removeHandler} type="submit">
                X
              </button>
            </p>
          ))}
        </div>
      </div>
    </form>
  );
}
