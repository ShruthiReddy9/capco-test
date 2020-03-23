# Capco

# Test Objective
Implement the reusable table component whith out using any 3rd party component.

# Features

- Client side Pagination.
- Row Selection.
- Handle large data sets.
- Template rendering.

# API Documentation

Inputs | Date Type | Description | Example
--- | --- | --- | ---
columns | Arry of objects | Table colums details | `[{key: 'name',label: 'Full Name',width: 200}]`
rows | Arry of objects | Rows data to show in table. | `[{name: 'Shruthi'}]`
showFooter | boolean | Enable to show the pagination | `true`
rowsPerPage | number | Show the number of rows per page | 50

# Run the application

- Clone the application using `https://github.com/ShruthiReddy9/capco-test.git'
- Install depedency `cd capco-test && npm i`
- Server the application `npm start'
- Check the lint errors Run `npm run lint` 
- Check the Unit test cases Run `npm run test`
- Build the application `npm run build`
