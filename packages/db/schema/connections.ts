import { pgTable, uuid, varchar, timestamp, text, pgEnum } from 'drizzle-orm/pg-core';
import { users } from './users';

export const providerEnum = pgEnum('provider', ['gmail', 'outlook']);
export const connectionStatusEnum = pgEnum('connection_status', ['active', 'expired', 'error']);

export const connections = pgTable('connections', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  provider: providerEnum('provider').notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  status: connectionStatusEnum('status').default('active').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});