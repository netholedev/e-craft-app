export interface IPermission {
  id: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATH';
}

export interface ICurrentUser {
  id: string;
  email: string;
  permissions: IPermission[];
  subCompanies: string[];
}
