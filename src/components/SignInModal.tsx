import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import { Button } from "./ui/moving-border";
import SignInForm from "./SignInForm";
const SignInModal = () => {
  return (
    <Modal>
      <ModalTrigger>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-600 hover:scale-95 ease-in-out duration-300"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500 text-[1rem] font-bold">
            Sign In
          </span>
        </Button>
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
