import lighting from "../src/assets/img/process/lighting.svg"
import processOne from "../src/assets/img/process/1.svg"
import rulerAndPen from "../src/assets/img/process/ruler-and-pen.svg";
import processTwo from "../src/assets/img/process/2.svg";
import messageTaker from "../src/assets/img/process/message-taker.svg";
import processThree from "../src/assets/img/process/3.svg";

function Process() {
  return (
    <div className="process">
      <div className="container process__container">
        <div className="process-card">
          <img
            className="process-icon"
            src={lighting}
            alt=""
          />
          <img
            className="bg-absolute"
            src={processOne}
            alt=""
          />
          <h3 className="process-heading">Led Ask Possible Mistress</h3>
          <p className="process-description">
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="process-card">
          <img
            className="process-icon"
            src={rulerAndPen}
            alt=""
          />
          <img
            className="bg-absolute"
            src={processTwo}
            alt=""
          />
          <h3 className="process-heading">Elegance Eat Likewise</h3>
          <p className="process-description">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded
            incommode.
          </p>
        </div>
        <div className="process-card">
          <img
            className="process-icon"
            src={messageTaker}
            alt=""
          />
          <img
            className="bg-absolute"
            src={processThree}
            alt=""
          />
          <h3 className="process-heading">Message Oram Nothing</h3>
          <p className="process-description">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
