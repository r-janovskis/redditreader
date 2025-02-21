# Reddit Reader web app

## Overview

This project comes from CodeCademy front-end developer path.
It's purpose is to get hands on practice of creating a front end application that uses API calls to gather data that is displayed for the user.
In this project we will use different frameworks and languages that are used for web and front-end developnemt.

Project will get data from reddit using API calls and give user a chance to display posts (and comments) from different topics.

## Project Requirements:

- [x] Build the application using React and Redux
- [x] Version control your application with Git and host the repository on GitHub
- [x] Use a project management tool (GitHub Projects, Trello, etc.) to plan your work
- [x] Write a README (using Markdown) that documents your project including:

  - Wireframes
  - Technologies used
  - Features
  - Future work

- [x] Write unit tests for your components using Jest and Enzyme
- [x] Write end-to-end tests for your application
- [x] Users can use the application on any device (desktop to mobile)
- [x] Users can use the application on any modern browser
- [x] Users can access your application at a URL
- [x] Users see an initial view of the data when first visiting the app
- [x] Users can search the data using terms
- [x] Users can filter the data based on categories that are predefined
- [x] Users are shown a detailed view (modal or new page/route) when they select an item
- [x] Users are delighted with a cohesive design system
- [x] Users are delighted with animations and transitions
- [x] Users are able to leave an error state
- [ ] Get 90+ scores on [Lighthouse](https://pagespeed.web.dev/)

  - We understand you cannot control how media assets like videos and images are sent to the client. It is okay to have a score below 90 for Performance if they are related to the media from Reddit.

- [ ] **OPTIONAL**: Get a custom domain name and use it for your application
- [x] **OPTIONAL**: Set up a CI/CD workflow to automatically deploy your application when the master branch in the repository changes
- [x] **OPTIONAL**: Make your application a progressive web app

## Tools used for the project

Frameworks, tools and programming languages used for the project:

- React
- Redux
- JavaScript (TypeScript)
- HTML
- CSS
- Reddit API
- GitHub

## Project plan

Below are some high-level points for the project. This document will be updated throughout the project as new features are developed and introduced.

- Project will be managed in GitHub. GitHub issues will be used to map tasks that need to be done and bugs that require fixing.
- Wireframes will be created before we start coding application
- Set up CI/CD pipeline in GitHub for this project
- As we are writing code for application we will be developing test cases to make sure that new features work as expected and they don't break anything we have created before. For this purpose Jest and Enzyme will be used
- Create API request handling to get data from Reddit
- Create components for the web application
- Style application so it would be intuitive to use and easily accessible to everyone.

## Wireframe - how will app look like

Below are the wireframe of how I imagine my Reddit reader to look like.
![image](./wireframes/wireframe.png "Reddit Reader wireframe")

App will consist of 3 main parts - header, content and footer. In header user will see a logo of 'Reddit Reader' (left) and search bar, which he will be user to search for posts in the sub-section (middle). Also a a drop-down list of reddit topics available will be displayed in header (right side).
In content section app will display posts that are retrieved from reddit API after user has selected a sub-topic.
And finally in the footer section I will include year when this app was created and some other basic not so interesting information...

## Project work

### Starting project

Project was started by using a node.js recat template which has all the necessary frameworks already set up:

- **React** to build beautiful front-end web app
- **Redux** to manage states for the application and we would be displaying the right data
- **Jest (Enzyme)** to create and run tests as we develop the app

To set up the project from the template I followed the steps below:

1. Open command line line
2. Navigate to folder in which you want your project to be
3. Run command
   `npx degit reduxjs/redux-templates/packages/vite-template-redux my-app`
   Replacing **my-app** with a name of your application
4. Navigate into the newly created **my-app** folder
5. Run command `npm install` to install all the dependencies project will be using

### Setting up remote repo

After all the initial setup work is done we create a repo (locally and on github)

- From command line while in the project folder run command `git init` to initialize the local repository
- On [github](www.github.com) create an empty repository
- Go back to command line and run command
  `git remote add origin <link to remote github repo repo>`
- (Optional) change name of local master branch to main `git branch -m master main`
- Stage changes with command `git add *`
- Make initial commit `git commit -m "Initialize project"`
- Push initial project setup to remote github repo `git push --set-upstream origin main`

### Adding routing

For a good craic I decided to add some routing, so that user would see changes in the browsers URL as he changes reddit topic. For this to be possible there were several steps to be taken:

- We need to install 'react-router-dom' using command `npm install --save react-router-dom`
- After we have added 'react-router-dom' to our project we can start implementing the feature. I was taking advantage of **useNavigate()** function to make URL changes when user picks a topic.
- I also had to make changes in **main.tsx** to support app's rendering on different routes. I used nested routes and a placeholder value to represent differnet routes and which components we want to render for each route. (This application is simple, so we pretty much render same component for all routes)
- Trickiest part about adding routes came for the tests. Adding **useNavigate()** broke all test cases that were rendering components... To fix that I needed to render components between BrowserRouter tags as in example below:
  **&lt;BrowserRouter>** &lt;Component> **&lt;/BrowserRouter>**

### Working with API

Reddit API documentation and how to use it isn't the greates (in my opinion). But we managed to get it working. For this app I was using `fetch()` command and API endpoint we are calling to is in form `https://www.reddit.com/${end_point}.json?limit=${numberOfPosts}`. At the moment we have limited number of post to retrieved to 10, but as app evolves and if we fancy we can take that limit off.

From the API we are retrieving 4 parameters (even though there are many more returned) that we will use in our post:

- **Title**: title of the post that we are displaying
- **Image**: thumbnail link that might be missing, but if it's there we will display picture for the post
- **Description**: selftext property from the returned data. For some categories there is a lot of text in a post that is formatted using markdown. Similarly like with the image - for some posts it is empty.
- **Link to source**: url property from the returned data. This will be a link that leads to the original source post which might be outside of Reddit

From the afore mentioned four properties we use **description** is the one that required some extra processing before we coud display somewhat decently on a post. For that purpose we used [markdown-plus](https://github.com/acmenlei/markdown-plus) library. All the steps to get it added into a project and basic usage is well described in the link.

### Searching in Reddit posts

We implement a simple search function.
How it works in short:

- User enters a search term or phrase in search bar
- JavaScript function takes that input and runs through the post titles and changes display properties on posts:
  - **hiding** posts who don't have a word or term user is looking for in their title
  - **display** posts that contain searched word or term in their title (this part comes in play as user starts deleting the search term from search bar)

**Note**: we need to keep in mind that search function is only working on the post TITLE!

## Comments for the posts

In addition to the requirements I decided to add another feature - chance to see not just the post itself, but it's comments too.
What started with an idea that it's gonna be easy turned into several hours trying to figure out what's not working. But we got it in the end.

So, how does this feature works?

- We created a new component to display a comment (called Comment)
- We created another slice to the apps which handles comments for a post.
  - In the slice we capture ID of the post for which we are getting comments
  - And an array of comments for the post. Each entry in the array contains author and comment text itself
- We are fetching comments on request. When user presses a button to display comments, reducer fetches comments for that post using reddit API

In the implementation phase I managed to get lost and made quiet a mess. I was trying to do too much - handle markdown, enter comments as innerHTML elements, use useEffect hooks and some other tricks that didn't produce results I hoped for and just created some 'head scratching' moments... In the end we implemented it in simple manner:

- User clicks the button to show comments
- We despatch a reducer to fetch comments using Reddit API
- When comments are retrieved component gets re-rendered and we see comments appearing under the post.

## Deploying application

After all the work has been done we deploy the app.
For this purpose we will use surge - Static web publishing for Front-End Developers service. You can learn more about surge on their website [https.//surge.sh](https://surge.sh/).

To check if you have surge already available run command `surge --version` in your command line console. If you get a version number, you can continu to the steps below, otwhervise set up surge but following [these instructions](https://surge.sh/help/getting-started-with-surge).

Steps to deploy your web app with surge:

1. Open a command line console and navigate to your project folder
2. Build a deployable version of your app by running command `npm run build`
3. When build version has been created move into that directory `cd dist`
4. When inside that folder run command `surge`
5. At one point you will be asked to provide a domain name. You can change it or stick with the default one. I will pick `rjanovskis-redditreader.surge.sh` for this project
6. After that work is done you can go to the picked domain name and see if app works as expected.

My app now resides at [rjanovskis-redditreader.surge.sh](https://rjanovskis-redditreader.surge.sh)

**Note:** If we want to take deployed site down we can use command `surge teardown <domain_name>.surge.sh`

**Note 2:** There is a bug that surge pages has... On reload app crashes. I had noticed it in previous projects as well and had no idea how to handle it, because it was wokring fine and wasn't reproducible in dev environment locally. As it turns out we can fix it by changing name of index.html to 200.html in distribution (build) folder after we have built the application before we deploy it to surge. A bit longer description of the solution to this issue is [here](https://medium.com/@ezplora/fix-direct-url-reload-errors-on-react-router-for-surge-sh-users-243624565742).

## Impressions about TypeScript

It took me a while to understand how TypeScript works and how to use it. But as I got a bit more familiar with it, I can see how it can prevent some mistakes. I think the possibility to define interfaces for input/output data for functions and objects is pretty cool and useful if utilised well. It can save time de-bugging time later as you won't be able to compile code if something isn't matching as expected, you will get error instead. Times I have spent hours debugging something just to find out there is a type mismatch somewhere...

I would say there is still a lot to learn for me about TypeScript and I didn't use it's funcitonality to the fullest. Room to improve.

---

# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
