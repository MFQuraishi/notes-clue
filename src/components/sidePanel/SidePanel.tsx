'use client';

import { useEffect, useState } from 'react';

export default function SidePanel() {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setOpen(true);
		}, 2000);
	}, []);
	return (
		<aside className={`text-white bg-primary rounded-br-xl h-screen rounded-tr-xl duration-1000 ${open ? 'w-[23vw]' : 'w-0'}`}>
			<div className={`w-[23vw] ${open ? '' : 'hidden'}`}>hello world</div>
		</aside>
	);
}
