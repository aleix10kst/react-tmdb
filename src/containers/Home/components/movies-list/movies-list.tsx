import React from "react";

interface MoviesListProps {
	movies: any[];
}

const MoviesList: React.FC<MoviesListProps> = ({movies}: MoviesListProps) => {

	console.log(movies.length)

	return (
		<div></div>
	);
}

export default MoviesList;
