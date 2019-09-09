![Logo](https://github.com/pavelstencl/GraphiosTs/blob/master/media/logo.png "Logo")

# GraphiosTs
Typescript GraphQl client built on top of Axios.
![Example](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example.gif "Basic example")

## Features
- Communicates with GraphQl server.
- Has all features of Axios js client - [GitHub](https://github.com/axios/axios).
- Eliminates multiple sources of truth (One schema for everything).
- Provides strongly typed GraphQl Operations constructor (query, mutation, subscription) ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example1.gif)).
- Provides strongly typed responses ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example2.gif)).
- GraphQL schema can be downloaded from server and translated to GraphiosTs schema via GraphiosTsCmd (UPDATE TO GIT NEEDED).
- Supports all basic GraphQl actions.
- Supports GraphQl Aliases ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example4.gif)) and Inline Fragments ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example3.gif)).
- Eliminates need of GraphQL Basic Fragments , Directives and Conditions (GraphiosTs is simple JSON object, so you can apply standard JS operations on it, like conditioning, separation of pieces to the varables, etc.)

## Motivation


