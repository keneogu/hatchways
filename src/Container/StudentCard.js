import React from 'react'

const StudentCard = ({firstName,lastName,email,company,skill,pic,grades}) => {

	let average = grades.map(Number).reduce((x,y) => x+y) / 2;

	return (
		<div>
			<div>
				<div>
					<img src={pic} alt="profile" />
				</div>
				<h2>{firstName}</h2>
				<h2>{lastName}</h2>
				<p>{email}</p>
				<p>{company}</p>
				<p>{skill}</p>
				<p>{average}%</p>
			</div>
		</div>
	)
}

export default StudentCard;
