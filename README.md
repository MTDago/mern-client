# Link to Published Website:

# Link to Github Repo:

## Client-side

https://github.com/michaeltwitt/mern-client

## Server-side

https://github.com/michaeltwitt/mern-server

# Problem definition / purpose:

Design, build, deploy and present a web application (App) built for a real world customer.

Creating a website for an author: where they can sell books, post updates/blog posts as well as contact information and the ability to do a join an emailing list. This website will function essentially as a portfolio/blog/one-sided marketplace, and will be made using the MERN stack.

# Functionality / features:

The main functions of the application are as follows;

* A ‘main page’ where users can read a short blurb about the author, see latest blog posts and books
* An ‘about me’ page where users can read more in depth about the author
* A ‘books’ page that displays all the authors books
* A ‘blog’ page that displays all the authors blogs
* A ‘newsletter’ page where users can sign up to receive content from the author, directly to their emails
* A page off the ‘books’ page where users can read about the book and have the option to purchase the book.
* An order page where users finalise their purchase
* Admin will also have a secret login page so that they have the ability to add, edit and destroy books and blogs.

# Screenshots:

# Tech stack (e.g. html, css, deployment platform, etc):

Front-End:
* React
* HTML
* CSS

Back-End:
* Express
* Node
* Mongoose

Database:
* MongoDb

# Instructions on how to setup, configure, deploy and use your :

Client-side: 
* from command line -  git clone https://github.com/michaeltwitt/mern-client.git
* Cd into repo
* Npm/yarn install
* npm/yarn start

Server-side: 
* from command line - git clone https://github.com/michaeltwitt/mern-server.git
* Cd into repo
* npm/yarn install
* Nodemon

Deploy: 
* from command line - git push heroku master


# Design process:

Our design process started when looking over a smaller project Michael had done which we then used as a guide for the wireframes. We also browsed other authors webpages for ideas. Once we had a basic understanding of what we thought the app could look like, we discussed with the client and showed them our ideas. After the initial interview we had a solid direction and we started creating the ERD and basic skeletons of the application.

# User stories:

US 1: As a user I can buy books

US 2: As a user I can search for books

US 3: As a user I can write a review

US 4: As a user I can read about author

US 5: As a user I can ship books

US 6: As the client I can create a book

US 7: As the client I can upload images

US 8: As the client I can write a blog

# A workflow diagram of the user journey/s.:

![User Journey](https://user-images.githubusercontent.com/47685649/61335772-0aa78680-a872-11e9-9b35-e3089779fe44.png)


# Wireframes:
![web_single_book](https://user-images.githubusercontent.com/47685649/61348530-625ee580-a8a4-11e9-99cf-6c58cdfa1c5c.png)
![web_mailing_list](https://user-images.githubusercontent.com/47685649/61348537-65f26c80-a8a4-11e9-8099-7d4fcfba6fc9.png)
![web_landing_page](https://user-images.githubusercontent.com/47685649/61348551-6f7bd480-a8a4-11e9-8295-1fe10a5350c5.png)
![web_books_menu](https://user-images.githubusercontent.com/47685649/61348554-730f5b80-a8a4-11e9-991f-5e372788ff94.png)
![web_blogpage](https://user-images.githubusercontent.com/47685649/61348559-773b7900-a8a4-11e9-8c5e-065666776ef1.png)
![mobile_mailing_list](https://user-images.githubusercontent.com/47685649/61348564-799dd300-a8a4-11e9-9379-6210856f8940.png)
![mobile_single_book](https://user-images.githubusercontent.com/47685649/61348567-7c98c380-a8a4-11e9-9a19-0f74f3fc33a5.png)
![mobile_landing_page](https://user-images.githubusercontent.com/47685649/61348568-7f93b400-a8a4-11e9-9f31-301fd1e93818.png)
![mobile_blogpage](https://user-images.githubusercontent.com/47685649/61348574-828ea480-a8a4-11e9-9c35-30d4fb4a0207.png)
# Database Entity Relationship Diagrams:
![erd mern](https://user-images.githubusercontent.com/47685649/61350646-a1dd0000-a8ab-11e9-8bf1-03f3dd06dcf6.png)

# Data Flow Diagram:

# OO design documentation:

# Project plan & timeline:
![timeline](https://user-images.githubusercontent.com/47685649/61351984-8f64c580-a8af-11e9-9332-8ceb6c8b182a.PNG)

# Client communications:

# Screenshots of Trello board(s):

https://trello.com/b/00yyNtI7/mern-project

# Source Control Process:

The method we used was local version control where individuals could work from their own systems and code different sections. They would create a feature branch and once completed section they would merge it with the master branch, push it up to github, and create a pull request. Once on github, the Heroku maintainer would check that the code deploys to production without issue and then merge the pull request into the master branch.

# Short Answers:

## What are the most important aspects of quality software?

* Efficiency - Having accessible and efficient code is important as it makes the application run faster. While an application grows in scale, having efficient code will help the performance. 
* Security - security is one of the more important aspects because having vulnerabilities in your software creates the risk of having sensitive information exposed and/or opens the path for ransomware attacks.
* Easily maintainable or modifiable - Having a maintainable application helps when constantly changing the code which goes hand in hand with readable and testable code and creates a better quality software.
* Readable - Having readable code is really helpful for not only others working on the same application but also for yourself for when revisiting your code in the future. Having heavily commented code is the best way to have an easily readable application.
* Testable - While writing tests may take a fair amount of time and can seem unnecessary, having a testable application is important as it prevents any bugs in your code and can take longer to find the issues then having to write the tests.
* Usability - Having an easy to use application is important as it’s what attracts users to use the software. If the application is slow and hard to navigate then the user will be discouraged from using it.
* Functional - Having a functional application is what measures its quality. If the software does what it's intended to do and covers all the other aspects mentioned then it will be a good quality application.


## What libraries are being used in the app and why?

* Bulma - Used for styling the application
* Express - Used for the back-end to create the routes that the client uses to request data.
* Mongoose - Used to handle creating the model schemas and for MongoDB.
* Node - Used to install packages.
* React - Used as the front-end of the application.
* React-Dom - Used to render components.
* React-Router-Dom - Used to route to components.
* Axios - Used to send request to server.
* Jest - Used to test all the components of the application.
* Redux - Used to handle state

## A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
The team should have a competent knowledge in Javascript fundamentals and be able to build a MERN framework. Basic knowledge of HTML and CSS and routing is also beneficial however not required by the whole team.  Communication and working collectively in a team environment is also highly required.

## Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

## Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?


