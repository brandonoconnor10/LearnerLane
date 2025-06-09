import PageLayout from '../components/PageLayout';
import VerticalLineContainer from '../components/VerticalLineContainer';
import StyledButton from '../components/StyledButton';
import { useK53Data } from '../hooks/useK53Data';
import { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

export default function ReservationSignPage() {
  const { content, loading, error } = useK53Data('Road Signs', 'Reservation Sign');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const result = await fetchData(
          'Section', '"Road Signs"',
          'Subsection', '"Reservation Signs"',
          100,
          ['Image', 'Content', 'Type', 'SortOrder'] 
        );

        const signImages = result
          .filter((record) => record.fields?.Type === 'Sign' && record.fields?.Image)
          .map((record) => ({
            imageUrl: record.fields.Image[0].url,
            title: record.fields.Content || 'Unnamed Sign',
            sortOrder: record.fields.SortOrder || 0, 
          }));

          // Sort images by SortOrder
          signImages.sort((a, b) => a.sortOrder - b.sortOrder);

        setImages(signImages);
      } catch (err) {
        console.error('Failed to fetch images:', err.message);
      }
    };

    loadImages();
  }, []);

  // Show nothing until data is ready
  if (loading) {
    return null;
  }

  // If there's an error, display an error page
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
        <>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan font-rajdhani mt-4">
            Reservation Signs
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-3xl rounded-2xl border-2 border-cyan p-6 md:p-8 bg-white/5 backdrop-blur-md text-gray-300 text-center leading-relaxed">
              <p className="whitespace-pre-line">{content}</p>
            </div>
          </div>
        </>
      }
      contentClassName="items-start justify-center"
    >
      <VerticalLineContainer className="mt-6">
        {images.map((img, index) => (
          <div key={index} className="relative flex flex-col items-center z-10">
            <StyledButton
              variant="large"
              className="my-6"
            >
              <div className="flex items-center">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-16 h-16 object-contain mr-4"
                />
                {img.title}
              </div>
            </StyledButton>
          </div>
        ))}
        <div className="relative flex flex-col items-center z-10">
          <StyledButton
            variant="large"
            className="my-6"
          >
            Take Quiz
          </StyledButton>
        </div>
      </VerticalLineContainer>
    </PageLayout>
  );
}