# React Component Library – Lab Project

## Description

This project is my beginner-friendly React + TypeScript component library. I created a few simple UI components to practice how props, TypeScript interfaces, and component composition work in real projects. The goal of this lab is to help me understand how to build small reusable pieces of UI that can be used again and again in different parts of an app.

Think of this like the first steps toward building your own mini “design system” or reusable toolkit.

## ✨ What This Project Helped Me Learn

* While building this project, I got practice with:

* Making React components from scratch

* Writing TypeScript interfaces to control what props a component should accept

* Handling optional props, children, and different prop combinations

* Combining multiple components to build bigger UI sections

* Organizing my files and writing simple documentation so other developers can understand how to use the components

* This lab helped me understand how React and TypeScript work together in a practical way rather than just theory.

## 📁 Project Structure (Simple Breakdown)
src/
  components/
    AlertBox/
      AlertBox.tsx
      AlertBox.test.tsx
    UserProfileCard/
      UserProfileCard.tsx
      UserProfileCard.test.tsx
    ProductDisplay/
      ProductDisplay.tsx
      ProductDisplay.test.tsx
  types/
    index.ts
README.md
package.json
tsconfig.json


components/ → all the components I built

types/ → TypeScript interfaces shared across the project

tests → basic tests for each component

## 🧰 Tools & Technologies

This project uses:

React (for UI components)

TypeScript (for typing and prop interfaces)

Vite (fast development setup)

Node.js + npm

TailwindCSS (optional, just for styling in examples)

It works on Windows, macOS, and Linux.

## 🚀 How to Run This Project (Beginner Steps)
1. Download the project
git clone <repository-url>

2. Open the folder
cd component-library

3. Install everything the project needs
npm install

4. Start the development server
npm run dev


Now open the URL Vite gives you (usually http://localhost:5173).

## 🧩 Lab Components

During the lab, I built three main components:

AlertBox – shows success/error/warning/info messages

UserProfileCard – displays information about a user

ProductDisplay – shows product details like name, price, stock, etc.

Each one uses TypeScript interfaces from the /types folder to control what props they accept.

## 📝 What I Had to Do in the Lab

* Build each component using React + TypeScript

* Define props using interfaces

* Handle optional props and children

* Test different prop combinations

* Show examples of how to use each component

* Write a reflection (separate from this README)

* Push everything to GitHub

## 📚 Why This Lab Matters (Beginner Explanation)

In real frontend jobs, developers don’t rebuild UI elements from scratch every time.
Instead, teams use a shared component library so everything looks consistent and works the same way.

This lab gave me a chance to practice:

Thinking about reusable code

Organizing files like a real project

Making components that anyone on the team could use

Writing props that make sense and prevent errors with TypeScript

## ✔ Requirements Checklist

 Components created

 TypeScript interfaces added

 Props handled correctly

 Tests written

 Example usage included

 README completed

 Project runs with npm run dev