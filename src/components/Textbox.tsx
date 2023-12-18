import React, { ReactElement } from "react";

enum FormType {
  Text,
  Password,
}

let formTypeToText = (type: FormType): string => {
  switch (type) {
    case FormType.Text:
      return "text";
    case FormType.Password:
      return "password";
  }
};

const Textbox: React.FC<{
  name: string;
  formType?: FormType;
  onChange: (e: any) => void;
}> = ({ name, formType = FormType.Text, onChange }): ReactElement => {
  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">{name}</span>
      </div>
      <input
        type={formTypeToText(formType)}
        className="input input-bordered w-full max-w-md"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export {Textbox, FormType};
