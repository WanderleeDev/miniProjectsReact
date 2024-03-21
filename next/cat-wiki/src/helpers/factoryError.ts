export const errorFactory = (ErrorName: string,messageError: string, data?: string) => {
  return class CustomError extends Error {
    metadata: string | null;
    constructor() {
      super(messageError);

      this.name = ErrorName;
      this.metadata = data ?? null;
    }
  }
}
