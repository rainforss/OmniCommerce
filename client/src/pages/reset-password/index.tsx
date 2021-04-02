import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import router from "next/dist/client/router";
import React from "react";
import { InputField } from "../../components/InputField";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/Wrapper";
import { useForgotPasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/urqlClient";

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <>
      <NavBar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            await forgotPassword(values);
            router.push("/");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="email"
                placeholder="Email address"
                label="Email"
              />
              <Button
                my={4}
                type="submit"
                variant="outline"
                color="white"
                background="teal.400"
                _hover={{ bg: "teal.600" }}
                verticalAlign="middle"
                isLoading={isSubmitting}
              >
                Reset Password
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(index);
