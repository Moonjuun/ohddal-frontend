import { commonApi } from '@/libs/api';

interface PostFileResponse {
  bestGuess: any[];
  result: any[];
  scoreNoneZeroResult: any[];
  scoreZeroResult: any[];
}

export const postFile = async (file: File | null): Promise<PostFileResponse> => {
  if (!file) {
    throw new Error('No file provided');
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    // 공통 API 호출 함수 사용
    const response = await commonApi.post('/postFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // response.data로 수정
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
