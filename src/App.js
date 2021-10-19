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
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/About/About';
import PrivateRoute from './Pages/Shared/PrivateRoute';
import Doctors from './Pages/Doctors/Doctors';
import DoctorInfo from './Pages/Doctors/DoctorInfo';
import Register from './Register/Register';

function App() {
	return (
		<AuthProvider>
			<div className='bg-light min-h-screen flex flex-col justify-between'>
				<Router>
					<Header />
					<div style={{ paddingTop: '68px' }}>
						<Switch>
							<Redirect exact from='/' to='/home' />
							<Route path='/home'>
								<Home />
							</Route>
							<Route path='/doctors'>
								<Doctors />
							</Route>
							<PrivateRoute path='/info/:doctorId'>
								<DoctorInfo />
							</PrivateRoute>
							<Route path='/login'>
								<Login />
							</Route>
							<Route path='/register'>
								<Register />
							</Route>
							<Route path='*'>
								<NotFound />
							</Route>
						</Switch>
					</div>
					<Footer />
				</Router>
			</div>
		</AuthProvider>
	);
}

export default App;
