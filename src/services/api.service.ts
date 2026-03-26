import axios from "axios";

export const contactService = {
  transmitLead: async (data: { name: string; email: string; message: string }) => {
   
    const response = await axios.post("/api/contact", data);
    return response.data;
  },
};