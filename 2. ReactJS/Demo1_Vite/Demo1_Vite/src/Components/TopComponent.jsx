import React, { Component } from "react";

class TopComponent extends Component {
  //
  render() {
    return (
      <>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Component TOP</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      name="Input_Name"
                      id="input"
                      className="form-control"
                      value=""
                      required="required"
                    />
                  </div>

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button type="button" class="btn btn-danger">
                      Sent Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopComponent;
