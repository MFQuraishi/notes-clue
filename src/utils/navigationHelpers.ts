import NAVIGATION_PATHS from '@/constants/paths';
import { redirect, RedirectType } from 'next/navigation';

// type PossiblePaths = '/all-notes';

type AdditiolParamsType = {
	pathsArray: string[];
};

export default function navigate(path: NAVIGATION_PATHS, additionalParams?: AdditiolParamsType, type: RedirectType = RedirectType.push) {
	let additionalPathString = '';
	if (additionalParams?.pathsArray && additionalParams?.pathsArray?.length > 0) {
		additionalPathString = '/' + additionalParams?.pathsArray?.join('/');
	}

	redirect(`${path}${additionalPathString}`, type);
}
