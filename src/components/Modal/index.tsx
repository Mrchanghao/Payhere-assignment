import { Fragment, PropsWithChildren, ReactNode } from "react";
import CloseIcon from "../../assets/close_icon.svg";
import {
  Bg,
  CloseDiv,
  IconImg,
  OverLay,
  Paragraph,
  Root,
  Title,
  TitleArea,
} from "./styles";

type ModalProps = PropsWithChildren<{
  open: boolean;
  onCloseModal: (open: boolean) => void;
  title: string | null;
  label: string | null;
}>;

export const Modal = ({
  open,
  onCloseModal,
  title,
  label,
  children,
}: ModalProps) => {
  if (!open) return null;
  return (
    <Fragment>
      <OverLay />
      <Bg>
        <Root>
          <CloseDiv>
            <IconImg
              src={CloseIcon}
              alt="close Icon"
              role="button"
              onClick={() => {
                onCloseModal(false);
              }}
            />
          </CloseDiv>
          <TitleArea>
            <Title>{title && title}</Title>
          </TitleArea>
          {label && (
            <Paragraph>
              <p>{label}</p>
            </Paragraph>
          )}
          {children}
        </Root>
      </Bg>
    </Fragment>
  );
};
