import { Pool } from "pg";

const TokenSchema = (pool: Pool) => {
	pool.query(
		"create TABLE if not exists tokens(\n\
        id SERIAL PRIMARY KEY,\n\
        refreshToken VARCHAR(255),\n\
        token_id INTEGER,\n\
        FOREIGN KEY(token_id) REFERENCES user_account(id)\n\
    );"
	);
};

export default TokenSchema;
