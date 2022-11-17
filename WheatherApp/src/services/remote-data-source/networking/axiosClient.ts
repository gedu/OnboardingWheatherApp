import { serviceConfig } from '@services/serviceConfig';
import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: `${serviceConfig.baseUrl}/${serviceConfig.version}/`,
});

export const requestSecureGet = async <ResponseData>(path: string) => {
  const response = await axiosClient.get<ResponseData>(
    `${path}&appid=${serviceConfig.apiKey}`,
  );

  return response.data;
};
