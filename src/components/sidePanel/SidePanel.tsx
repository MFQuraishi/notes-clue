'use client';

import { useLayoutState } from '@/stateManagement/layoutStates';

export default function SidePanel() {
	const { isSidebarOpen } = useLayoutState((state) => state);
	return (
		<aside className={`text-white bg-primary rounded-br-xl h-screen rounded-tr-xl duration-1000 ${isSidebarOpen ? 'w-[23vw]' : 'w-0'}`}>
			<div className={`w-[23vw] ${isSidebarOpen ? 'opacity-100 duration-500 delay-500' : 'opacity-0'}`}>hello world</div>
		</aside>
	);
}
