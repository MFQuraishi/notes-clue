import { NoteIdType } from '@/stateManagement/types/notesListTypes';
import { redirect, RedirectType } from 'next/navigation';

type PossiblePaths = '/all-notes';

type AdditiolParamsType = {
	noteId?: NoteIdType;
};

export default function navigate(path: PossiblePaths, type: RedirectType = RedirectType.push, additionalParams?: AdditiolParamsType) {
	if (path === '/all-notes') {
		redirect(`${path}${additionalParams?.noteId ? '/' + additionalParams?.noteId : ''}`, type);
	}
	redirect(path, type);
}
