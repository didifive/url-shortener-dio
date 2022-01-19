require('dotenv').config();

export const config = {
	API_URL: `${process.env.URL}:${process.env.PORT}`,
	MONGO_CONNECTION:	process.env.MONGO_STRING_CONN,
}
