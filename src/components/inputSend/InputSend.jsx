import React from "react";
import "./InputSend.scss";
import Input from "../../ui/inputs/Input";
import Button from "../../ui/buttons/Button";

// переиспользуемый компонент для создания нового чата и
// отправки сообщений
const InputSend = (props) => {
  const {
    name,
    placeholder,
    type,
    buttonName,
    value,
    getChange,
    onSubmit,
    buttonType,
    itemDesabled,
    mask,
  } = props;
  return (
    <>
      <form className="input-send" onSubmit={onSubmit}>
        <div className="input-send__input">
          <Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            getChange={getChange}
            itemDesabled={itemDesabled}
            mask={mask}
          />
        </div>
        <div className="input-send__button">
          <Button
            buttonName={buttonName}
            buttonType={buttonType}
            itemDesabled={itemDesabled}
          />
        </div>
      </form>
    </>
  );
};

export default InputSend;
