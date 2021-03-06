import Head from 'next/head';
import AboutComponent from '../components/AboutComponent';
import ContactComponent from '../components/ContactComponent';
import DownloadComponent from '../components/DownloadComponent';
import ServiceComponent from '../components/ServiceComponent';
import TopComponent from '../components/TopComponent';
const Index = () => {
	return (
		<>
			<Head>
				<title>Landing Page</title>
				<link rel='icon' href='favicon.png' />
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
					integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
					crossorigin='anonymous'
				/>
			</Head>
			<main>
				<TopComponent />
				<ServiceComponent />
				<AboutComponent />
				<DownloadComponent />
				<ContactComponent />
			</main>
			<footer className='footer'>
				<h5>UPTECH &copy; Tom Hacker</h5>
				<script
					src='https://unpkg.com/react/umd/react.production.min.js'
					crossorigin></script>

				<script
					src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
					crossorigin></script>

				<script
					src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
					crossorigin></script>
			</footer>
		</>
	);
};

export default Index;
