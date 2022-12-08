import React, { useEffect, useState } from 'react';
import images from '../GalleryData/Data'
import { SRLWrapper } from "simple-react-lightbox";
const options = {
	/* settings: {
		overlayColor: 'rgb(25, 136, 124)',
		autoplaySpeed: 1500,
		transitionSpeed: 900
	},
	buttons: {
		backgroundColor: 'red',
		iconColor: 'rgba(126, 172, 139, 0.8)'
	}, */
	caption: {
		captionColor: '#a6cfa5',
		captionFontFamily: 'Raleway, sans-serif',
		captionFontWeight: '300',
		captionTextTransform: 'uppercase'
	},
	/* progressBar: {
		height: '20px',
		fillColor: 'blue',
		backgroundColor: 'white'
	} */
};

function Gallery() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(() => {
		tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
	},
		[tag]
	);

	return (
		
		<div className="App mt-4">
			<div className="tags">
				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Women Empowerment" tagActive={tag === 'Women Empowerment' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Support Farmers" tagActive={tag === 'Support Farmers' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Pregnant Women" tagActive={tag === 'Pregnant Women' ? true : false} handleSetTag={setTag} />
			</div>
			<SRLWrapper options={options}>
				<div className="gallery-container mt-5 mb-5 ">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/blog/blog-grid/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Gallery;
