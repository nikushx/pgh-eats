import React from 'react';
import useGlobal from './factory/store';

export default function CurrentPlaces() {
	const [store, actions] = useGlobal();

	return (
		<div>
			{store.places.map(place => {
				return (
					<>
						<p>{place.name}</p>
						{place.deals.map(deal => {
							return (
								<>
									<p>{deal.title}</p>
									<p>{deal.description}</p>
								</>
							);
						})}
					</>
				);
			})}
		</div>
	);
}
