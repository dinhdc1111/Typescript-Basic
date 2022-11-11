import { useForm, SubmitHandler } from 'react-hook-form';
import { ITodo } from '../../interfaces/todo';

type Props = {
    onAdd: (todo: any) => void;
}

const AddTodo = (props: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm<ITodo>();
    const onSubmit: SubmitHandler<ITodo> = (data) => {
        props.onAdd(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Thêm sản phẩm</h2>
                <input type="text" placeholder='Nhập tên sản phẩm' {...register("title")}/> <br />
                <input type="checkbox" {...register("completed")} /> Complete
                <br />
                <button>Thêm mới</button>
            </form>
            <hr />
        </div>
    )
}

export default AddTodo