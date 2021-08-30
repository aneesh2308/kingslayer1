import React from 'react';

const CommonHeroSection = (props) => {
    return(
        <div className="container-fluid bg-main text-center pt-6 pb-6">
        <h3>{props.title}</h3>
        <div className="row justify-content-center">
          <div className="col-md-6 text-left pt-4">
            <form>
              <input
                type="search"
                placeholder="Search"
                className="form-control bg-light brad-0"
              />
            </form>
          </div>
        </div>
      </div>
    )
}
export default CommonHeroSection;