import { useState, useEffect } from 'react';

const useLocations = () => {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		fetch('/locations_db.json')
			.then((response) => response.json())
			.then((data) => setLocations(data));
	}, []);

	return {
		locations,
	};
};

export default useLocations;
