import { BaseService } from './_base.service';

class AuthService extends BaseService {
  login = async (body: { email: string; password: string}) => {
    return this.http.post('/auth/login', body);
  }

  profile = async () => {
    return this.http.get('/auth/profile');
  }
}

export const authService = new AuthService();
