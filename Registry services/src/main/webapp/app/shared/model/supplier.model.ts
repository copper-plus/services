export interface ISupplier {
  id?: number;
  name?: string;
  status?: boolean;
  rating?: number;
  details?: string;
}

export const defaultValue: Readonly<ISupplier> = {
  status: false,
};
