"use client";
import Layout from "@features/auth/Layout";
import { Button } from "@shared/ui/Button/Button";
import Input from "@shared/ui/Input/Input";
import styles from "./RestoreForm.module.scss";
import { useRouter } from "next/navigation";

const RestoreFrom = () => {
  const router = useRouter();
  return (
    <Layout
      title="restore your account/"
      subtitle="log in"
      route={() => router.push("login")}
    >
      <form>
        <Input placeholder="Email" />
        <Button className={styles.btn}>Restore</Button>
      </form>
    </Layout>
  );
};

export default RestoreFrom;
