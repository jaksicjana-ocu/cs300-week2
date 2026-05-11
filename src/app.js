// CS 300 - Week 2 Lab - Branch B Version
// Author: Jana Jaksic

const greet = (name, course = "CS 300") => {
  if (!name || typeof name !== "string") {
    throw new Error("Name must be a non-empty string");
  }
  return `Hello, ${name}! Welcome to ${course}.`;
};

const farewell = (name) => `See you next week, ${name}!`;

// Example usage
try {
  console.log(greet("World"));
  console.log(greet("Alex", "Application Development"));
  console.log(farewell("Alex"));
} catch (err) {
  console.error("Error:", err.message);
}