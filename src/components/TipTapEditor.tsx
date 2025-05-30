'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TiptapEditor = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: `
			<h1>Start with a nice heading</h1>
			<p>Page content will go here...</p>
		`,
		editorProps: {
			attributes: {
				class: 'text-primary-text border-solid border-2 border-white p-4 rounded-xl',
			},
		},
	});

	return <EditorContent className='' editor={editor} />;
};

export default TiptapEditor;
