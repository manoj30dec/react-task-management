import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//JSON for mannual customizatino of API
const requiredObj = [
    { user: "Manoj Soni", email: "manojsoni@gmail.com", status: 'Done', priority: "High", startDate: "01-01-2025", endDate: "10-01-2025" },
    { user: "Hanish Bhardwaj", email: "hanishbhardwaj@gmail.com", status: 'In-Progress', priority: "Medium", startDate: "01-01-2025", endDate: "11-01-2025" },
    { user: "Muskan Meghrita", email: "muskanmehrtia@gmail.com", status: 'Under-review', priority: "Low", startDate: "01-05-2025", endDate: "15-01-2025" },
    { user: "Rajesh Kumar", email: "rajeshkumar@gmail.com", status: 'Open', priority: "High", startDate: "08-01-2025", endDate: "20-01-2025" },
    { user: "Jagatjit Singh", email: "jagatjit@gmail.com", status: 'Done', priority: "Medium", startDate: "01-01-2025", endDate: "10-01-2025" },
    { user: "Jasmeet Sondhi", email: "jasmeetsondhi@gmail.com", status: 'In-progress', priority: "Low", startDate: "02-01-2025", endDate: "12-01-2025" },
    { user: "Rupesh Soni", email: "rupeshsoni@gmail.com", status: 'Under-review', priority: "Medium", startDate: "01-01-2025", endDate: "13-01-2025" },
    { user: "Deep Kumar", email: "deepkumar@gmail.com", status: 'Open', priority: "High", startDate: "07-01-2025", endDate: "14-01-2025" },
    { user: "Mukesh Gautam", email: "mukeshgautam@gmail.com", status: 'Done', priority: "Low", startDate: "10-01-2025", endDate: "15-01-2025" },
    { user: "Sushila Gautam", email: "sushilagautam@gmail.com", status: 'In-Progress', priority: "High", startDate: "01-01-2025", endDate: "10-01-2025" },
    { user: "Suraj Mehta", email: "surajmehta@gmail.com", status: 'Under-review', priority: "High", startDate: "03-01-2025", endDate: "16-01-2025" },
    { user: "Pooja Chauhan", email: "poojachauhan@gmail.com", status: 'Done', priority: "Medium", startDate: "01-01-2025", endDate: "10-01-2025" },
    { user: "Akhilesh Yadav", email: "akhileshyadav@gmail.com", status: 'In-progress', priority: "Low", startDate: "04-01-2025", endDate: "17-01-2025" },
    { user: "Narender Modi", email: "narendermodi@gmail.com", status: 'Under-review', priority: "High", startDate: "05-01-2025", endDate: "18-01-2025" },
    { user: "Lalu Prasad", email: "laluprasad@gmail.com", status: 'Done', priority: "Low", startDate: "05-01-2025", endDate: "19-01-2025" },

    { user: "Sharukh Khan", email: "sharukhkhan@gmail.com", status: 'In-progress', priority: "High", startDate: "01-01-2025", endDate: "10-01-2025" },
    { user: "Salman Khan", email: "salmankhan@gmail.com", status: 'Under-reivew', priority: "Medium", startDate: "01-01-2025", endDate: "11-01-2025" },
    { user: "Kriti Sanon", email: "kritisanon@gmail.com", status: 'Open', priority: "Low", startDate: "01-05-2025", endDate: "15-01-2025" },
    { user: "Alia Bhatt", email: "aliabhatt@gmail.com", status: 'Done', priority: "High", startDate: "08-01-2025", endDate: "20-01-2025" },
    { user: "Ranbir Kapoor", email: "ranbirkapoor@gmail.com", status: 'In-progress', priority: "Medium", startDate: "01-01-2025", endDate: "10-01-2025" },
    { user: "Kadar Khan", email: "kadarkhan@gmail.com", status: 'Under-review', priority: "Low", startDate: "02-01-2025", endDate: "12-01-2025" },
    { user: "Anupam Kher", email: "anumpamkher@gmail.com", status: 'Under-review', priority: "Medium", startDate: "01-01-2025", endDate: "13-01-2025" },
    { user: "Ashutosh Gowarekar", email: "ashutoshgowarekar@gmail.com", status: 'Done', priority: "High", startDate: "07-01-2025", endDate: "14-01-2025" },
    { user: "Jaquiline Fernandes", email: "jaqlinefernandes@gmail.com", status: 'Open', priority: "Low", startDate: "10-01-2025", endDate: "15-01-2025" },
    { user: "Katrina Kaif", email: "katrinakaif@gmail.com", status: 'In-progress', priority: "High", startDate: "01-01-2025", endDate: "10-01-2025" },
    { user: "Jacky Shroff", email: "jackyshroff@gmail.com", status: 'Under-reivew', priority: "High", startDate: "03-01-2025", endDate: "16-01-2025" },
    { user: "Anil Kapoor", email: "anilkapoor@gmail.com", status: 'Open', priority: "Medium", startDate: "01-01-2025", endDate: "10-01-2025" },
    { user: "Jitendra", email: "jitendra@gmail.com", status: 'Done', priority: "Loa", startDate: "04-01-2025", endDate: "17-01-2025" },
    { user: "Rajiv Nain", email: "rajivnain@gmail.com", status: 'Done', priority: "High", startDate: "05-01-2025", endDate: "18-01-2025" },
    { user: "Manish Singh", email: "manishsingh@gmail.com", status: 'Done', priority: "Low", startDate: "05-01-2025", endDate: "19-01-2025" },
]
// Async thunk to fetch data
export const fetchTaskList = createAsyncThunk("task/fetchTaskList", async () => {
    const response = await axios.get("https://dummyjson.com/todos");
    // merging new response as per requirement
    const newReponse = response.data.todos.map((item, index) => {
        const newItem = requiredObj[index];
        return { ...item, ...newItem }
    })
    return newReponse;
});
// Async thunk for deleting a task
export const deleteTaskFromApi = createAsyncThunk(
    "tasks/deleteTaskFromApi",
    async (taskId, { rejectWithValue }) => {
        try {
            await axios.delete(`https://dummyjson.com/todos/${taskId}`);
            return taskId; // Return the deleted task ID on success
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error deleting task");
        }
    }
);

const taskSlice = createSlice({
    name: "taskList",
    initialState: {
        tasksList: [],
        status: "idle",
        error: null,
    },
    reducers: {
        addTask: (state, action) => {
            console.log("add task", action.payload);
            state.tasksList.push(action.payload);
        },
        editTask: (state, action) => {
            // console.log("edit task", action.payload);
            const findIndex = state.tasksList.findIndex(task => task.id === action.payload.id);
            if (findIndex !== -1) {
                state.tasksList.splice(findIndex, 1, action.payload)
            }
        },
        deleteTask: (state, action) => {
            const taskId = action.payload; // Extract task ID from the action payload
            state.tasksList = state.tasksList.filter(task => task.id !== taskId);
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTaskList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTaskList.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.tasksList = action.payload;
            })
            .addCase(fetchTaskList.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error?.message || "Something went wrong";
            });
    },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
