export interface IConsumer {
  id?: number;
  name?: string;
  status?: boolean;
  rating?: number;
  details?: string;
}

export const defaultValue: Readonly<IConsumer> = {
  status: false,
};
