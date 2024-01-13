import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Contact } from '../interfaces/contact.interface';
import ENV from '../../environment';
import { CONTACTS } from './contacts.mock';

export default {
    name: 'ContactService',

    async getContacts(): Promise<Contact[]> {
        try {
            const response: AxiosResponse<Contact[]> = await axios.get(`${ENV.API_URL}/persons`);
            return response.data;
        } catch (error) {
            // DUE TO LIMITATION TO ENDPOINT CALLS
            return CONTACTS;
            // OTHERWISE:
            // throw new Error(`Error fetching contacts: ${error}`);
        }
    },

    async deleteContact(id: number): Promise<void> {
        try {
            const response: AxiosResponse<{ success: boolean }> = await axios.delete(
                `${ENV.API_URL}/persons/${id}`
            );
            if (!response.data.success) {
                throw new Error(`Failed to delete contact with id ${id}`);
            }
        } catch (error) {
            throw new Error(`Error deleting contact: ${error}`);
        }
    },
};
