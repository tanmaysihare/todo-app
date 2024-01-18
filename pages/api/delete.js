// pages/api/delete.js

import { MongoClient, ObjectId } from "mongodb";

const deleteRequest = async (req, res) => {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query; // Assuming you are passing the ID as a query parameter
      const newId = new ObjectId(id);
      const client = await MongoClient.connect('mongodb+srv://my-todo-list:mytodolist@cluster0.tko8o8o.mongodb.net/TODO-LIST?retryWrites=true&w=majority');
      const db = client.db();
      const todoCollection = db.collection('todoList');

      const result = await todoCollection.deleteOne({ _id: newId });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Document deleted successfully' });
      } else {
        res.status(404).json({ message: 'Document not found' });
      }

      client.close();
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default deleteRequest;
