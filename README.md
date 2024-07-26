# Next.js/React Coding Project

## Purpose

This small project will test your knowledge of a few foundational web development concepts:

* Simple version control with Git/GitHub
* Making requests to an API endpoint and processing the results
* Server-side vs client-side code
* Basic HTML and formatting
* Iterating over a list of data to output content
* Basics of React components

This miniature web application is built on [Next.js](https://nextjs.org/), with the traditional Pages router. Most of the requirements for this project simply involve working with React, but if you are unfamiliar with Next.js you might find [this unique function](https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props) to be important.

## Setup

### Prerequisites

* Node.js 20+

### Setup Steps

* Fork this repository into your own public GitHub project.
* Clone your repository locally.
* Install `npm` dependencies.
* Run `npm run dev` in the project root folder.

## The Project

### Background

This project contains a "fake" API endpoint that can be used to fetch blog posts, at the URL path `/api/getBlogPosts` on your local domain.

The endpoint requires an `X-Auth` header with the value "secret123" in order to successfully fetch posts.

For example:

```
GET http://localhost:3000/api/getBlogPosts
Accept: application/json
Content-Type: application/json
X-Auth: "secret123"
```

The project also contains an existing React component - `components/LikePost.jsx` - that "fakes" a 3-second-long network request and then logs a message to the JS console. This component currently presents no visual feedback to indicate when the request is in progress.

### Requirements

1. Modify the home page at `pages/index.js` as follows.
1. Make a request to `/api/getBlogPosts` to fetch blog posts content and render it on the page. (Note that for this exercise, it is fine to use the fully qualified `localhost` URL for the request.)
1. Make sure that the "secret123" token value for this request is not exposed publicly in the browser.
1. For each post, display the following content:
    1. The `title` as a heading
    1. The `author`
    1. The `description` HTML, properly formatted
    1. The existing `LikePost` button component
1. Modify `components/LikePost.jsx` to introduce a visual "pending"/"loading" state when the fake network request is in progress.

#### Bonus

1. If you are familiar with [Tailwind CSS](https://tailwindcss.com/), [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules), or [styled-jsx](https://nextjs.org/docs/pages/building-your-application/styling/css-in-js), you can apply simple styling to the blog content.

## Delivery

* Commit your code changes to your forked GitHub repository.
* Send a link to your GitHub repo.
