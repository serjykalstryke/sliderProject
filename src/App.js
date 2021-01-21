import React, { useState, useEffect } from "react";
import Title from "./components/Title.js";
import SectionCenter from "./components/SectionCenter.js";

function App() {
	return (
		<section className="section">
			<Title />
			<SectionCenter />
		</section>
	);
}

export default App;
