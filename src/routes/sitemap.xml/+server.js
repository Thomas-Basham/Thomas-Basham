import fs from 'fs';

export const GET = async () => {
	const sitemap = fs.readFileSync('sitemap.xml', 'utf-8');

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
