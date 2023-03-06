
# AT product search


## Build process


Usually I like to start by poking around in the API through the terminal for no reason other than just to get familiar with it a bit.

Next I like to list all the requests I think the app should use in an api response viewer (I used Insomnia). This is partly to test the responses and response filtering, but also because I like having one place where I have all the requests laid out. It helps me be clear on what the app needs to do. In this case it was just the one GET request with various query parameters. 

I'm familiar with JS for front end and back end and python for back end. I went with JS for this project because it would need a front end and not much else. 

I created a project folder with a sandbox.js file. I wrote the search function with the fetch request and filtered for various keys (title, img, destination etc). I ran this one file in Node.js to test the function.

As there was no need to deploy this it meant that a simple React app with no back end was enough. As there would be no CORS issue so no need for a mini backend/proxy. I used CRA to make a basic front end in the project folder, and pushed to github. 

I built a markup skeleton and displayed some dummy data in the browser. 

Then I planned the components and what data I wanted to save in states. I went with three states: The search parameters, the fetched data, and the list of products. Just the search parameters and list of products would have been enough for submitting a search and displaying results. But I also wanted to have a result counter that updates while the user is typing.

Next I created the components with states and functions to get and display data from the API. 

I made an extra feature, the search hits counter displayed on the button that submits the search. In hindsight I'm not that happy with this feature, it's slow and gimmicky. If it worked perfectly it would be cool, but as it is now the app would work better without it. 

On the plus side this prompted me to re-read the React documentation on updating state and re-rendering and that was a welcome refresher. 

If I spent more time on this app I would add these things: 
more search parameters, pagination, a 'Clear Search' button, a default image/logo for when an image has a broken link - and of course CSS with Bootstrap. 