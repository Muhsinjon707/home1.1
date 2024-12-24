import oracle from "../src/assets/img/companies/oracle.svg";
import morpheus from "../src/assets/img/companies/morpheus.svg";
import samsung from "../src/assets/img/companies/samsung.svg";
import monday from "../src/assets/img/companies/monday.svg";
import segment from "../src/assets/img/companies/segment.svg";

function Companies() {
  return (
    <div className="companies">
      <div className="container companies__container">
        <h2 className="companies-heading">
          Trusted By Over 100+ Startups and freelance business
        </h2>
        <div className="images">
            <img src={oracle} alt="" />
            <img src={morpheus} alt="" />
            <img src={samsung} alt="" />
            <img src={monday} alt="" />
            <img src={segment} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Companies;
