# PetWorld - React Project Assignment

PetWorld is a Single Page Application (SPA) built with React.js designed for pet lovers. It allows users to browse a catalog of pets, share their own pets, comment, and interact with the community.

This project was developed as a course assignment for the ReactJS module.

##  Getting Started

The project consists of a Client (React) and a Server (SoftUni Practice Server). **Both must be running locally for the application to work.**

### 1. Start the Server (Backend)
The application communicates with a REST API running on port 3030.
1. Download the [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server).
2. Open a terminal in the server directory.
3. Run `npm install` (first time only).
4. Run `node server.js`.
5. You should see "Server listening on port 3030".

### 2. Start the Client (Frontend)
1. Open the project root directory in a terminal.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Open the link shown in the terminal (usually `http://localhost:5173`).

---

##  Technologies Used

* **Library**: React.js (via Vite)
* **Routing**: React Router Dom v6
* **State Management**: Context API (for Authentication) & React Hooks
* **API Communication**: Fetch API (abstracted in a requester service)
* **Styling**: CSS Modules / External CSS

---

##  Features

### Public Part (Accessible to everyone)
* **Home Page**: Modern Hero section and a dynamic list of the **Latest 3 Pets** (Bonus feature).
* **Catalog**: Displays all created pets with a dynamic **Search** functionality (Bonus feature).
* **Details**: View detailed information about a specific pet, including comments and likes count.
* **Authentication**: Login and Register forms with client-side validation.
* **404 Page**: Custom "Not Found" page for invalid URLs (Bonus feature).

### Private Part (Available for Registered Users)
* **Create Post**: Add a new pet to the catalog (with validation).
* **Edit / Delete**: Owners can manage their own records.
* **Profile Page**: A personal area displaying only the pets created by the current user.
* **Comments**: Logged-in users can write comments on any pet (Bonus interaction).
* **Likes System**: Users can like pets (visual interaction).
* **Route Guards**:
    * **AuthGuard**: Protects private routes (Create, Edit, Profile, Logout) from guests.
    * **GuestGuard**: Prevents logged-in users from accessing Login/Register pages.
    * **OwnerGuard**: Prevents non-owners from accessing the Edit page via URL manipulation.

---

##  Project Architecture

The project follows a component-based architecture with separation of concerns:

* **`src/components`**: UI Components separated by feature (Home, Catalog, Auth, etc.).
* **`src/contexts`**: Global state management (`AuthContext` for user session).
* **`src/services`**: API request handling (`petService`, `authService`, `commentService`, `likeService`).
* **`src/hooks`**: Custom hooks (`useForm` for form handling, `usePersistedState` for localStorage).
* **`src/utils`**: Helper functions.
* **`src/components/common`**: Route guards (`AuthGuard`, `GuestGuard`).

---

##  Security & Validation

* **Route Guards**: Implemented to protect private routes.
* **Owner Validation**: Edit/Delete buttons are visible only to the creator. Direct URL access to Edit is blocked for non-owners.
* **Form Validation**: Prevents submission of empty fields or invalid image URLs.
* **Data Persistence**: User session is persisted using LocalStorage.