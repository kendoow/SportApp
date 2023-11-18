import { Pool } from "pg"

const UserSchema = (pool: Pool) => {
    pool.query(
        "create TABLE if not exists user_account(\n\
	  id SERIAL PRIMARY KEY,\n\
	  name VARCHAR(255),\n\
	  email VARCHAR(255),\n\
	  password VARCHAR(255)\n\
  );"
    )
}

export default UserSchema
