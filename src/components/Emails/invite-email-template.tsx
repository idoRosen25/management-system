interface InviteEmailTemplateProps {
  fullName: string;
  url: string;
}

// TODO: install react-email and prettify invite email
export const InviteEmailTemplate: React.FC<
  Readonly<InviteEmailTemplateProps>
> = ({ fullName, url }) => (
  <div className="w-dull flex justify-center items-center">
    <h1>Welcome, {fullName}!</h1>
    <a
      href={url}
      target={'blank'}
      className="border border-black p-4 font-medium text-md bg-indigo-600 text-white hover:bg-indigo-800 cursor-pointer"
    >
      Accept invitation
    </a>
  </div>
);
