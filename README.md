# booksApp

1)Download or clone the repository https://github.com/rajVadlamudi/booksApp.git
2)In command prompt enter, cd booksApp
3)In command prompt enter, npm install
4)In command prompt enter, yarn start
5)The Webapp will launch in the browser, localhost:3000/

Two basic tests have been added as part of Test Driven Development 
1) Test to check the webapp renders without craching
2) Test to check the webapp renders the title message

To run the two tests,
1) cd booksApp
2) npm run test

The Webapp developed using React library
- Displays 5 book items every page (uses React Bootstrap Listgroup component)
- Uses axios package to query api http://nyx.vima.ekt.gr:3000/api/books
- Has a page selector to navigate the different pages (uses React Bootstrap Pagination component)
- Has a search field that filters books by publication year, user has to enter a valid YYYY for search 