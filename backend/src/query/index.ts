import { Pool } from "pg"

import UserSchema from "./user.query"
import TokenSchema from "./token.query"

const initialTables = (pool: Pool) => {
    UserSchema(pool)
    TokenSchema(pool)
}

export default initialTables
