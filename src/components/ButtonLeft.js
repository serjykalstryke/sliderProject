import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "../data";

function ButtonLeft() {
	const [index, setIndex] = useState(0);
	const [people, setPeople] = useState(data);

	return (
		<>
			{people.map((person, personIndex) => {
				const { id, image, name, title, quote } = person;
				let position = "nextSlide";
				if (personIndex === index) {
					position = "activeSlide";
				}
				if (
					personIndex === index - 1 ||
					(index === 0 && personIndex === people.length - 1)
				) {
					position = "lastSlide";
				}
			})}
			<button
				className="prev"
				onClick={() => {
					setIndex(index - 1);
				}}>
				<FaChevronLeft />
			</button>
		</>
	);
}

export default ButtonLeft;
