import { useRef, useState } from "react";
import styled from "styled-components";
import { withStyles } from "./withStyles";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: ${({ theme }) => theme.primaryColor};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Message = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
`;

interface WidgetProps {
  theme: object;
  iframeHead: HTMLElement;
}

function Widget({ _theme, _iframeHead }: WidgetProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";

    setTimeout(() => {
      console.log("Form submitted:", { name, email });
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      {!submitted ? (
        <>
          <Title>Contact Us</Title>
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Your Name" ref={nameRef} required />
            <Input type="email" placeholder="Your Email" ref={emailRef} required />
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </>
      ) : (
        <Message>Thank you! We’ll get back to you soon.</Message>
      )}
    </Container>
  );
}

export default withStyles(Widget);
