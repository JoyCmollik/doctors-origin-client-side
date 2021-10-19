import { useState, useEffect } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();

	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { displayName, email, photoURL } = user;
				setUser({ displayName, email, photoURL });
			} else {
				setUser({});
			}
			setIsLoading(false);
		});

		return () => unsubscribe;
	}, []);

	const handleSignOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return {
		user,
		error,
		isLoading,
		setIsLoading,
		googleSignIn,
		handleSignOut,
	};
};

export default useFirebase;
