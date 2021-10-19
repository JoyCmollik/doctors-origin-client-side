import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useDoctors from '../../hooks/useDoctors';

const DoctorInfo = () => {
	const { doctorId } = useParams();
	const { doctors } = useDoctors();
	const [doctor, setDoctor] = useState();

	useEffect(() => {
		if (doctors) {
			const doctorSearched = doctors.find(
				(doctor) => doctor.id === parseInt(doctorId)
			);
			setDoctor(doctorSearched);
		}
	}, [doctors]);

	console.log(doctor);

	return (
		<div>
			<h4>{doctorId}</h4>
		</div>
	);
};

export default DoctorInfo;
