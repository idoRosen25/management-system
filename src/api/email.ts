import { Role } from '@prisma/client';
import { Resend, SenderString } from '../consts';
import { InviteEmailTemplate } from '@/components/Emails/invite-email-template';
import { createUserInvitePath } from '../app/api/invite/utils';

export const SendInviteEmail = async (
  fullName: string,
  email: string,
  url: string,
  subject: string,
) => {
  try {
    // TODO: change from address to actual platform email - need to purchasedomain. currently not developed
    const { data } = await Resend.emails.send({
      from: SenderString,
      to: [email],
      subject,
      // text field is required but not used in the sent email
      text: '',
      //
      react: InviteEmailTemplate({
        fullName,
        url,
      }),
    });

    // if email was sent successfully, data will contain field id for the request id in Resend dashboard.
    return data?.id;
  } catch (error) {
    return error;
  }
};
