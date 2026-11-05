# GitHub Profile Finder 🔍

A simple and interactive web application that allows users to search for GitHub profiles and explore developer information using the GitHub API.

## 🚀 Live Demo

[View GitHub Profile Finder](https://aayush-shrivastav.github.io/github-Profile/)

## 📌 Features

- 🔎 Search GitHub users by username or name
- 👤 Display GitHub profile information
- 🖼️ View profile avatars
- 📊 Show followers, following, and public repositories
- 🔗 Visit GitHub profiles directly
- 📱 Responsive user interface
- ⚡ Fast development and production builds using Parcel

## 🛠️ Tech Stack

- **React.js** – UI development
- **JavaScript** – Application logic
- **CSS** – Styling
- **GitHub REST API** – Fetch GitHub user information
- **Parcel** – Bundler and development server
- **Git & GitHub** – Version control
- **GitHub Pages** – Deployment

## 📂 Project Structure

```text
github-Profile/
├── src/
│   └── components/
│       ├── body.js
│       └── header.js
├── app.js
├── index.html
├── style.css
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/aayush-shrivastav/github-Profile.git
```

### 2. Navigate to the project directory

```bash
cd github-Profile
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will run locally. Open the URL displayed in your terminal.

## 🌐 GitHub API

This project uses the GitHub REST API to retrieve public user information.

**Search GitHub users:**

```text
https://api.github.com/search/users?q=USERNAME
```

**Fetch a specific user profile:**

```text
https://api.github.com/users/USERNAME
```

Replace `USERNAME` with the GitHub username you want to search for.

## 📦 Build for Production

Generate an optimized production build:

```bash
npm run build
```

The production files will be generated inside the `dist/` directory.

## 🚀 Deployment

This project is deployed using GitHub Pages and the `gh-pages` package.

To deploy the latest changes:

```bash
npm run deploy
```

Live website:

https://aayush-shrivastav.github.io/github-Profile/

## ⚠️ API Rate Limits

GitHub limits unauthenticated API requests. If the limit is exceeded, the application may temporarily fail to fetch profile information.

Wait until the rate limit resets before making additional requests.

## 👨‍💻 Author

**Aayush Shrivastav**

- GitHub: [@aayush-shrivastav](https://github.com/aayush-shrivastav)

## 📄 License

This project is open-source and available for learning and personal use.
