# TV-WebApp

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-5.90.2-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.12.2-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

A modern Smart TV web application featuring spatial navigation, built with React and TypeScript. Navigate seamlessly using arrow keys or TV remote controls through a Netflix-style interface powered by TMDB API.

## Screenshots

<p align="center">
  <img width="800" alt="Home Page" src="https://github.com/user-attachments/assets/85b969cc-4b33-4e7d-8494-99648be31c6a" />
</p>

<p align="center">
  <img width="800" alt="Movies Page" src="https://github.com/user-attachments/assets/28868645-5b85-4bd0-b9a4-c5a5f48d79d9" />
</p>

<p align="center">
  <img width="800" alt="Details Page" src="https://github.com/user-attachments/assets/9e856632-f2b3-4c97-85bf-b2c6777a3223" />
</p>

## Features

- **Spatial Navigation** - Full keyboard/remote control navigation optimized for Smart TV interfaces
- **TMDB Integration** - Real-time movie and TV show data from The Movie Database API
- **Multiple Content Categories** - Now Playing, Trending Movies, Popular TV Shows, Upcoming Movies
- **Dynamic Hero Section** - Background updates based on focused content
- **Detail Views** - Comprehensive movie/show information with cast and crew details
- **Focus Memory** - Remembers last focused element when navigating between pages
- **Smooth Scrolling** - Horizontal scroll follows focus for seamless browsing
- **Responsive TV UI** - Designed for large screen displays

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | UI Framework |
| TypeScript | 5.9.3 | Type Safety |
| Vite | 7.1.7 | Build Tool |
| styled-components | 6.1.19 | Styling |
| norigin-spatial-navigation | 2.3.0 | TV Navigation |
| TanStack React Query | 5.90.2 | Data Fetching |
| React Router DOM | 7.9.4 | Routing |
| Axios | 1.12.2 | HTTP Client |

## Demo

**Live Demo:** [https://nemanja5200.github.io/TV-WebApp/](https://nemanja5200.github.io/TV-WebApp/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- TMDB API Key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nemanja5200/TV-WebApp.git
   cd TV-WebApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:5173`

## Project Structure

```
src/
├── api/                    # Axios API configuration
├── components/             # Shared components
│   ├── Card/              # Movie/TV show card component
│   ├── DisplayRow/        # Horizontal scrolling row
│   ├── Header/            # Navigation header
│   └── Layout/            # Page layout wrapper
├── constants/             # App constants and configuration
├── context/               # React context providers
├── hooks/                 # Custom React hooks
│   ├── useFocusManager   # Focus state management
│   └── useScrollOnFocus  # Auto-scroll on focus
├── pages/                 # Application pages
│   ├── Home/             # Home page with content widgets
│   ├── Movies/           # Movies browsing page
│   └── Details/          # Movie/show detail view
├── service/              # API service layer
├── style/                # Global styles
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Controls

| Key | Action |
|-----|--------|
| `Arrow Keys` | Navigate between elements |
| `Enter` | Select/Open item |
| `Backspace` | Go back (on Details page) |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TMDB_BASE_URL` | TMDB API base URL | Yes |
| `VITE_TMDB_API_KEY` | Your TMDB API key | Yes |

## Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the movie and TV show data
- [norigin-spatial-navigation](https://github.com/nicknisi/norigin-spatial-navigation) for the spatial navigation library
