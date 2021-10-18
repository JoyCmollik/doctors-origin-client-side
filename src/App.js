import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';

function App() {
	return (
		<div className='bg-secondary h-screen flex flex-col justify-between'>
			<Router>
				<Header />
				<div
					className='container mx-auto'
					style={{ paddingTop: '68px' }}
				>
					<Switch>
						<Redirect exact from='/' to='/home' />
						<Route path='/home'>
							<Home />
						</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
