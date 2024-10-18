import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

interface Content {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  user: {
    name: string;
    avatar: string;
  };
  trendSeed: {
    name: string;
    url: string;
  };
}

const ImageContentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<Content | null>(null);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isObjectRecognitionActive, setIsObjectRecognitionActive] =
    useState(false);
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
    const fetchContent = async () => {
      // Simulated API call with mock data
      const mockContent: Content = {
        id: parseInt(id || '0'),
        title: 'Elegant White Ensemble',
        description:
          'A stunning white halter top paired with high-waisted wide-leg pants. Perfect for a sophisticated, minimalist summer look.',
        imageUrl:
          'https://i.pinimg.com/474x/97/94/0d/97940d3488cd063b20e2a457d59674d2.jpg',
        user: {
          name: 'Fashion Trendsetter',
          avatar: 'https://source.unsplash.com/random/100x100?face',
        },
        trendSeed: {
          name: 'fashion_fafa',
          url: 'www.instagram.com/fashion_fafa1234',
        },
      };
      setContent(mockContent);
    };

    fetchContent();
  }, [id]);

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
            title={content.title}
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
