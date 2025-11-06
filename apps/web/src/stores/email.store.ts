import { create } from 'zustand';

interface Email {
  id: string;
  from: string;
  subject: string;
  snippet: string;
  date: Date;
  read: boolean;
}

interface EmailState {
  emails: Email[];
  selectedEmail: Email | null;
  fetchEmails: () => Promise<void>;
  selectEmail: (email: Email) => void;
}

export const useEmailStore = create<EmailState>((set) => ({
  emails: [],
  selectedEmail: null,
  fetchEmails: async () => {
    const res = await fetch('http://localhost:4000/api/emails');
    const emails = await res.json();
    set({ emails });
  },
  selectEmail: (email) => set({ selectedEmail: email }),
}));