export interface Endpoint {
  email: string;
  password: string;
  token?: string;
}

export interface Signup {
  name: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
  user: {
    email: string;
    name: string;
  }
}