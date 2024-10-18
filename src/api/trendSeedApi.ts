import apiClient from './apiClient';

export interface TrendSeed {
  id: number;
  name: string;
  imageUrl: string;
  likeCount: number;
  commentCount: number;
  saved: boolean;
}

const sanitizeData = (data: any) => {
  return JSON.parse(JSON.stringify(data, (key, value) =>
    typeof value === 'symbol' ? undefined : value
  ));
};

export const fetchTrendSeeds = async (): Promise<TrendSeed[]> => {
  try {
    const response = await apiClient.get<any[]>('/contents');
    console.log('API response:', response.data);
    const sanitizedData = sanitizeData(response.data);
    return sanitizedData.slice(0, 6).map((item, index) => ({
      id: index + 1,
      name: item.name || 'Unknown',
      imageUrl: item.imageUrl || '',
      likeCount: item.likeCount || 0,
      commentCount: item.commentCount || 0,
      saved: false
    }));
  } catch (error) {
    console.error('Error fetching trend seeds:', error);
    throw new Error('Failed to fetch trend seeds. Please try again later.');
  }
};