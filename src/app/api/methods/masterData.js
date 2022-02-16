
import { createAsyncThunk, } from "@reduxjs/toolkit";
import { http } from '../http';


const path = (str) => ("/api/v1/master-data/dictionaries" + str)

export const MasterData = {
  getAll: async () => {
    const response = await http.get(path(""));
    return response.data;
  },

  import: async (code, file) => {
    const response = await http.put(path(`/${code}/import`), { file });
    return response.data;
  },
}



// export const addAllToMyList = createAsyncThunk(
//   "myList/addAllToMyList",
//   async (id) =>
//     await axios
//       .put(`${window.config.baseUrl}/shared-list/${id}`, null)
//       .then((response) => response.data)
// );
