# Unhandled Error in Asynchronous Express.js Route

This repository demonstrates a common issue in Node.js applications using Express.js: unhandled errors in asynchronous operations within routes.  The server crashes silently without providing any helpful logs. 

The `bug.js` file contains the problematic code that creates this issue. The `bugSolution.js` offers a solution for robust error handling within asynchronous Express.js middleware and routes.

## Problem

The primary problem is that an error thrown inside a `setTimeout` callback is not caught, leading to a server crash and a lack of informative error messages.  Asynchronous code in Node.js requires careful error handling to avoid this type of silent failure.

## Solution

The solution involves using appropriate `try...catch` blocks around the asynchronous operation and providing centralized error handling using error-handling middleware in Express.js.