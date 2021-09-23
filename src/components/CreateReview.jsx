import React from "react";
import CreateReviewForm from "./CreateReviewForm";
import { useMutation } from "@apollo/client";
import { createReview } from "../qraphql/mutations";
import { useHistory } from "react-router";

function CreateReview({ setNotification }) {
  const [mutate] = useMutation(createReview);
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      const { data } = await mutate({
        variables: {
          review: {
            ...values,
            rating: +values.rating,
          },
        },
      });

      setNotification(
        `Thank you for reviewing ${data.createReview.repository.id}`
      );
      setTimeout(() => {
        setNotification(null);
        history.push(`/${data.createReview.repository.id}`);
      }, 3000);
    } catch (err) {
      setNotification(err.message);
      setTimeout(() => setNotification(null), 3000);
    }
  };
  return <CreateReviewForm onSubmit={onSubmit} />;
}

export default CreateReview;
