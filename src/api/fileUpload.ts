import axios from 'axios';

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
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/postFile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
