import React, {ChangeEvent, CSSProperties, useRef, useState} from "react";
import './search-bar.css';

interface SearchBarProps {
	onSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
	const [input, setInput] = useState('');
	const [style1, setStyle1] = useState({});
	const [style2, setStyle2] = useState({});

	const inputRef = useRef(null);
	const line1Ref = useRef(null);
	const line2Ref = useRef(null);

	const line1Active: CSSProperties = {
		'transform': 'rotate(45deg)',
		'top': '0px',
		'left': '0px'
	};
	const line2Active: CSSProperties = {
		'height':'40px',
		'opacity':'1'
	};

	const line1Inactive: CSSProperties = {
		'transform': 'rotate(-45deg)',
		'top': '-20px',
		'left': '45px'
	};
	const line2Inactive: CSSProperties = {
		'height':'0px',
		'opacity':'0'
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
		props.onSearch(event.target.value);
	}

	const onClickInput = (event: any) => {
		// @ts-ignore
		inputRef.current.classList.add('active');
		setStyle1(line1Active);
		setStyle2(line2Active);
	}

	const onClickLine = (event: any) => {
		// @ts-ignore
		inputRef.current.classList.remove('active');
		setInput('');
		setStyle1(line1Inactive);
		setStyle2(line2Inactive);
	}

	return (
		<>
			<input className='search'
						 type='text'
						 value={input}
						 onChange={onChange}
						 ref={inputRef}
						 onClick={onClickInput}
			/>
			<div style={style1} className='line-1' ref={line1Ref} onClick={onClickLine}/>
			<div style={style2} className='line-2' ref={line2Ref} onClick={onClickLine}/>
		</>
	)
}


export default SearchBar;
