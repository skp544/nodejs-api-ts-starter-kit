## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- TypeScript
- Express.js
- Prisma ORM

# <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/skp544/nodejs-api-ts-starter-kit.git
cd nodejs-api-ts-starter-kit
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Configuration**
To initialize the prisma according to your database, run the following command:

For MongoDB:

```bash
npx prisma init --datasource-provider mongodb
```

For PostgreSQL:

```bash
npx prisma init --datasource-provider postgresql
```

For MySQL:

```bash
npx prisma init --datasource-provider mysql
```

**Database Configuration**
Update the `.env` file with your database connection details.

```env
DATABASE_URL="your_database_connection_string"
```

Make sure to replace `your_database_connection_string` with your actual database connection string.

Additionally, you can set the `PORT` variable to specify the port on which the server will run.

```env
PORT=3000 or any other port you prefer
```

**Running the Project**

```bash
npm run dev
```

This command will start the development server. You can access the API at `http://localhost:3000`.
