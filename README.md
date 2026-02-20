# Arogya – A Women's Health & Support Platform

A safe, anonymous women's health community MVP built with React, Tailwind CSS, and Lucide-React icons.

## Features

✅ **Community Feed** - Browse questions from sisters in the community
✅ **Ask a Question** - Post questions anonymously or with your name
✅ **Category Filtering** - Filter by Periods, Hormonal Changes, Mental Health, Pregnancy, General
✅ **Doctor Badge System** - Verified health professionals have highlighted replies
✅ **Anonymous Support** - Complete anonymity option for all posts
✅ **Peer Support Replies** - Connect and support each other
✅ **Safety Disclaimer** - Important medical disclaimer in footer
✅ **Responsive Design** - Works on all devices

## Tech Stack

- **React** 18+ - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **Lucide-React** - Beautiful SVG icons

## Installation & Setup

### Prerequisites
- Node.js (v14+) and npm

### Steps

1. Clone the repository (already in the folder):
```bash
cd arogya
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── QuestionCard.jsx
│   └── ReplyCard.jsx
├── pages/
│   ├── Feed.jsx
│   ├── AskQuestion.jsx
│   ├── QuestionDetail.jsx
│   └── About.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Color Palette

- **Terracotta**: #E2725B
- **Cream**: #FFFDD0
- **Sage**: #B2AC88
- **Soft Blue**: #E0F2FE

## Features Breakdown

### Community Feed
- Display all questions with category tags
- Filter by category
- Show anonymous or named authors
- Display reply count

### Ask a Question
- Simple form with title and description
- Category selection (Periods, Hormonal Changes, Mental Health, Pregnancy, General)
- Anonymous posting toggle
- Optional username if posting with name

### Question Detail
- Full question view with category and timestamp
- All supportive replies
- Reply form for peer support

### Doctor Badge System
- Verified health professionals show "Verified Health Professional" badge with checkmark
- Replies from doctors are highlighted with soft blue background
- Maintains peer-first approach

## Data Management

Currently using React's `useState` hook for local state management. All data is stored in memory and will reset on page refresh. Test by:

1. **Adding a question** → Go to "Ask a Question" page and submit
2. **See it in feed** → It will appear immediately at the top
3. **Reply to question** → Click on any card to view detail and add replies
4. **Filter questions** → Use category buttons to filter the feed

**Future Enhancement**: Connect to backend API for persistent data storage.

## Important Disclaimer

Arogya is for peer support and information only. This is not a substitute for professional medical advice. In an emergency, please contact local health services immediately.

## License

See LICENSE file for details.