import { Slide } from "react-reveal";

export default function Image(p) {
  return (
    <>
      <Slide top>
        <div className="mx-5 py-5">
          <img className="w-100  h-100" src={p.Img} alt="" />
        </div>
      </Slide>
    </>
  );
}
