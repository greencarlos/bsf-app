import Navbar from "../navigation/Navbar";
import TrackComp from "../comps/TrackComp";
import AuditResourcesComp from "../comps/AuditResourcesComp";
import Footer from "../navigation/Footer";

function TrackPage() {
  return (
    <>
      <Navbar />
      <TrackComp/>
      <AuditResourcesComp />
      <Footer />
    </>
  );
}

export default TrackPage;
