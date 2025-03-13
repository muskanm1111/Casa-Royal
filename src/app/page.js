import Aboutbanner from "@/components/aboutbanner";
import Banner from "@/components/banner";
import Card from "@/components/card";
import Deals from "@/components/deals";
import Imgs from "@/components/imgs";
import OurValues from "@/components/ourvalues";
import RealEstateAgencies from "@/components/RealEstateAgencies";
import Reviews from "@/components/reviews";
import Team from "@/components/team";

export default function Home() {
  return <>
  <Banner />
  <Card />
  <Deals />
  <Imgs />
  <Team />
  <Aboutbanner />
  <RealEstateAgencies />
  <OurValues />
  <Reviews  />
  </>;
}
