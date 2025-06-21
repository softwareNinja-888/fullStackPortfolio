export function Profile({name="Bayanda Dlamini", position="Full Stack Developer",img='profile.jpg'}){
	return (
		<>
			<div className="flex flex-row justify-center items-center  gap-3">
				<div className="">
					<img src={img} alt="profile picture" className="w-13 h-16 rounded-full"/>
				</div>
				<div className="flex flex-col">
					<div className="text-md">{name}</div>
					<div className="text-xs">{position}</div>
				</div>
			</div>
		</>
	)
}