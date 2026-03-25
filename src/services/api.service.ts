import axios from "axios";

/
const API_URL = "https://siyaf-api.onrender.com/api/v1/contact"; 

export const contactService = {
  
  transmitLead: async (data: { name: string; email: string; message: string }) => {
    try {
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {

      const errorMessage = error.response?.data?.error?.message || "Link Failed";
      throw new Error(errorMessage);
    }
  },
};