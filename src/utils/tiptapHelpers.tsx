import { JSONContent } from '@tiptap/react';

export function getHeadingFromTipTapJSON(json: JSONContent) {
	return json?.content?.[0]?.content?.[0]?.text || 'Unnamed Note';
}
