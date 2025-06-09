import { useK53Data } from '../hooks/useK53Data';
import { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

export default function ControlSignsPage() {
  const { content, loading, error } = useK53Data('Road Signs', 'Control Sign');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const result = await fetchData(
          'Section', '"Road Signs"',
          'Subsection', '"Control Signs"',
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

  return (
    <div className="min-h-screen bg-[--color-navy-dark] text-[--color-white] font-[--font-rajdhani] p-6">
      <h1 className="text-4xl font-bold text-center mb-2 font-[--font-orbitron]">Learner Lane</h1>
      <h2 className="text-2xl text-center text-[--color-cyan] mb-6">Control Signs</h2>

      <div className="border border-[--color-cyan] p-6 max-w-3xl mx-auto text-[--color-gray-light] mb-12 rounded">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="whitespace-pre-line">{content}</p>
        )}
      </div>

      <div className="flex flex-col items-center gap-12">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col items-center border border-[--color-cyan] p-4 w-64 rounded">
            <div className="bg-white p-4 rounded mb-3">
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="text-[--color-cyan-light] text-lg font-semibold text-center">
              {img.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}