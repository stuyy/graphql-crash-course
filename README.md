# GraphQL Crash Course Tutorial

This is the code repository for my GraphQL crash course tutorial I did over on YouTube. You can find the link here.

To use this repository, simply clone it and then run `npm i` or `yarn install`. Then run `npm run dev` or `yarn dev` to run in `dev` mode, or just use `npm start` or `yarn start`

-- Insert Link Here --

# What is GraphQL?

GraphQL is a "query language" as well as a runtime environment. The GraphQL query language allows you to query your API with a defined Schema. The runtime portion of GraphQL takes care of resolving all of your data. So when you make a query, it will return what you ask for.

## The main key points you should remember about GraphQL:

### **GraphQL gives you what you ask for. No more or less.**

- Many RESTful APIs you will work with may return a response in JSON format with a ton of objects. There are times where you may not need every single field, just a tiny portion of it. With GraphQL, we can use it to query for what we _want_.
- If an API returns the following:
  ```
  {
    "username": "stuy",
    "created": "2020-12-26",
    "posts": Post[],
    "messages": Message[],
    "friends": User[],
  }
  ```
  We may not care about the user's posts or messages, we may want only the `friends` data. So we can query just for `friends`. If we ever want the `messages`, we can query for that too. So, it literally means "You get what you ask for".

### **GraphQL makes it easier to retrieve data**

- Lets say you're building an application and on one of the pages, it requires data that comes from three different endpoints. On your client, you will need to make 3 different API calls. On the server side, that could be 3 database calls or more (depending on how you query your database). This means if we're calling those endpoints from our frontend, we need to wait for all three requests to complete and return a response before we can do anything.
- With GraphQL, we make one query, and allow that query to return everything we need.

### **GraphQL is not a 100% replacement for REST**

- While GraphQL can replace a lot of your REST endpoints, there are some cases where you can't benefit from using GraphQL.
- Authentication, Webhooks, Websockets, are some examples.
- With that being said, you can't replace REST entirely, but you can sure make use of both GraphQL and REST APIs.

For more on GraphQL, visit the official website and read up on their documentation: https://graphql.org/learn/

Some things you want to read up on are:

- Queries
- Mutations
- Type System
- Type Language
- Arguments
