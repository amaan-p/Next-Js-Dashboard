
# Next.js Dashboard App

This project is a robust and responsive dashboard application built with Next.js, Tailwind CSS, and NextAuth.js for authentication. It utilizes PostgreSQL for data management via Vercel's platform.

## Screenshots

### Login Page
![Login Page](./assets/dashboard_login.png)

### Home Page
![Home Page](./assets/dashboard_home.png)

## Features

- **Responsive Design**: Built with Tailwind CSS for a mobile-first, responsive design.
- **Authentication**: Implemented using NextAuth.js for secure and flexible authentication.
- **Dynamic Routing**: Utilizes Next.js' dynamic routing capabilities.
- **Optimized Performance**: Leverages Next.js' server-side rendering (SSR) and static site generation (SSG) for optimal performance.
- **User-Friendly UI**: Clean and intuitive user interface.

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).
- **Git**: Ensure you have Git installed. You can download it from [Git](https://git-scm.com/).

### Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install required packages**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory of the project and add the following environment variables:
   ```
    POSTGRES_URL=
    POSTGRES_PRISMA_URL=
    POSTGRES_URL_NO_SSL=
    POSTGRES_USER=
    POSTGRES_HOST=
    POSTGRES_PASSWORD=
    POSTGRES_DATABASE="verceldb"
    AUTH_SECRET=
    AUTH_URL=http://localhost:3000/api/auth
   ```

4. **Run the application**:
   Start the development server:
   ```bash
   npm run dev
   ```

   By default, Next.js will run the app on [http://localhost:3000](http://localhost:3000).

## Usage

Open your web browser and go to [http://localhost:3000](http://localhost:3000). Log in to access the dashboard and explore its features.

## Built With

- **Next.js**
- **Tailwind CSS**
- **NextAuth.js**
- **PostgreSQL** (via Vercel)

## Contributing

Contributions are welcome. Please fork this repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
