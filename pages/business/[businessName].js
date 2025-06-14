import DentistPage from "../components/layouts/DentistPage";
import SalonPage from "../components/layouts/SalonPage";


const businessComponents = {
  dentist: DentistPage,
   salon: SalonPage,
//   bakery: BakeryPage,
};

export async function getStaticPaths() {
  const paths = Object.keys(businessComponents).map(name => ({
    params: { businessName: name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { businessName: params.businessName } };
}

export default function DynamicBusinessPage({ businessName }) {
  const BusinessComponent = businessComponents[businessName];
  return BusinessComponent ? <BusinessComponent /> : <div>Business not found</div>;
}

