import React, { useState } from "react";
import { BlogList } from "./Data/BlogList";
import Footer from "./Reuseable/Footer";

function Blog() {
  const [blogs] = useState(BlogList);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h4 className="center">our blogs</h4>
          <div className="col l9">
            {blogs.map(function (blog) {
              const { id, title, img, outline } = blog;
              return (
                <div key={id} className="col l4 s12">
                  <div className="card">
                    <div className="card-image">
                      <img src={img} alt="" />
                      <span className="card-title">{title}</span>
                    </div>
                    <div className="card-content">{outline}</div>
                    <div>
                      <button className="waves-effect waves-light btn">
                        read more
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col l3 s12">
            <div>
              <div>
                <h4>Recent Posts</h4>
              </div>
              <div>
                {blogs.map(function (blog) {
                  const { id, title } = blog;
                  return (
                    <div key={id}>
                      <blockquote>
                        <h5>{title}</h5>
                      </blockquote>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
