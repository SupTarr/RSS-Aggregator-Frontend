import React, { ReactElement } from "react";

enum FormType {
  Text,
  Password,
}

const formTypeToText = (type: FormType): string => {
  switch (type) {
    case FormType.Text:
      return "text";
    case FormType.Password:
      return "password";
  }
};

const Textbox: React.FC<{
  name: string;
  type?: FormType;
  onChange: (e: any) => void;
}> = ({ name, type = FormType.Text, onChange }): ReactElement => {
  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">{name}</span>
      </div>
      <input
        type={formTypeToText(type)}
        className="input input-bordered w-full max-w-md"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export {Textbox, FormType};
