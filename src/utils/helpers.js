// Format date to display like "Monday, January 1"
export const formatEventDate = (dateString) => {
  const options = { weekday: "long", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

// Capitalize first letter of each word
export const capitalize = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Validate email format
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
