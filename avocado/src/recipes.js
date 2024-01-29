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


const Recipes = {
    'Avocado Toast': Recipe1,
    'Avocado Smoothie': Recipe2,
};

export default Recipes;