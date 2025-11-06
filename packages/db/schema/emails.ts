import { pgTable, uuid, varchar, timestamp, boolean, text, jsonb } from 'drizzle-orm/pg-core';
import { connections } from './connections';

export const emails = pgTable('emails', {
  id: uuid('id').primaryKey().defaultRandom(),
  connectionId: uuid('connection_id').references(() => connections.id, { onDelete: 'cascade' }),
  threadId: varchar('thread_id', { length: 128 }).notNull(),
  messageId: varchar('message_id', { length: 128 }).notNull().unique(),
  subject: varchar('subject', { length: 1024 }),
  from: jsonb('from').notNull(),
  to: jsonb('to').notNull(),
  cc: jsonb('cc'),
  date: timestamp('date').notNull(),
  bodyPreview: text('body_preview'),
  bodyHtml: text('body_html'),
  bodyText: text('body_text'),
  isRead: boolean('is_read').default(false).notNull(),
  isStarred: boolean('is_starred').default(false).notNull(),
  labels: jsonb('labels'),
  hasAttachments: boolean('has_attachments').default(false).notNull(),
  attachments: jsonb('attachments'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});