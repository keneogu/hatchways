import React from 'react'

const StudentCard = ({firstName,lastName,email,company,skill,pic,grades}) => {

	let average = grades.map(Number).reduce((x,y) => x+y) / 2;

	return (
		<div className="card-container">
			<div className="inner-card">
				<div className="img-contain">
					<img src={pic} alt="profile" className="img"/>
				</div>
				<div className="text-contain">
					<div className="h-contain">
						<h2 className="h-2">{firstName}</h2>
						<h2 className="h-2-1">{lastName}</h2>
					</div>
					<p className="p-tag">Email: {email}</p>
					<p className="p-tag">Company: {company}</p>
					<p className="p-tag">Skill: {skill}</p>
					<p className="p-tag">Average: {average}%</p>
				</div>
			</div>
		</div>
	)
}

export default StudentCard;
