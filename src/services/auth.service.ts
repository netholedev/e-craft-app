import { BaseService } from './_base.service';

class AuthService extends BaseService {
  login = async (body: { email: string; password: string }) => {
    return this.http.post('/auth/login', body);
  };

  profile = async () => {
    return this.http.get('/auth/profile');
  };

  forgotPassword = async (body: { email: string }) => {
    return this.http.post('/auth/forgot-password', body);
  };
}

export const authService = new AuthService();
