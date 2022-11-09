import { Card } from "@nextui-org/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Alert(props: Props) {
  return (
    <Card
      color="$warning"
      variant="flat"
      css={{
        backgroundColor: "$warningLight",
        borderColor: "$warningBorder",
      }}
    >
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}
