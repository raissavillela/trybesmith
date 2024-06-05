export enum ServiceResponseErrorType {
  INVALID_DATA = 'INVALID_DATA',
  UNAUTHORIZED = 'UNAUTHORIZED',
  NOT_FOUND = 'NOT_FOUND',
}
  
export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};
  
export type ServiceResponseSuccess<T> = {
  status: 200, 
  data: T
};
  
export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;