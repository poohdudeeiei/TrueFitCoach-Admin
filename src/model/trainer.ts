
export type Trainer = {
  _id: string;
  trainer_first_name: string;
  trainer_last_name: string;
  trainer_email: string;
  phone_number: string;
  nickname: string;
  trainer_profile_image: string;
  verify: number;
};

export type TrainerType = {
  trainers: Trainer[];
  totalPage: number;
};

export interface TrainerProps {
  trainers: TrainerType | undefined;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  isLoading: boolean;
}
