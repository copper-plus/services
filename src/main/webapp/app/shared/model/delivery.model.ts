export interface IDelivery {
  id?: number;
  name?: string;
  status?: boolean;
  rating?: number;
  details?: string;
}

export const defaultValue: Readonly<IDelivery> = {
  status: false,
};
