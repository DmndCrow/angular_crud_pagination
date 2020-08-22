# SimplePagination

Project has simple pagination that displays Cards and adds CRUD functionality using Angular 10.

## Table of Contents
- [Installation](#Installation)
- [Running](#Running)
- [Usage](#Usage)
- [Test](#Test)
- [Author](#Author)

## Prerequisites
- [Node.js](https://nodejs.org/en/)

## Installation

Download the project

`git clone https://github.com/DmndCrow/simplePagination`

Go to the folder with project

`cd simplePagination`

Install npm packages

`npm install --dev`

## Running

Run dev server 

`ng serve`

Open in Browser
http://localhost:4200/

## Usage

Each card has CRUD actions:
- **CREATE** - Cards can be created using inputs, provided on top of the page.
- **READ** - Cards can be seen on the middle of the screen. There is also option
to paginate through Card list.
- **UPDATE** - Each Card has button to update the content of Card. This button opens
modal page, in which we can enter new values for this Card.
- **DELETE** - Each Card can be deleted using the delete button on Card.

## Test

To run unit tests via [Karma](https://karma-runner.github.io), execute
`ng test`

## Author

- [Aibek Ziyashev](https://github.com/DmndCrow/)
