import React from 'react';

/**
 * MediaLayout - Dynamic layout component for project media
 * Automatically selects optimal layout based on number of media items:
 * - 1 item: Full width
 * - 2 items: Side by side (50/50)
 * - 3 items: 1 large + 2 small grid
 * - 4+ items: Masonry grid
 */
export default function MediaLayout({ mediaItems = [], className = '' }) {
	if (!mediaItems || mediaItems.length === 0) return null;

	const count = mediaItems.length;

	// Render single media item
	const renderMediaItem = (item, index, customClass = '') => {
		const baseClass = `overflow-hidden rounded-lg ${customClass}`;
		
		if (item.type === 'video') {
			return (
				<div key={index} className={baseClass}>
					<video
						autoPlay
						muted
						loop
						playsInline
						preload="metadata"
						className="w-full h-full object-cover"
						style={{ pointerEvents: 'none' }}
					>
						<source src={item.src} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			);
		}

		return (
			<div key={index} className={baseClass}>
				<img
					src={item.src}
					alt={item.alt || `Media ${index + 1}`}
					loading="lazy"
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
		);
	};

	// Layout for 1 item - Full width hero
	if (count === 1) {
		return (
			<div className={`media-layout media-layout-single ${className}`}>
				{renderMediaItem(mediaItems[0], 0, 'aspect-video')}
			</div>
		);
	}

	// Layout for 2 items - Side by side equal columns
	if (count === 2) {
		return (
			<div className={`media-layout media-layout-duo ${className}`}>
				<div className="grid grid-cols-2 gap-2">
					{mediaItems.map((item, idx) => 
						renderMediaItem(item, idx, 'aspect-video')
					)}
				</div>
			</div>
		);
	}

	// Layout for 3 items - 2 on top, 1 full width bottom (or vice versa)
	if (count === 3) {
		return (
			<div className={`media-layout media-layout-trio ${className}`}>
				<div className="flex flex-col gap-2">
					<div className="grid grid-cols-2 gap-2">
						{renderMediaItem(mediaItems[0], 0, 'aspect-video')}
						{renderMediaItem(mediaItems[1], 1, 'aspect-video')}
					</div>
					{renderMediaItem(mediaItems[2], 2, 'aspect-video')}
				</div>
			</div>
		);
	}

	// Layout for 4+ items - Masonry-like grid
	return (
		<div className={`media-layout media-layout-grid ${className}`}>
			<div className="flex flex-col gap-2">
				{/* First row - featured large image */}
				{renderMediaItem(mediaItems[0], 0, 'aspect-video')}
				
				{/* Remaining items in 2-column grid */}
				<div className="grid grid-cols-2 gap-2">
					{mediaItems.slice(1).map((item, idx) => 
						renderMediaItem(item, idx + 1, 'aspect-video')
					)}
				</div>
			</div>
		</div>
	);
}
