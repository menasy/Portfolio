import React from 'react';
import './BorderAnimationCard.css';

export default function BorderAnimationCard({ children, className = '' }) {
	return (
		<div className={`border-animation-card ${className}`}>
			<div className="border-animation-content">
				{children}
			</div>
		</div>
	);
}
