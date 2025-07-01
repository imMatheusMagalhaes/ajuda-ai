type FindParams<T> = {
  skip?: number;
  take?: number;
  cursor?: T;
  where?: T;
  orderBy?: Partial<Record<keyof T, 'asc' | 'desc'>>;
};

export default FindParams;
