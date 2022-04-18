import React from "react";
import { categoryColors } from "./styles";

function MasonryPost({ post, tagsOnTop }) {
	/*	const imageBackground = { backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")` };*/

	const imageBackground = {
		//backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`,
		backgroundImage: `url("${post.image}")`,
	};
	const style = { ...imageBackground, ...post.style };
	//console.log(imageBackground);

	return (
		<a className="masonry-post overlay" style={style} href={post.link}>
			<div className="image-text">
				<div className="tags-container">
					{post.categories.map((tag, ind) => (
						<span key={ind} className="tag" style={{ backgroundColor: categoryColors[tag] }}>
							{tag.toUpperCase()}
						</span>
					))}
				</div>
				<div>
					<h2 className="image-title">{post.title}</h2>
					<span className="image-date">{post.date}</span>
				</div>
			</div>
		</a>
	);
}
export default MasonryPost;
