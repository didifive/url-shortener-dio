require('dotenv').config();

let URL = process.env.URL;
if (URL = 'http://localhost') {
	let PORT;
	if (process.env.PORT) {
		PORT = `:${process.env.PORT}`
	}
	URL += PORT;
}

export const config = {
	API_URL: `${URL}`,
	MONGO_CONNECTION:	process.env.MONGO_STRING_CONN,
}