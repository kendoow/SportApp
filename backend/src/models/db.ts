import { Pool } from "pg";
import initialTables from "query";

const createDb = () => {
	const user = process.env.DB_USER;
	const password = process.env.DB_PASSWORD;
	const host = 'postgres';
	const port = process.env.DB_PORT || 5432;
	const database = process.env.DB_NAME;
	console.log(user, password, host, port,)
	if (!user || !password || !host || !port || !database) {
		throw new Error("connection Error");
	}
	const pool = new Pool({
		user,
		password,
		host,
		port: +port,
		database,
	});

	initialTables(pool);
	return pool;
};

export default createDb;
