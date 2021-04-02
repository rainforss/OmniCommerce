import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { GetServerSideProps, NextPage } from "next";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import router from "next/dist/client/router";
import React, { useState } from "react";
import { InputField } from "../../components/InputField";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/Wrapper";
import { useChangePasswordMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { createUrqlClient } from "../../utils/urqlClient";

const ResetPassword: NextPage<WithUrqlProps> = ({ token }) => {
  const [, changePassword] = useChangePasswordMutation();
  const [error, setError] = useState("");
  return (
    <>
      <NavBar />
      <Wrapper variant="regular">
        <Formik
          initialValues={{ newPassword: "" }}
          onSubmit={async (values, actions) => {
            const response = await changePassword({
              newPassword: values.newPassword,
              token,
            });
            if (response.data?.changePassword.errors) {
              const errorMap = toErrorMap(response.data.changePassword.errors);
              if ("token" in errorMap) {
                setError(errorMap.token);
              }
              actions.setErrors(
                toErrorMap(response.data.changePassword.errors)
              );
            } else if (response.data?.changePassword.user) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {error ? (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle mr={2}>{error}</AlertTitle>
                  <AlertDescription mx={2}>
                    Please re-submit your change password inquiry
                  </AlertDescription>
                  <CloseButton ml="auto" />
                </Alert>
              ) : null}
              <InputField
                name="newPassword"
                placeholder="New Password"
                label="New Password"
                type="password"
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
                Confirm
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(ResetPassword);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: { token: params?.token as string },
  };
};
