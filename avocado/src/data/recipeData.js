const recipesData = [
	{
		id: 1,
		name: "Avocado Toast",
		ingredients: [
			"1 ripe avocado",
			"2 slices of your favorite bread (sourdough, whole grain, or multigrain work well)",
			"Salt and pepper, to taste",
			"Optional toppings: poached or fried egg, cherry tomatoes, red pepper flakes, feta cheese, or a drizzle of balsamic glaze",
		],
		instructions: [
			"Begin by slicing the avocado in half, removing the pit, and scooping out the flesh into a bowl.",
			"Using a fork, mash the avocado to your desired consistency. Add salt and pepper to taste.",
			"Toast the bread slices to your preferred level of crispiness.",
			"Spread the mashed avocado evenly over each slice of toast.",
			"If desired, add your choice of optional toppings like a poached or fried egg, cherry tomatoes, red pepper flakes, feta cheese, or a drizzle of balsamic glaze.",
			"Serve immediately and enjoy your delicious avocado toast!",
		],
		image: "/images/avocado-toast.png",
	},
	{
		id: 2,
		name: "Avocado Smoothie",
		ingredients: [
			"1 ripe avocado, peeled and pitted",
			"1/2 cup milk or almond milk",
			"1/2 cup yogurt or Greek yogurt",
			"2 tablespoons honey or to taste",
			"1/2 teaspoon vanilla extract",
			"Ice cubes (optional)",
			"Fresh mint leaves for garnish (optional)",
		],
		instructions: [
			"Combine the peeled and pitted avocado, milk, yogurt, honey, and vanilla extract in a blender.",
			"Blend the mixture until smooth. If the smoothie is too thick, you can add a bit more milk to reach your desired consistency.",
			"If using, add ice cubes to the blender and blend again until the smoothie is chilled and frothy.",
			"Taste and adjust the sweetness if necessary, by adding more honey.",
			"Pour the smoothie into glasses.",
			"Garnish with fresh mint leaves if desired.",
			"Serve immediately and enjoy your refreshing avocado smoothie!",
		],
		image: "/images/avocado_milkshake.jpg",
	},
	{
		id: 3,
		name: "Bacon Guac Bomb",
		ingredients: [
			"2 ripe avocados, peeled and pitted",
			"2-3 slices of cooked bacon, crumbled",
			"1/2 small red onion, finely chopped",
			"1 Roma tomato, diced",
			"1 clove garlic, minced",
			"1 tbsp lime juice",
			"1/4 cup cilantro, chopped",
			"Salt and pepper, to taste",
			"1/2 jalapeño, seeded and minced (optional)",
			"1/4 tsp ground cumin (optional)",
			"Crushed red pepper flakes (optional, for garnish)",
		],
		instructions: [
			"In a medium bowl, mash the avocados to your desired consistency.",
			"Add the crumbled bacon, red onion, Roma tomato, garlic, lime juice, and cilantro to the mashed avocados.",
			"Season the mixture with salt and pepper. Stir well to combine all the ingredients.",
			"For a spicy kick, add the minced jalapeño and ground cumin, if using.",
			"Mix everything thoroughly.",
			"Taste and adjust the seasoning as needed.",
			"Transfer the guacamole to a serving dish.",
			"Garnish with crushed red pepper flakes, if desired.",
			"Serve immediately with your favorite chips or as a side dish. Enjoy your flavorful Bacon Guac Bomb!",
		],
		image: "/images/bacon-guac-bombs.jpg",
	},
	{
		id: 4,
		name: "Avocado Salad",
		ingredients: [
			"2 ripe avocados, peeled, pitted, and sliced",
			"1 cucumber, sliced",
			"1 cup cherry tomatoes, halved",
			"1/4 red onion, thinly sliced",
			"1/2 cup corn kernels, fresh or canned",
			"1/2 red bell pepper, diced",
			"1/4 cup cilantro, chopped",
			"Juice of 1 lime",
			"2 tbsp olive oil",
			"Salt and pepper, to taste",
			"1/4 cup crumbled feta cheese (optional)",
			"2 tbsp pumpkin seeds or sunflower seeds (optional)",
		],
		instructions: [
			"In a large salad bowl, combine the sliced avocados, cucumber, cherry tomatoes, red onion, corn kernels, and red bell pepper.",
			"Add the chopped cilantro to the bowl.",
			"In a small bowl, whisk together the lime juice, olive oil, salt, and pepper to create the dressing.",
			"Pour the dressing over the salad and gently toss to coat the ingredients evenly.",
			"If desired, sprinkle the salad with crumbled feta cheese and pumpkin seeds or sunflower seeds for added texture and flavor.",
			"Serve the salad immediately, or chill in the refrigerator for a refreshing and healthy meal or side dish.",
			"Enjoy your vibrant and tasty Avocado Salad!",
		],
		image: "/images/avocado-salad.jpg",
	},
	{
		id: 5,
		name: "Fried Avocado Bites",
		ingredients: [
			"2 ripe avocados, peeled, pitted, and cut into bite-sized pieces",
			"1 cup all-purpose flour",
			"2 large eggs, beaten",
			"1 cup panko breadcrumbs",
			"1 tsp garlic powder",
			"1 tsp paprika (optional for extra flavor)",
			"Salt and pepper, to taste",
			"Vegetable oil, for frying",
			"Your choice of dipping sauce (like ranch dressing, aioli, or hot sauce)",
		],
		instructions: [
			"Set up a breading station with three bowls: one for flour, one for beaten eggs, and one for panko breadcrumbs mixed with garlic powder, paprika, salt, and pepper.",
			"Coat each avocado piece first in flour, then dip in the beaten eggs, and finally coat with the panko mixture, pressing gently to adhere.",
			"Heat vegetable oil in a frying pan over medium heat. You'll need enough oil to cover the bottom of the pan.",
			"Once the oil is hot, fry the avocado bites in batches, being careful not to overcrowd the pan. Fry until they are golden and crispy, about 2-3 minutes per side.",
			"Use a slotted spoon to transfer the fried avocado bites to a plate lined with paper towels to drain excess oil.",
			"Serve the fried avocado bites hot with your choice of dipping sauce, such as ranch dressing, aioli, or hot sauce.",
			"Enjoy your delicious and crispy Fried Avocado Bites!",
		],
		image: "/images/avocado-bites.jpg",
	},
	{
		id: 6,
		name: "California Sushi Roll",
		ingredients: [
			"2 cups sushi rice, cooked and seasoned with sushi vinegar",
			"4 sheets nori (seaweed)",
			"1/2 cucumber, julienned",
			"1 avocado, peeled, pitted, and sliced",
			"8 crab sticks or imitation crab",
			"1 tbsp sesame seeds (optional)",
			"Soy sauce, for serving",
			"Wasabi, for serving (optional)",
			"Pickled ginger, for serving (optional)",
		],
		instructions: [
			"Lay a sheet of nori on a bamboo sushi mat. Spread a thin layer of sushi rice over the nori, leaving about a half-inch border at the top.",
			"Place a few pieces of cucumber, avocado slices, and 2 crab sticks near the bottom edge of the rice.",
			"Carefully start rolling the sushi using the bamboo mat, pressing gently but firmly. Roll it away from you until you reach the end of the nori.",
			"Wet the top border slightly with water to seal the roll.",
			"With a sharp knife, cut the roll into six equal pieces. Wetting the knife between cuts will make slicing easier.",
			"Sprinkle the rolls with sesame seeds if desired.",
			"Serve the California rolls with soy sauce, wasabi, and pickled ginger on the side.",
			"Enjoy your delicious homemade California Sushi Rolls!",
		],
		image: "/images/california-roll.jpg",
	},
	{
		id: 7,
		name: "Grilled Avocados",
		ingredients: [
			"2 ripe avocados, halved and pitted",
			"Olive oil, for brushing",
			"Juice of 1 lime",
			"Salt and pepper, to taste",
			"1/4 cup diced tomatoes",
			"1/4 cup diced red onion",
			"1 tbsp chopped cilantro",
			"1 clove garlic, minced",
			"Optional: crumbled feta or cotija cheese, for garnish",
			"Optional: drizzle of balsamic glaze or your choice of dressing",
		],
		instructions: [
			"Preheat your grill to medium-high heat.",
			"Brush the cut sides of the avocados with olive oil and season with salt and pepper.",
			"Place the avocados, cut side down, on the grill. Grill for about 5-7 minutes, or until they have nice grill marks and are slightly softened.",
			"While the avocados are grilling, mix together diced tomatoes, red onion, cilantro, and minced garlic in a bowl. Squeeze the lime juice over the mixture and stir to combine.",
			"Once the avocados are grilled, remove them from the grill and fill the cavities with the tomato-onion mixture.",
			"If desired, garnish with crumbled feta or cotija cheese.",
			"For an extra flavor, drizzle balsamic glaze or your choice of dressing over the filled avocados.",
			"Serve immediately and enjoy your flavorful Grilled Avocados!",
		],
		image: "/images/grilled-avocado.jpg",
	},
];

export default recipesData;