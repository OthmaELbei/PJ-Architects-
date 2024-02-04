import "./fotter.css";
import MyData from "../../DataProje/DataOnePage.json";
export default function Fotter() {
  const data = MyData.Data;
  return (
    <>
      <div className=" prent-Footer">
        <div className="row gap-3 mx-4">
          <div className="col-lg-2 col-md-3 col-12  flex-grow-1  ">
            <h3> {data.studio}</h3>
            <p>{data.Reu}</p>
          </div>
          <div className="col-lg-2 col-md-3 col-12  flex-grow-1 ">
            <h3>{data.contact}</h3>
            <h5>{data.namber}</h5>
            <p>{data.gmail}</p>
          </div>
          <div className="col-lg-2 col-md-3 col-12  flex-grow-1 ">
            <h3>{data.Onlion}</h3>
            <h5>{data.instgaram}</h5>
            <h5>{data.fecebook}</h5>
          </div>
          <div className="col-lg-2 col-md-3 col-12  flex-grow-1 ">
            <h4 className="mt-5">{data.touch}</h4>
          </div>
        </div>
        <hr />
        <div className="row gap-3 mx-4 pt-5 d-flex justify-content-end align-items-center ">
          <div className="col-lg-2 col-md-3 col-12  flex-grow-1">
            <p>{data.tetel}</p>
          </div>
          <div className="col-lg-2 col-md-3 col-12  flex-grow-1">
            {" "}
            <h1>{data.logo}</h1>
          </div>
          <div className="col-lg-2 col-md-3 col-12  flex-grow-1">
            {data.stud}
          </div>
          <div className="col-lg-2 col-md-3 col-12  flex-grow-1">
            {data.hchtag}
          </div>
        </div>
      </div>
    </>
  );
}
