import axios from "axios";

// This is the only place you ever have to change your URL
const API_URL = "https://siyaf-api.onrender.com/api/v1/contact"; 

export const contactService = {
  /**
   * Transmits the lead payload to the Node.js microservice
   */
  transmitLead: async (data: { name: string; email: string; message: string }) => {
    try {
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      // Extract the beautiful Zod errors we built in the backend
      const errorMessage = error.response?.data?.error?.message || "Link Failed";
      throw new Error(errorMessage);
    }
  },
};