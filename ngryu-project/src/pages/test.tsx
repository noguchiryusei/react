import { generateClient } from 'aws-amplify/api';
import { createBlog, updateBlog, deleteBlog } from '../graphql/mutations';

const client = generateClient();

const todo = {
  name: "value1",
};

async function createNewBlog() {
  try {
    const todo = {
      name: "value1",
    };

    const newTodo = await client.graphql({
      query: createBlog,
      variables: { input: todo }
    });
    
    console.log('New Todo:', newTodo);
  } catch (error) {
    console.error('Error creating new todo:', error);
  }
}
createNewBlog()