import {MongoClient} from "mongodb";

async function handler(req,res){
   
    if(req.method === 'POST'){
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://my-todo-list:mytodolist@cluster0.tko8o8o.mongodb.net/TODO-LIST?retryWrites=true&w=majority');
        const db = client.db();
        const todoCollection = db.collection('todoList');
        const result = await  todoCollection.insertOne(data);
        client.close();
        res.status(201).json({message: 'Meetup inserted'});
    }
}

export default handler;