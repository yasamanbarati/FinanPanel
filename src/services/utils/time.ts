export const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);
  const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad
  const year = date.getFullYear();
  const time = date.toTimeString().split(' ')[0]; // Get time in HH:MM:SS format

  return `${day}/${month}/${year} - ${time}`;
};