import React from "react";

const FeedbackForm: React.FC = () => {
  const [formSuccess, setFormSuccess] = React.useState<boolean>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = Math.random() > 0.5;
    setFormSuccess(success);
  };

  return (
    <>
      <h2>Feedback</h2>

      <form onSubmit={handleSubmit}>
        <textarea placeholder="Ваш відгук..." required />
        <br />
        <button type="submit">Send</button>
      </form>

      {formSuccess === true && <p>Дякуємо за ваш відгук!</p>}
      {formSuccess === false && <p>Сталася помилка, спробуйте ще раз</p>}
    </>
  );
};

export default FeedbackForm;
