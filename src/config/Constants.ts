require('dotenv').config();

let PORT;
if (process.env.PORT) {
	PORT = `:${process.env.PORT}`
}

export const config = {
	API_URL: `${process.env.URL}${PORT}`,
	MONGO_CONNECTION:	process.env.MONGO_STRING_CONN,
}