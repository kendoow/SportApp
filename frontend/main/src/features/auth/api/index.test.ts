const { authSignup } = require("./index");
jest.mock("@shared/api", () => ({
  post: jest.fn(),
}));

jest.mock("@features/auth/store/authStore", () => ({
  setUserData: jest.fn(),
}));

const mockedApiPost = require("@shared/api").post;
const mockedAuthStoreSetUserData =
  require("@features/auth/store/authStore").setUserData;

describe("authSignup", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // it("should signup successfully and set user data", async () => {
  //   const mockResponse = {
  //     data: {
  //       username: "testuser",
  //       email: "testuser@example.com",
  //       accessToken: "mockAccessToken",
  //     },
  //   };
  //   mockedApiPost.mockResolvedValue(mockResponse);
  //
  //   const mockSignupData = {
  //     username: "testuser",
  //     email: "testuser@example.com",
  //     password: "testpassword",
  //     passwordSubmit: "testpassword",
  //   };
  //   const result = await authSignup(mockSignupData);
  //
  //   expect(result).toEqual(mockResponse.data);
  //   expect(mockedApiPost).toHaveBeenCalledWith(
  //     "/auth/signup",
  //     expect.objectContaining(mockSignupData)
  //   );
  //   expect(mockedAuthStoreSetUserData).toHaveBeenCalledWith(
  //     expect.objectContaining(mockSignupData),
  //     "mockAccessToken"
  //   );
  //   expect(localStorage.setItem).toHaveBeenCalledWith(
  //     "accessToken",
  //     "mockAccessToken"
  //   );
  // });

  it("should handle signup error and return error message", async () => {
    const mockErrorResponse = {
      response: { data: { message: "Signup failed" } },
    };
    mockedApiPost.mockRejectedValue(mockErrorResponse);

    const mockSignupData = {
      username: "testuser",
      email: "testuser@example.com",
      password: "testpassword",
      passwordSubmit: "testpassword",
    };
    const result = await authSignup(mockSignupData);

    expect(result).toEqual("Signup failed");
  });
});
