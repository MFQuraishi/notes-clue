'use client';

import { useLayoutState } from '@/stateManagement/layoutStates';
import { FaNotesMedical } from 'react-icons/fa';
import PrimaryButton from '../Button/PrimaryButton';

export default function SidePanel() {
	const { isSidebarOpen } = useLayoutState((state) => state);
	return (
		<aside className={`text-white bg-primary rounded-br-xl h-screen rounded-tr-xl duration-1000 ${isSidebarOpen ? 'w-[23vw]' : 'w-0'}`}>
			<div className={`w-[23vw] ${isSidebarOpen ? 'opacity-100 duration-700 delay-500' : 'opacity-0'}`}>
				<div className='flex flex-row items-center justify-between p-2 pb-3 border-b border-solid border-accent'>
					<h3 className='font-semibold text-xl'>Notes Clue app</h3>
					<PrimaryButton onClick={() => {}} ImageComponent={FaNotesMedical} />
				</div>
			</div>
		</aside>
	);
}
