

import React, { useState, useEffect } from 'react';

import Dish from "./components/Dish";
import dishes from './data';

import Category from './components/Category';
import Filter from './components/Filter';

function App() {
	const [minVal, setMinVal] = useState(4)
	const [maxVal, setMaxVal] = useState(4)
	const [category, setCategory] = useState('all')

	const filteredDishes = dishes.filter((dish) => {
		if (category === 'all') {
			return dish.price >= minVal && dish.price <= maxVal
		} else {
			return dish.price >= minVal && dish.price <= maxVal && (
				dish.category === category
			)
		}
	})
	useEffect(() => {
		console.log('hey');
	}, [minVal])

	useEffect(() => {
		console.log('HEllooo');
	}, [maxVal])


	return (
		<main>
			<section className="filters">
				<h1>Burger Place</h1>
				<h2>Filters</h2>
				<form>
					<Filter
						minVal={minVal}
						setMinVal={setMinVal}
						maxVal={maxVal}
						setMaxVal={setMaxVal}
					/>
					<Category
						category={category}
						setCategory={setCategory}
					/>

				</form>
			</section>
			<section className="dishes">
				<h2>Dishes</h2>
				<ul className="grid">
					{filteredDishes.map((dish, index) => {
						return (
							<li className="card">
								<Dish
									title={dish.name}
									dishDisc={dish.description}
									price={dish.price}
								/>
							</li>
						)
					})}
				</ul>
			</section>
		</main>
	);
}

export default App;
