export class SuccessResponse {
  constructor(
    public status: number,
    public message: string,
    public data?: any
  ) {}
}
