import React, { useState } from 'react'

type Props = {
    onAdd: (todo: any) => void;
}

const AddTodo = (props: Props) => {
    const [value, setValue] = useState("");
    const onHandleChange = (e: any) => {
        setValue(e.target.value)
    }
    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fakeObject = {
            id: 11,
            title: value,
            completed: true
        }
        props.onAdd(fakeObject)
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <h2>Thêm sản phẩm</h2>
                <input type="text" placeholder='Nhập tên sản phẩm' onChange={onHandleChange}/> <br />
                <button>Thêm mới</button>
            </form>
            <hr />
        </div>
    )
}

export default AddTodo