import React, { useState } from 'react';
import './Todo.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Todo = () => {

    const [texts, setText] = useState("");
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [editTodos, setEditTodo] = useState("");
    const [todos, setTodos] = useState([
        {
            id: '1',
            name: "Hello Ashish",
        },
        {
            id: '2',
            name: "Buy Mango",
        },
        {
            id: '3',
            name: "Eat Banana",
        },
        {
            id: '4',
            name: "had dinner?",
        },
        {
            id: '5',
            name: "How are you?",
        },
    ])

    const handleChange = (e) => {
        setText(e.target.value);
    }

    // Add Todo

    const AddTodo = () => {
        if (texts === "") {
            Swal.fire({
                icon: 'question',
                title: 'Oops...',
                text: 'Please Enter Todo!',
            })
        }
        else if (texts && !toggleSubmit) {
            setTodos(todos.map((currElem) => {
                if (currElem.id === editTodos) {
                    return {
                        ...currElem, name: texts
                    }
                }
                Swal.fire({
                    icon: 'success',
                    title: 'Correct',
                    text: 'Data Edited Successfully..',
                })
                return currElem
            }))
            setToggleSubmit(true);
            setText("");
        }
        else {
            const newTodo = {
                id: Date.now(),
                name: texts,
            }
            console.log(newTodo)
            setTodos([...todos, newTodo]);
            Swal.fire({
                icon: 'success',
                title: 'Correct',
                text: 'Todo Added Successfully..',
            })
            setText("")
        }
    }

    // Delete todo

    const deleteTodo = (id) => {
        const filterTodo = todos.filter((currElem) => currElem.id !== id)
        setTodos(filterTodo);
        Swal.fire({
            icon: 'success',
            title: 'Correct',
            text: 'Data Deleted Successfully..',
        })
        console.log(filterTodo)
    }


    // Edit Todo

    const editTodo = (id) => {
        const newTodo = todos.find((currElem) => {
            return currElem.id === id
        });
        console.log(newTodo);
        setToggleSubmit(false);
        setText(newTodo.name);
        setEditTodo(id);
    }

    return (
        <div className="container">
            <h2 className="text-center">Simple CRUD Operation</h2>
            <div class="input-group mb-3">
                <input type="text"
                    class="form-control shadow-none"
                    placeholder="Enter a Todo"
                    onChange={handleChange}
                    value={texts} />
                <div class="input-group-append">
                    {
                        toggleSubmit ? <span class="input-group-text"
                            id="basic-addon2"
                            type="submit"
                            onClick={AddTodo}>
                            AddTodo
                    </span> : <span class="input-group-text"
                            id="basic-addon2"
                            type="submit"
                            onClick={AddTodo}>
                            EditTodo
                    </span>
                    }
                </div>
            </div>
            <table class="table table-bordered mt-4" >
                <tbody>

                    {
                        todos.map((todo) => {
                            return (
                                <tr>
                                    <td>{todo.name}</td>
                                    <td >
                                        <i class="far fa-edit" data-toggle="tooltip" data-placement="top" title="Edit Todo" onClick={() => editTodo(todo.id)}></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i class="far fa-trash-alt" data-toggle="tooltip" data-placement="top" title="Delete Todo" onClick={() => deleteTodo(todo.id)}></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo
