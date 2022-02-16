
import { http } from '../http';


const path = (str) => ("/api/v1/manage-participants/functions" + str)

export const ManageParticipants = {
  functions: async () => {
    const response = await http.get(path(""));
    return response.data;
  },

  functionInfoById: async (id) => {
    const response = await http.get(path(`/${id}`));
    return response.data;
  },
}

