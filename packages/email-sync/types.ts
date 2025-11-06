export interface EmailData {
  threadId: string;
  messageId: string;
  subject: string;
  from: { name: string; email: string };
  to: { name: string; email: string }[];
  cc?: { name: string; email: string }[];
  date: Date;
  bodyPreview: string;
  bodyHtml?: string;
  bodyText?: string;
  isRead: boolean;
  isStarred: boolean;
  labels?: string[];
  hasAttachments: boolean;
  attachments?: { filename: string; mimeType: string; size: number }[];
}