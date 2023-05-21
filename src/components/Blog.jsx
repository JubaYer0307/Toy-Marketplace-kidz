import React from "react";
import useTitle from "../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="text-center ">
      <div className="mb-5 bg-cyan-400">
        <h2 className="font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p>
          Access Token: A credential issued upon successful authentication, used
          to access protected resources. Stored securely on the client-side <br />
          Refresh Token: A long-lived credential used to obtain new access
          tokens without re-authentication. Also stored securely on the
          client-side.
        </p>
      </div>

      <div className="mb-5 bg-cyan-400">
        <h2 className="font-bold">Compare SQL and NoSQL databases?</h2>
        <p >
          SQL Databases: Structured, relational databases with predefined
          schemas and support for complex queries and transactions. <br />
          NoSQL Databases: Non-relational databases that offer flexible schemas,
          horizontal scalability, and better performance for large-scale data.
          They sacrifice some querying capabilities and transactions.
        </p>
      </div>

      <div className="mb-5 bg-cyan-400">
        <h2 className="font-bold">What is Express.js? What is Nest.js (google it)?</h2>
        <p>
          Express.js: Express.js is a popular web application framework for
          Node.js. It simplifies the process of building web applications by
          providing a robust set of features for handling HTTP requests,
          routing, middleware, and more. <br />
          Nest.js: Nest.js is a progressive Node.js framework for building
          efficient and scalable server-side applications. It is inspired by
          Angular's architecture and provides a modular, extensible, and
          TypeScript-friendly development environment.
        </p>
      </div>

      <div className="mb-5 bg-cyan-400">
        <h2 className="font-bold">What is MongoDB aggregate and how does it work (google it)?</h2>
        <p>
          MongoDB Aggregate: MongoDB Aggregate is a powerful feature that allows
          for advanced data processing and analysis within MongoDB. It provides
          a way to perform complex queries, transformations, and aggregations on
          data stored in MongoDB collections. Aggregation pipelines are
          constructed using a series of stages that process documents and return
          the computed results.
        </p>
      </div>
    </div>
  );
};

export default Blog;
