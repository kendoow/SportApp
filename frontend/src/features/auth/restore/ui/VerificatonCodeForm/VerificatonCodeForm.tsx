"use client";

import Layout from "@features/auth/Layout";
import { Button } from "@shared/ui/Button/Button";
import Input from "@shared/ui/Input/Input";
import styles from "./VerificatonCodeForm.module.scss";
import { useRouter } from "next/navigation";

const VerificatonCodeForm = () => {
  const router = useRouter();
  return (
    <Layout
      title=" input verification code/"
      subtitle="back"
      route={() => router.back()}
    >
      <form>
        <Input error='Input verify code' placeholder="Put your code" />
        <Button className={styles.btn}>Continue</Button>
      </form>
    </Layout>
  );
};

export default VerificatonCodeForm;
