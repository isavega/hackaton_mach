import React from "react";
import { render } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("renders UserProfile component without crashing", () => {
  render(
    <UserProfile
      name="John Doe"
      balance={1000}
      accountNumber="123456789"
      transferData={[]}
    />
  );
});
