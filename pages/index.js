import { MongoClient } from 'mongodb';
import InputForm from '@/components/InputForm';
import TodoLists from '@/components/TodoList';
const TodoList = (props) => {
 
  return (
    <div className='grid grid-flow-row auto-rows-max'>
       <div className='bg-black text-white text-center text-6xl p-5'>My ToDo List</div>
       <TodoLists todos={props.todos}/>
     
       <InputForm/>
    </div>
  )
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://my-todo-list:mytodolist@cluster0.tko8o8o.mongodb.net/TODO-LIST?retryWrites=true&w=majority'
  );
  const db = client.db();
  const todoCollection = db.collection("todoList");
  const todos = todoCollection.find().toArray();

  return {
    props: {
      todos: (await todos).map((todo) => ({
        id: todo._id.toString(),
        subject: todo.subject,
        description: todo.description,
      })),
    },
    revalidate: 1,
  };
}
export default TodoList;
