import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './components/MainPage';
import Preloader from './components/Preloader';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const onEndLoading = () => setLoading(false);
	useEffect(() => {
		const preloader = setTimeout(onEndLoading, 2000);
		return () => {
			clearTimeout(preloader);
		};
	}, []);
	return (
		<Container fluid className="p-0">
			{loading ? <Preloader /> : <MainPage />}
		</Container>
	);
}

export default App;
