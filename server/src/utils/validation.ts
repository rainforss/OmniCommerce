import { UsernamePasswordInput, UserResponse } from "../resolvers/users";

export const validation = (options: UsernamePasswordInput): UserResponse => {
  if (!options.email.includes("@")) {
    return {
      errors: [
        { field: "email", message: "Please enter a valid email address" },
      ],
    };
  }

  if (options.username.includes("@")) {
    return {
      errors: [{ field: "username", message: "Username cannot contain @" }],
    };
  }

  if (options.username.length <= 2) {
    return {
      errors: [
        {
          field: "username",
          message: "Username length must be greater than 2",
        },
      ],
    };
  }

  if (options.password.length <= 3) {
    return {
      errors: [
        {
          field: "password",
          message: "Password length must be greater than 3",
        },
      ],
    };
  }

  return {
    errors: [],
  };
};
