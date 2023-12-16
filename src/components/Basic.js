import React, { useState } from "react";

const Basic = () => {
  const [texts, setText] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ashish",
    },
    {
      id: 2,
      name: "Harshal",
    },
    {
      id: 3,
      name: "Keshav",
    },
  ]);

  //   Add Todo

  const AddTodo = () => {
    if (texts === "") {
      alert("Please add Todo...");
    } else {
      const newTodo = {
        id: Date.now(),
        name: texts,
      };
      setData([...data, newTodo]);
      setText("");
    }
  };

  // Delete Todo
  const deleteTodo = (id) => {
    const filterTodo = data.filter((currElem) => currElem.id !== id);
    setData(filterTodo);
  };

  return (
    <div className="container">
      <div class="input-group mb-3 mt-3">
        <input
          type="text"
          class="form-control shadow-none"
          placeholder="Add Todos"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setText(e.target.value)}
          value={texts}
        />
        <div class="input-group-append">
          <button onClick={AddTodo}>Add Todo</button>
        </div>
      </div>

      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">My Tasks</th>
            <th scope="col ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => {
            return (
              <tr>
                <td>{dat.name}</td>
                <td>
                  <i
                    class="fa fa-trash-o"
                    onClick={() => deleteTodo(dat.id)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Basic;
