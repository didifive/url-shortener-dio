import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/Constants'
import { URLModel } from '../database/model/URL'

export class URLController {
	public async shorten(req: Request, response: Response): Promise<void> {
		const { originURL } = req.body;
		const url = await URLModel.findOne({ originURL });
		if (url) {
			response.status(200).json(url);
			return
		}
		const hash = shortId.generate();
		const shortURL = `${config.API_URL}/${hash}`;
		const newURL = await URLModel.create({ hash, shortURL, originURL });
		response.status(201).json(newURL);
	}

	public async redirect(req: Request, response: Response): Promise<void> {
		const { hash } = req.params;
		const url = await URLModel.findOne({ hash });

		if (url) {
			response.redirect(url.originURL);
			return
		}

		response.status(404).json({ error: 'URL not found' });
	}

	public async list(req: Request, response: Response): Promise<void> {
		const url = await URLModel.find({});
		if (url) {
			response.status(200).json(url);
			return
		}
		response.status(404).json({ error: 'Not found any URL' });
	}
}
