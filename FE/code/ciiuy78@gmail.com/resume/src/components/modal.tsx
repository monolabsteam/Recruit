import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IModal } from "src/model/modal";
import { styled } from "@stitches/react";

const WrapperModalStyle = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  paddingTop: "25vh",

  "&.visible": {
    display: "block",
  },
  "&.invisible": {
    display: "none",
  },
});

const ModalMainStyle = styled("main", {
  width: "600px",
  height: "300px",
  backgroundColor: "white",
  borderRadius: "10px",
  margin: "auto",
  padding: "20px",
});

const ModalHeaderStyle = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const ModalSectionStyle = styled("section", {
  display: "flex",
});

const ModalAsideStyle = styled("aside", {
  width: "30%",
});

const ModalArticleStyle = styled("article", {});

const Modal: React.FC<ModalProps> = (props) => {
  const {
    title,
    period,
    percent,
    description,
    positions,
    stacks,
    prize,
    showTarget,
    setShowTarget,
  } = props;

  const [isShow, setIsShow] = useState<boolean>(false);

  const close = useCallback(() => {
    setIsShow(false);
    setShowTarget("");
  }, [setShowTarget]);

  useEffect(() => {
    if (showTarget !== "") {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [title, showTarget]);

  const onClickCloseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    close();
  };

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    close();
  };

  const onClickInside = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const modal = (
    <WrapperModalStyle
      className={`${isShow ? "visible" : "invisible"}`}
      onClick={onClickOutside}
    >
      <ModalMainStyle onClick={onClickInside}>
        <ModalHeaderStyle>
          <h3>{title}</h3>
          <button type="button" onClick={onClickCloseBtn}>
            close
          </button>
        </ModalHeaderStyle>
        <ModalSectionStyle>
          <ModalAsideStyle>
            <p>
              <b>Contribution</b>
            </p>
            {percent}
          </ModalAsideStyle>
          <ModalArticleStyle>
            {description && (
              <p>
                <b>Description</b>: {description}
              </p>
            )}
            <p>
              <b>Period</b>: {period}
            </p>
            <p>
              <b>Position</b>: {positions.join(", ")}
            </p>
            <p>
              <b>Stack</b>: {stacks.join(", ")}
            </p>
            {prize && (
              <p>
                <b>Prize</b>: {prize}
              </p>
            )}
          </ModalArticleStyle>
        </ModalSectionStyle>
      </ModalMainStyle>
    </WrapperModalStyle>
  );

  return ReactDOM.createPortal(modal, document.getElementById("root")!);
};

interface ModalProps extends IModal {
  showTarget: String;
  setShowTarget: (showTarget: String) => void;
}

export default Modal;
