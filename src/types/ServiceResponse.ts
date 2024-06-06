type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';
  
export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};
  
export type ServiceResponseSuccess<DataType> = {
  status: 'SUCCESS' | 'CREATED',
  data: DataType,
};
  
export type ServiceResponse<DataType> = ServiceResponseError | ServiceResponseSuccess<DataType>;