import { useState, useEffect } from 'react';

const useDoctors = () => {
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		fetch('/doctors_db.json')
			.then((response) => response.json())
			.then((data) => setDoctors(data));
	}, []);

	return {
		doctors,
	};
};

export default useDoctors;
