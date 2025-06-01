import TiptapEditor from '@/components/tiptapEditor/TipTapEditor';

export default async function NotesHome({ params }: { params: Promise<{ noteSlug: string }> }) {
	const { noteSlug } = await params;

	return (
		<div>
			<TiptapEditor noteId={noteSlug} />
		</div>
	);
}
