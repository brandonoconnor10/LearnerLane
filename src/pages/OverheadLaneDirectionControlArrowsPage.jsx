import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';
import { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

export default function OverheadLaneDirectionControlArrowsPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const result = await fetchData(
          'Section', '"Road Signs"',
          'Subsection', '"Overhead Lane Direction Control Arrows"',
          100,
          ['Image', 'Content', 'Type', 'SortOrder']
        );

        const signs = result
          .filter(r => r.fields?.Type === 'Sign' && r.fields?.Image && r.fields?.Content)
          .map((r, i) => {
            const [rawHeading, ...rest] = r.fields.Content.split('.');
            return {
              imageUrl: r.fields.Image[0].url,
              heading: rawHeading?.trim() || `Signal ${i + 1}`,
              explanation: rest.join('.').trim() || 'No explanation provided',
            };
          });

        setItems(signs);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  if (loading) return null;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white font-rajdhani">
        <p className="text-lg text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <PageLayout
      subtitle={
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4 mb-6 text-center">
          Overhead Lane Direction Control Arrows
        </h2>
      }
      contentClassName="items-start justify-center"
    >
      <VerticalLineContainer className="mt-4">
        {items.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center z-10 w-full">
            <StyledButton variant="large" className="my-4 w-full max-w-5xl px-4 py-5 text-left">
              <div className="flex flex-row items-center justify-start w-full gap-6">
                <img
                  src={item.imageUrl}
                  alt={item.heading}
                  className="w-20 h-20 object-contain flex-shrink-0"
                />
                <div className="flex flex-col text-white">
                  <div className="text-lg font-bold">{item.heading}</div>
                  <div className="text-sm text-gray-300 mt-1">{item.explanation}</div>
                </div>
              </div>
            </StyledButton>
          </div>
        ))}
        <div className="flex justify-center mt-10">
          <StyledButton to="/traffic-signals" asLink variant="large">
            Traffic Signals
          </StyledButton>
        </div>
      </VerticalLineContainer>
    </PageLayout>
  );
}
