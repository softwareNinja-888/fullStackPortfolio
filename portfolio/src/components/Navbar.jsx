import { Profile } from './helper/Profile'


function NavLinks({link="Link Name",href="/",img='/placeholder.svg'}){
	return (
		<>
			<a href={href} title="" className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group">
      			{img}
                {link}
            </a>
		</>
	)
}

export function Navbar({}){

	const place =   <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
	const placeholder = <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>

	const Links = [
		{id:0,name:'Home',href:'/',img:place},
		{id:1,name:'About',href:'/',img:placeholder},
		{id:2,name:'Projects',href:'/',img:place},
		{id:3,name:'Stack',href:'/',img:placeholder},
		{id:4,name:'Contact',href:'/',img:place},
		{id:5,name:'Instagram',href:'/',img:placeholder},
	]

	return (
		<>
	        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white rounded-2xl">
	            <Profile/>

	            <div className="px-4 mt-8">
	                <label for="" className="sr-only"> Search </label>
	                <div className="relative">
	                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
	                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
	                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
	                        </svg>
	                    </div>

	                    <input type="search" name="" id="" className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" placeholder="Search here" />
	                </div>
	            </div>

	            <div className="px-4 mt-6">
	                <hr className="border-gray-200" />
	            </div>

	            <div className="flex flex-col flex-1 px-3 mt-6">
	                <div className="space-y-4">
	                    <nav className="flex-1 space-y-2">
	                     {Links.map(link=>{
	                     	return <NavLinks link={link.name} href={link.href} img={link.img} />
	                     })}
	                    </nav>

	                    <hr className="border-gray-200" />

	                </div>

	                <div className="pb-4 mt-20">
	                    <button type="button" className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100">
	                        <img className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png" alt="" />
	                        Jacob Jones
	                        <svg className="w-5 h-5 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
	                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
	                        </svg>
	                    </button>
	                </div>
	            </div>
	        </div>
		</>
	)
}