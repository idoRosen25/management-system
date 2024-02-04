import { InviteEmailTemplate } from '@/components/Emails/invite-email-template';
import { Resend } from 'resend';
import { CreateEmailResponse } from '../types';

const resend = new Resend(process.env.VERCEL_EMAIL_API_KEY);
const SenderString = process.env.VERCEL_EMAIL_SENDER as string;
export const SendInviteEmail = async (
  fullName: string,
  email: string,
  url: string,
  subject: string,
): Promise<CreateEmailResponse | null> => {
  try {
    console.log('Sending email to:', email);
    // TODO: change from address to actual platform email - need to purchasedomain. currently not developed
    const sendResponse = await resend.emails.send({
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

    return sendResponse;
  } catch (error) {
    return null;
  }
};
