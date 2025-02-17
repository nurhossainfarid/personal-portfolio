import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export interface Blog {
  id: string;
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  github: string;
  live: string;
  features?: string[];
  technologies: {
    frontend?: string;
    backend?: string;
    database?: string;
    paymentGateway?: string;
    deployment?: string;
  };
}

export interface UserInfoProps {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export interface ContactList {
  id: string;
  name: string;
  email: string;
  message: string;
}
