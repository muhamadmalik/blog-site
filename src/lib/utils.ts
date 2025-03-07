import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dotenv from 'dotenv';

dotenv.config();


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export function truncateText(text: string, length = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiRouter = (path: string) => `${API_URL}/${path}`;
