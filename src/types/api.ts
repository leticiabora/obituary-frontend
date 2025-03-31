import { JWTPayload } from 'jose';

export interface ApiError {
  message?: string;
  error?: string;
}

interface BaseSession extends JWTPayload {
  isAdmin?: boolean;
}

export type Session = BaseSession | null;