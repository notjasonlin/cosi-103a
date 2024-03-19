# cosi-103a
Overview: <br>

This is a website where you can browse your favorite avocado recipes!<br>

Website includes a home page with an interactible avocado.<br>
Clicking this avocado redirects the user to the recipes list.<br>
Each recipe card in the list has link to webpage for entire recipe<br>
Also includes team page for authors of website.<br>
Has grocery list menu on each page which allows user to add recipe ingredients to list<br>


Testing: <br>

To run tests for avocado website, write "npm run test" in the command line.<br>
This will run tests for card, container, home page, team page, and recipe component tests.<br>
All test files can be accessed in the tests directory within src.<br>


Docker: <br>

To create a Docker image to package the current build of avocado website, <br>
write "docker image build -t <image-name>:latest ." in the command line.<br>
The "." has the image run from the current directory.<br>

Azure Alerts: <br>
There are alerts for over 100 replicas used, 0.5uB of Cpu Usage, and over 1000 request to prevent attacks on the server. <br>

Authors: <br>

Artem Lavrov <br>
artemlavrov@brandeis.edu <br>

Elan Romo <br>
elanromo@brandeis.edu <br>

Jason Lin <br>
jasonlin@brandeis.edu <br>

John Vnek <br>
johnvnek@brandeis.edu <br>
