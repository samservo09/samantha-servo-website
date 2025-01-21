//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextReponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Samantha Servo <onboarding@resend.dev>',
      to: ['samanthaservo2@gmail.com'],
      subject: 'Hello world',
      react: (<><p>Email Body</p></>),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
