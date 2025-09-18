import { api } from '../../api/api';
import type { User, LoginData, LoginResponse } from '../../shared/types/auth';

export const authService = {
  async login(data: LoginData): Promise<LoginResponse> {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  async getMe(): Promise<User> {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },
};
