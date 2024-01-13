# EnchantedEats
 Webapplication for searching recipes as a project for the “Software Technology Project” module at the Berlin University of Technology (BHT).

 Welcome to the future of cooking and dining - discover EnchantedEats, your revolutionary kitchen assistant! In our hectic world, 
 EnchantedEats offers a unique solution that transforms your refrigerator into a source of inspiration. Imagine this: You open your 
 fridge and instead of uncertainty, you are greeted by a world full of tailor-made recipe ideas, perfectly suited to what you already 
 have at home. With just a few additional ingredients, an entire universe of new taste experiences unfolds.

## functions
 - Recipe search by entering ingredients (currently only one ingredient)
 - Filtering function
 - Random recipe search
 - Create and save a profile
 - Pantries (store food items...)

![Bild1](./documentation/img/Bild1.png)
![Bild2](./documentation/img/Bild2.png)
![Bild3](./documentation/img/Bild3.png)
![Bild4](./documentation/img/Bild4.png)

Future Feature (in prepation)
 - Saving recipes in meal schedule

![Bild5](./documentation/img/Bild5.png)


## installation & start
1. Clone or download the project source code to your local machine with
   `git clone https://github.com/saskiamellies/rezept-softwaretchnik.git`
3. Install dependencies. This can be done using a package manager such as npm (Node Package Manager) or yarn.
   (`npm install` or `yarn install`).
4. Run the development server with `npm start` or `yarn start`.
5. Access the project in your web browser by navigating to http://localhost:3000 or another specified URL.


## technologies
- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language used for implementing logical functions and interactions.
- **CSS**: The stylesheet language used for styling and designing the user interface.
- **Bootstrap**: A frontend framework for developing responsive and stylish websites.
- **Vercel**: A platform for serverless deployment used for hosting and deploying this project.
- **MealDB API**: An external API (https://www.themealdb.com/api.php) used to retrieve meal-related data.


## Deployment
There is `test+deploydeploy.yaml` file for workflow: After push into master, it will be automatically tested and deployed to Vercel once tests are successful. 

Website: https://rezept-softwaretchnik-umber.vercel.app/


## Monitoring (Sentry)
default integraton provide from Sentry, which will be notified only for production environment


## License
see [MIT License](LICENSE) 


## Documentation
see [IT-Konzept](documentation/Index.md)


## Contact
 - André Schlichting     Mail: s69575@bht-berlin.de
 - Daniel Kunst          Mail: s81797@bht-berlin.de
 - Christoph Rudolph     Mail: s82089@bht-berlin.de
 - Theo Prill            Mail: s82168@bht-berlin.de
 - Jan Gruner            Mail: s81694@bht-berlin.de
 - Saskia-Maria Mellies  Mail: s54177@bht-berlin.de


