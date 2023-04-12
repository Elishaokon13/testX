import Head from 'next/head';

export default function Seo({ title, description, keywords, author, meta }) {
	const metaData = [
		{ name: 'title', content: title },
		{ name: 'description', content: description },
		{ name: 'keywords', content: keywords },
		{ name: 'robots', content: 'index, follow' },
		{
			httpEquiv: 'Content-Security-Policy',
			content: "default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *",
		},
		{ httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
		{ name: 'language', content: 'English' },
		{ name: 'author', content: author },
		{ itemProp: 'name', content: title },
		{ itemProp: 'description', content: description },
		{ name: 'twitter:card', content: 'summary' },
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:description', content: description },
		{ name: 'og:title', content: title },
		{ name: 'og:description', content: description },
		{ name: 'og:site_name', content: title },
		{ name: 'og:type', content: 'website' },
	].concat(meta);

	return (
		<Head>
			<title>{title}</title>
			{metaData.map((item, i) => (
				<meta
					key={i}
					name={Object.entries(item)[0][1]}
					content={Object.entries(item)[1][1]}
				/>
			))}
		</Head>
	);
}

Seo.defaultProps = {
	title: 'Mintyplex | Pioneering the future of NFT2.0',
	description:
		'Mintyplex is building a truly connected, empowering, and sustainable NFT ecosystem for creators, collectors, and enthusiasts on CoreDAO.',
	keywords:
		'Opensea, NFT2.0, Mintyplex, Dynastypad, Pioneer, Mint, List,',
	author: 'Mintyplex',
	lang: `en`,
	meta: [],
};
