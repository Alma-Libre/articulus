import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="font-weight-light">Welcome To Articulus</h1>
                <p className="lead">Read And Write Awesome Articles</p>
              </div>
            </div>
          </div>
        </header>

        <section className="py-5">
          <div className="container">
            <h2 className="font-weight-light">Stay Awesome</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus ab nulla dolorum autem nisi officiis blanditiis
              voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
              cumque magnam enim fugiat reprehenderit expedita.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default Landing;
