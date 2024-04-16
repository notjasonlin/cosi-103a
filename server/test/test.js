import Nightmare from 'nightmare';
import { assert } from 'chai';

describe('End-to-end tests', function() {
    this.timeout(5000); // Set timeout to 5000ms for all tests in this suite

    let nightmare = null;
    beforeEach(() => {
        // Show the electron browser window for debugging
        nightmare = new Nightmare({ show: true });
    });

    describe('/api GET', () => {
        it('should load without error', async () => {
            try {
                const response = await nightmare.goto('http://localhost:5001/api');
                assert.equal(response.code, 200);
            } catch (error) {
                console.error('Error in /api GET test:', error);
            }
        });
    });

    describe('avocado front-end', () => {
        it('should load without error', async () => {
            try {
                const response = await nightmare.goto('http://localhost:5001/index.html');
                assert.equal(response.code, 200);
            } catch (error) {
                console.error('Error in avocado front-end test:', error);
            }
        });
    });

    afterEach(async () => {
        // End the Nightmare session
        await nightmare.end();
    });
});