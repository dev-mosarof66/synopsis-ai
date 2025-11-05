import Banner from "@/components/summary/banner";
import Header from "@/components/summary/header";
import SummaryList from "@/components/summary/summary-list";

const YourSummaries = () => {
  return (
    <div className="w-full min-h-screen flex flex-col pt-20 px-4 max-w-7xl mx-auto gap-6">
      {/* header  */}
      <Header />
      {/* banner  */}
      <Banner />
      {/* list  */}
      <SummaryList />
    </div>
  );
};

export default YourSummaries;
