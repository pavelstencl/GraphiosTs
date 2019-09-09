![Logo](https://github.com/pavelstencl/GraphiosTs/blob/master/media/logo.png "Logo")

# GraphiosTs
GraphiosTs is TypeScript based GraphQl client built as an extension of Axios package. It combines the best from Axios and Typescript to provide lightweight alternative to the Apollo-client. 

In real world of programming, most of APPs using GraphQl, combines GraphQL and REST requests, so you need two separate clients with separate settings and security logic. With GraphiosTs, you can share this logic with Axios via settings and interceptors. You have one client for both REST and GraphQl requests.

GraphiosTs translates GraphQl schema into GraphiosTs (TypeScript) schema. This schema is used for validation of graphql commands and compilation of result based on a command. Since GraphiosTs schema holds whole GraphQl logic of your endpoint, there is no need to run compilation every time, some GraphQl command has been changed in a script. With GraphiosTsCmd (downloads schema and translates it to GraphiosTs schema) you have only one source of truth. The server one. Every time GraphQl schema on the server will change, you can update GraphiosTs schema via command and Typescript will show you if something is wrong or incompatible.

This package does not try to compete Apollo ecosystem. Our main goal was to build simple, lightweight, strongly typed graphql client, which can be used in APIs, where every byte of boundle size counts. If you want full featured GraphQl client with tons of extensions and you don't care about size, take [Apollo-client](https://github.com/apollographql/apollo-client), which provides an TypeScript extension as well.



![Example](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example.gif "Basic example")



## Features
- Communicates with GraphQl server.
- Has all features of Axios js client - [GitHub](https://github.com/axios/axios).
- Eliminates multiple sources of truth (One schema for everything).
- Provides strongly typed GraphQl commands constructor (query, mutation, subscription) ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example1.gif)).
- Provides strongly typed responses ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example2.gif)).
- Types of commands and results are connected. It means, what you write as an request, typescript will translate to filtered result type.
- GraphQL schema can be downloaded from server and translated to GraphiosTs schema via GraphiosTsCmd (UPDATE TO GIT NEEDED).
- Supports all basic GraphQl actions.
- Supports GraphQl Aliases ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example4.gif)) and Inline Fragments ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example3.gif)).
- Eliminates need of GraphQL Basic Fragments , Directives and Conditions (GraphiosTs is simple JSON object, so you can apply standard JS operations on it, like conditioning, composing with functions or variables, etc.)


