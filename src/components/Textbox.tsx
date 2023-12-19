enum FormType {
  Text,
  Password,
}

type PropsType = {
  name: string;
  type?: FormType;
  onChange: (e: any) => void;
};

const formTypeToString = (type: FormType): string => {
  switch (type) {
    case FormType.Text:
      return "text";
    case FormType.Password:
      return "password";
  }
};

const Textbox = ({ name, type = FormType.Text, onChange }: PropsType) => {
  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">{name}</span>
      </div>
      <input
        type={formTypeToString(type)}
        className="input input-bordered w-full max-w-md"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export { Textbox, FormType };
