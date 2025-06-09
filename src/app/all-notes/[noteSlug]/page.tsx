'use client';

import TiptapEditor from '@/components/tiptapEditor/TipTapEditor';
import { useNotesListStore } from '@/stateManagement/notesListStates';
import { useParams } from 'next/navigation';

export default function NotesHome() {
	const { noteSlug }: { noteSlug: string } = useParams();
	const { notes } = useNotesListStore();

	return (
		<div>
			<TiptapEditor content={notes?.[noteSlug]?.content} noteId={noteSlug} />
		</div>
	);
}
