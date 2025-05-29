import React from "react";

function BottomComponent(props) {
  // let dataToTop3 = props.dataToTop3;
  // let headingBottom = props.headingBottom;
  // Destructuring
  let { dataToTop3, headingBottom, data } = props;

  console.log("dataToTop3: ", dataToTop3);
  console.log("headingBottom: ", headingBottom);

  console.log("data in Bottom: ", data);
  return (
    <>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-warning">
            <div className="panel-heading">{headingBottom}</div>
            <div className="panel-body">
              <div>
                <textarea
                  name=""
                  id="input"
                  className="form-control"
                  rows="3"
                  required="required"
                >
                  Hello VTI
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomComponent;
