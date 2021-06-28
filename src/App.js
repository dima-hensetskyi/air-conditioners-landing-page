import { Container } from 'react-bootstrap';
/* import { useEffect, useState } from 'react'; */

import { Routers } from './Routers';
/* import Preloader from './components/Preloader'; */

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<Container fluid className="p-0">
			{/* {loading ? <Preloader /> : <Routers />} */}
			<Routers />
		</Container>
	);
}

export default App;
