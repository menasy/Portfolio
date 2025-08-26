// eslint-disable-next-line
import React, { useEffect } from 'react';

const ImagePreloader = () => {
	useEffect(() => {
		const imagesToPreload = [
			'https://raw.githubusercontent.com/menasy/Portfolio/main/newProfil.jpeg',
			'https://raw.githubusercontent.com/menasy/Project_icons/main/HesKitFiles/HeskitFigma.png',
			'https://github.com/menasy/Project_icons/blob/main/WebServer_Images/42WebServer.png?raw=true',
		];

		imagesToPreload.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	}, []);

	return null;
};

export default ImagePreloader;
