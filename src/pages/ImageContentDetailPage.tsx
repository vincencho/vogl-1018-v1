import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useLayout } from '../contexts/LayoutContext';
import { useMainPadding } from '../contexts/MainPaddingContext';
import SaveModal from '../components/SaveModal';
import ProductSimilar from '../components/ProductSimilar';
import ShareModal from '../components/ShareModal';
import OriginalContent from '../components/OriginalContent';
import ProductTab from '../components/ProductTab';
import CoordinateTab from '../components/CoordinateTab';
import MoodTab from '../components/MoodTab';
import IdeaTab from '../components/IdeaTab';
import ImageContentSection from '../components/ImageContentSection';
import { TrendSeed } from '../api/trendSeedApi';

const ImageContentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [content, setContent] = useState<TrendSeed | null>(null);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isObjectRecognitionActive, setIsObjectRecognitionActive] = useState(false);
  const [isProductSimilarOpen, setIsProductSimilarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('original');
  const { viewportSize, setHeaderStyle, setFooterStyle } = useLayout();
  const { setMainPadding } = useMainPadding();

  useEffect(() => {
    if (viewportSize === 'desktop') {
      setHeaderStyle('fixed');
      setFooterStyle('none');
      setMainPadding('image-detail-pc');
    } else {
      setHeaderStyle('hide');
      setFooterStyle('none');
      setMainPadding('no-padding');
    }

    return () => {
      setHeaderStyle('fixed');
      setFooterStyle('fixed');
      setMainPadding('default');
    };
  }, [viewportSize, setHeaderStyle, setFooterStyle, setMainPadding]);

  useEffect(() => {
    const seedData = location.state?.seedData;
    if (seedData) {
      setContent(seedData);
    } else {
      // Fallback to fetching data if it's not available in location state
      const fetchContent = async () => {
        // Here you would typically fetch the data from your API
        // For now, we'll use mock data
        const mockContent: TrendSeed = {
          id: parseInt(id || '0'),
          name: 'Elegant White Ensemble',
          imageUrl: 'https://i.pinimg.com/474x/97/94/0d/97940d3488cd063b20e2a457d59674d2.jpg',
          likeCount: 1000,
          commentCount: 50,
          saved: false
        };
        setContent(mockContent);
      };

      fetchContent();
    }
  }, [id, location.state]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    setIsSaveModalOpen(true);
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handleObjectRecognition = () => {
    setIsObjectRecognitionActive(!isObjectRecognitionActive);
  };

  const handleProductSimilar = () => {
    setIsProductSimilarOpen(true);
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className={`${viewportSize === 'desktop' ? 'flex' : ''}`}>
        <div className={`${viewportSize === 'desktop' ? 'w-1/2' : 'w-full'}`}>
          <ImageContentSection
            imageUrl={content.imageUrl}
            title={content.name}
            isObjectRecognitionActive={isObjectRecognitionActive}
            onGoBack={handleGoBack}
            onShare={handleShare}
            onSave={handleSave}
            onObjectRecognition={handleObjectRecognition}
            onProductSimilar={handleProductSimilar}
            isPCView={viewportSize === 'desktop'}
          />
        </div>
        <div className={`${viewportSize === 'desktop' ? 'w-1/2' : 'w-full'}`}>
          <div className="bg-white sticky top-0 z-10">
            <div className="flex justify-between border-t border-b">
              <button
                className={`px-4 py-2 ${
                  activeTab === 'original' ? 'border-b-2 border-indigo-600' : ''
                }`}
                onClick={() => setActiveTab('original')}
              >
                제품
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === 'product' ? 'border-b-2 border-indigo-600' : ''
                }`}
                onClick={() => setActiveTab('product')}
              >
                코디
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === 'coordinate'
                    ? 'border-b-2 border-indigo-600'
                    : ''
                }`}
                onClick={() => setActiveTab('coordinate')}
              >
                무드
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === 'mood' ? 'border-b-2 border-indigo-600' : ''
                }`}
                onClick={() => setActiveTab('mood')}
              >
                아이디어
              </button>
            </div>
          </div>
          <div className="p-4">
            {activeTab === 'original' && <OriginalContent content={content} />}
            {activeTab === 'product' && <ProductTab />}
            {activeTab === 'coordinate' && <CoordinateTab />}
            {activeTab === 'mood' && <MoodTab />}
            {activeTab === 'idea' && <IdeaTab />}
          </div>
        </div>
      </div>

      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={() => {
          // Handle save logic
          setIsSaveModalOpen(false);
        }}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        contentId={content.id}
      />

      <ProductSimilar
        isOpen={isProductSimilarOpen}
        onClose={() => setIsProductSimilarOpen(false)}
      />
    </div>
  );
};

export default ImageContentDetailPage;