import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// created by chatgpt
export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

// created by chatgpt
export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${time} - ${formattedDate}`;
}
export function parseLocalStorageItem(itemName: string) {
  // Retrieve the item from localStorage
  const item = localStorage.getItem(itemName);

  // Check if the item exists
  if (item === null) {
    return null; // Item not found
  }

  try {
    // Parse the item's content
    const parsedItem = JSON.parse(item);
    return parsedItem;
  } catch (error) {
    console.error('Error parsing localStorage item:', error);
    return null; // Parsing error
  }
}
