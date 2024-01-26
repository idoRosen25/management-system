import * as React from 'react';
import Button from '../Button/Button';

interface InviteEmailTemplateProps {
  fullName: string;
  url: string;
}

export const InviteEmailTemplate: React.FC<
  Readonly<InviteEmailTemplateProps>
> = ({ fullName, url }) => (
  <div className="w-dull flex justify-center items-center">
    <h1>Welcome, {fullName}!</h1>
    <Button
      text={'Accept invitation'}
      onClick={() => window.open(url, '_black')}
    />
  </div>
);
