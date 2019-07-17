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

# Data Flow Diagram:

# OO design documentation:

# Project plan & timeline:

# Client communications:

# Screenshots of Trello board(s):

https://trello.com/b/00yyNtI7/mern-project

# Source Control Process:

The method we used was local version control where individuals could work from their own systems and code different sections. They would create a feature branch and once completed section they would merge it with the master branch, push it up to github, and create a pull request. Once on github, the Heroku maintainer would check that the code deploys to production without issue and then merge the pull request into the master branch.

# Short Answers:

What are the most important aspects of quality software?
What libraries are being used in the app and why?
A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
Within your own project what knowledge or skills were required to complete your project, and overcome challenges?
Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

