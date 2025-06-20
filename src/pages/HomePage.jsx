import PageLayout from '../components/PageLayout';
import Subtitle from '../components/Subtitle';
import RoadMap from '../components/RoadMap.jsx';

const HomePage = () => {
  return (
    <PageLayout subtitle={<Subtitle />}>
      <RoadMap />
    </PageLayout>
  );
};

export default HomePage;