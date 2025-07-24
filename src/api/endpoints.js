import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api";

const GET_URL = `${BASE_URL}/todos`;
const POST_URL = `${BASE_URL}/todos`;
const DELETE_URL = (id) => `${BASE_URL}/todos/${id}`;
const UPDATE_URL = (id) => `${BASE_URL}/todos/${id}/update_completed`

const get_todos = async () => {
  try {
    const response = await axios.get(GET_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

const create_todos = async(payload) =>{
  const response = await axios.post(POST_URL, payload);
  return response.data;
}

const delete_todo = async (id) =>{
  const response = await axios.delete(DELETE_URL(id))
}

const update_todo = async (id, payload) =>{
  const response = await axios.patch(UPDATE_URL(id), payload)
  return response.data;
}



export { get_todos, create_todos, delete_todo, update_todo};
