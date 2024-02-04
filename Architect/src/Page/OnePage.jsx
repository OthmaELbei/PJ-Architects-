import Headers from "../Commponent/1-Header";
import Meuns from "../Commponent/2-meun";

import Presons from "../Commponent/3-Presont/Preson";

import Progects from "../Commponent/4-RecentProjects/indext";
import Postes from "../Commponent/5-Poste";
import Fotters from "../Commponent/6-Fotter/Index";

export default function OnePage() {
  return (
    <>
      <Headers />
      <Meuns />
      <Presons />
      <Progects />
      <Postes />
      <Fotters />
    </>
  );
}
