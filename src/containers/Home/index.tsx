import React from "react";
import './index.css';
import SearchBar from "./components/search-bar/search-bar";
import axiosInstance from "../../utils/axios";
import {AxiosResponse} from "axios";
import MoviesList from "./components/movies-list/movies-list";

interface QueryResponse {
	page: number;
	results: any[];
	total_pages: number;
	total_results: number;
}

interface HomeState {
	movies: any[];
	page: number;
	total_pages: number;
	total_elements: number;
}

class Home extends React.Component<{}, HomeState>{

	constructor(props: any) {
		super(props);
		this.state = {
			movies: [],
			page: 0,
			total_pages: 0,
			total_elements: 0
		}
		this.onSearch = this.onSearch.bind(this);
	}

	async onSearch(search: string) {
		if (search.length > 3) {
			const response: AxiosResponse<QueryResponse> = await axiosInstance.get('search/movie', {params: {query: search}})
			console.log(response);
			this.setState((state) => ({...state, ...response.data}))
		}
	}

	render() {
		return (
			<>
				<div className='search-wrapper'>
					<div>
						<SearchBar onSearch={this.onSearch}/>
					</div>
					<div className="mt-3">
						<h2>Resultats trobats</h2>

						<MoviesList movies={this.state.movies}/>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
