import { redirect, RedirectType } from 'next/navigation';

export default function navigate(path: string, type: RedirectType = RedirectType.push) {
	redirect(path, type);
}
