'use client';

import { useLayoutState } from '@/stateManagement/layoutStates';
import { FaNotesMedical } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import PrimaryButton from '../Button/PrimaryButton';
import { useNotesListStore } from '@/stateManagement/notesListStates';
import { getHeadingFromTipTapJSON } from '@/utils/tiptapHelpers';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import navigate from '@/utils/navigationHelpers';
import NAVIGATION_PATHS from '@/constants/paths';

export default function SidePanel() {
	const { noteSlug } = useParams();

	const { isSidebarOpen, setIsSidebarOpen } = useLayoutState((state) => state);
	const { addNote, deleteNote } = useNotesListStore();
	const { notes } = useNotesListStore((state) => state);
	const notesList = Object.values(notes || {});

	useEffect(() => {
		if (notesList.length > 0 && !isSidebarOpen) {
			setIsSidebarOpen(true);
		}
	}, [notesList, isSidebarOpen, setIsSidebarOpen]);

	const handleNoteClick = (noteId: string) => {
		navigate(NAVIGATION_PATHS.allNotesPage, { pathsArray: [noteId] });
	};

	return (
		<aside className={`text-white bg-primary rounded-br-xl h-screen rounded-tr-xl duration-1000 ${isSidebarOpen ? 'w-[23vw]' : 'w-0'}`}>
			<div className={`w-[23vw] ${isSidebarOpen ? 'opacity-100 duration-700 delay-500' : 'opacity-0'}`}>
				<div className='flex flex-row items-center justify-between p-2 pb-3 border-b border-solid border-accent'>
					<h3 className='font-semibold text-xl'>Notes Clue app</h3>
					<PrimaryButton onClick={() => addNote({})} ImageComponent={FaNotesMedical} />
				</div>
				<div className='px-4 py-4'>
					{notesList.map((note) => {
						return (
							<div
								onClick={(event) => {
									if (event.target === event.currentTarget) {
										handleNoteClick(note._id);
									}
								}}
								className={`px-4 w-full hover:brightness-120 cursor-pointer py-2 group items-center ${
									noteSlug === note._id ? 'bg-secondary' : 'bg-primary-2'
								} mb-3 rounded-xl flex justify-between`}
								key={note._id}
							>
								<div className=''>{getHeadingFromTipTapJSON(note.content)}</div>
								<PrimaryButton
									customContainerClass='opacity-0 group-hover:opacity-100 duration-500 !p-0.5'
									customImageClass='h-6 w-6'
									onClick={() => deleteNote(note._id)}
									ImageComponent={MdDeleteForever}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</aside>
	);
}
