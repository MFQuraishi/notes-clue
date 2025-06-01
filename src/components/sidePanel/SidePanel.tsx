'use client';

import { useLayoutState } from '@/stateManagement/layoutStates';
import { FaNotesMedical } from 'react-icons/fa';
import PrimaryButton from '../Button/PrimaryButton';
import { useNotesListStore } from '@/stateManagement/notesListStates';
import { getHeadingFromTipTapJSON } from '@/utils/tiptapHelpers';
import { useEffect } from 'react';

export default function SidePanel() {
	const { isSidebarOpen, setIsSidebarOpen } = useLayoutState((state) => state);
	const { addNote } = useNotesListStore();
	const { notes } = useNotesListStore((state) => state);
	const notesList = Object.values(notes || {});

	useEffect(() => {
		if (notesList.length > 0 && !isSidebarOpen) {
			setIsSidebarOpen(true);
		}
	}, [notesList, isSidebarOpen, setIsSidebarOpen]);

	return (
		<aside className={`text-white bg-primary rounded-br-xl h-screen rounded-tr-xl duration-1000 ${isSidebarOpen ? 'w-[23vw]' : 'w-0'}`}>
			<div className={`w-[23vw] ${isSidebarOpen ? 'opacity-100 duration-700 delay-500' : 'opacity-0'}`}>
				<div className='flex flex-row items-center justify-between p-2 pb-3 border-b border-solid border-accent'>
					<h3 className='font-semibold text-xl'>Notes Clue app</h3>
					<PrimaryButton onClick={() => addNote({})} ImageComponent={FaNotesMedical} />
				</div>
				<div>
					{notesList.map((note) => {
						return <div key={note._id}>{getHeadingFromTipTapJSON(note.content)}</div>;
					})}
				</div>
			</div>
		</aside>
	);
}
