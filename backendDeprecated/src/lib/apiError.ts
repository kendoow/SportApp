export class ApiError extends Error {
  status

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }

  static UnauthorizedError() {
    return new ApiError(401, 'ProfileMenu is not authorized')
  }

  static BadRequest(message: string) {
    return new ApiError(400, message)
  }
}
