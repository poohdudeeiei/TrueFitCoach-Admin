import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormWatch,
} from "react-hook-form";

export interface RegisterProps {
  control: Control<RegisterType>;
  errors: FieldErrors<RegisterType>;
  handleSubmit: UseFormHandleSubmit<RegisterType>;
  watch: UseFormWatch<RegisterType>;
  onSubmit: (data: RegisterType) => void;
}

export type RegisterType = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export interface LoginProps {
  control: Control<LoginType>;
  errors: FieldErrors<LoginType>;
  handleSubmit: UseFormHandleSubmit<LoginType>;
  onSubmit: (data: LoginType) => void;
}
