import React from 'react';

const Recipe1 = () => {
    return (
        <div>
            <h1>Avocado Toast</h1>
            <div>
                <h2>Ingredients</h2>
                <p>
                    - 1 ripe avocado<br />
                    - 2 slices of your favorite bread (sourdough, whole grain, or multigrain work well)<br />
                    - Salt and pepper, to taste<br />
                    - Optional toppings: poached or fried egg, cherry tomatoes, red pepper flakes, feta cheese, or a drizzle of balsamic glaze
                </p>
            </div>
        </div>
    );
};

const Recipe2 = () => {
    return (
        <div>
            <h1>Avocado Smoothie</h1>
            <img src="/avocado_milkshake.jpg" alt="Avocado Smoothie" />
            <div>
                <h2>Ingredients</h2>
                <p>
                    - 1 ripe avocado, peeled and pitted<br />
                    - 1/2 cup milk or almond milk<br />
                    - 1/2 cup yogurt or Greek yogurt<br />
                    - 2 tablespoons honey or to taste<br />
                    - 1/2 teaspoon vanilla extract<br />
                    - Ice cubes (optional)<br />
                    - Fresh mint leaves for garnish (optional)
                </p>
            </div>
        </div>
    );
};

const Recipe3 = () => {
    return (
        <div>
            <h1>Bacon Guac Bomb</h1>

            <div>
                <h2>Ingredients</h2>
                    <p>
                        - 2 ripe avocados, peeled and pitted<br />
                        - 2-3 slices of cooked bacon, crumbled<br />
                        - 1/2 small red onion, finely chopped<br />
                        - 1 Roma tomato, diced<br />
                        - 1 clove garlic, minced<br />
                        - 1 tbsp lime juice<br />
                        - 1/4 cup cilantro, chopped<br />
                        - Salt and pepper, to taste<br />
                        - 1/2 jalapeño, seeded and minced (optional)<br />
                        - 1/4 tsp ground cumin (optional)<br />
                        - Crushed red pepper flakes (optional, for garnish)
                    </p>
            </div>
        </div>
    );
};

const Recipe4 = () => {
    return (
        <div>
            <h1>Avocado Salad</h1>

            <div>
                <h2>Ingredients</h2>
                    <p>
                        - 2 ripe avocados, peeled, pitted, and sliced<br />
                        - 1 cucumber, sliced<br />
                        - 1 cup cherry tomatoes, halved<br />
                        - 1/4 red onion, thinly sliced<br />
                        - 1/2 cup corn kernels, fresh or canned<br />
                        - 1/2 red bell pepper, diced<br />
                        - 1/4 cup cilantro, chopped<br />
                        - Juice of 1 lime<br />
                        - 2 tbsp olive oil<br />
                        - Salt and pepper, to taste<br />
                        - 1/4 cup crumbled feta cheese (optional)<br />
                        - 2 tbsp pumpkin seeds or sunflower seeds (optional)
                    </p>
            </div>
        </div>
    );
};

const Recipe5 = () => {
    return (
        <div>
            <h1>Fried Avocado Bites</h1>

            <div>
                <h2>Ingredients</h2>
                <p>
                    - 2 ripe avocados, peeled, pitted, and cut into bite-sized pieces<br />
                    - 1 cup all-purpose flour<br />
                    - 2 large eggs, beaten<br />
                    - 1 cup panko breadcrumbs<br />
                    - 1 tsp garlic powder<br />
                    - 1 tsp paprika (optional for extra flavor)<br />
                    - Salt and pepper, to taste<br />
                    - Vegetable oil, for frying<br />
                    - Your choice of dipping sauce (like ranch dressing, aioli, or hot sauce)
                </p>
            </div>
        </div>
    );
};

const Recipe6 = () => {
    return (
        <div>
            <h1>California Sushi Roll</h1>

            <div>
                <h2>Ingredients</h2>
                <p>
                    - 2 cups sushi rice, cooked and seasoned with sushi vinegar<br />
                    - 4 sheets nori (seaweed)<br />
                    - 1/2 cucumber, julienned<br />
                    - 1 avocado, peeled, pitted, and sliced<br />
                    - 8 crab sticks or imitation crab<br />
                    - 1 tbsp sesame seeds (optional)<br />
                    - Soy sauce, for serving<br />
                    - Wasabi, for serving (optional)<br />
                    - Pickled ginger, for serving (optional)
                </p>
            </div>
        </div>
    );
};

const Recipe7 = () => {
    return (
        <div>
            <h1>Grilled Avocados</h1>

            <div>
                <h2>Ingredients</h2>
                <p>
                    - 2 ripe avocados, halved and pitted<br />
                    - Olive oil, for brushing<br />
                    - Juice of 1 lime<br />
                    - Salt and pepper, to taste<br />
                    - 1/4 cup diced tomatoes<br />
                    - 1/4 cup diced red onion<br />
                    - 1 tbsp chopped cilantro<br />
                    - 1 clove garlic, minced<br />
                    - Optional: crumbled feta or cotija cheese, for garnish<br />
                    - Optional: drizzle of balsamic glaze or your choice of dressing
                </p>
            </div>
        </div>
    );
};


const Recipes = {
    'Avocado Toast': Recipe1,
    'Avocado Smoothie': Recipe2,
    'Bacon Guac Bomb': Recipe3,
    'Avocado salad': Recipe4,
    'Fried Avocado Bites': Recipe5,
    'California Sushi Roll': Recipe6,
    'Grilled Avocados': Recipe7,
};

export default Recipes;