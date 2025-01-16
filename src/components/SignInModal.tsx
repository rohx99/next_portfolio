import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
// import { Button } from "./ui/moving-border";
import SignInForm from "./SignInForm";
const SignInModal = () => {
  return (
    <Modal>
      <ModalTrigger>
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500 text-[0.9rem] font-bold">
          Sign In
        </span>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <SignInForm />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default SignInModal;
