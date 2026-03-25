import axios from "axios";

export const contactService = {
  transmitLead: async (data: { name: string; email: string; message: string }) => {
    // Look how incredibly clean this is now. No full URL needed.
    const response = await axios.post("/api/contact", data);
    return response.data;
  },
};