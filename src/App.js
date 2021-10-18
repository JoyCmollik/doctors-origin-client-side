import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';

function App() {
	return (
		<div className='bg-secondary'>
			<Router>
				<Header />
				<Switch>
					<Redirect from='/' to='/home' />
					<Route path='/home'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
