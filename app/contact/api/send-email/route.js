// app/contact/api/send-email/route.js

const brevo = require('@getbrevo/brevo');

export async function POST(req) {
  const { name, email, phone, address, title, content } = await req.json();

  // Cấu hình Brevo API
  if (!process.env.BREVO_API_KEY) {
    return new Response(JSON.stringify({ message: 'Missing BREVO_API_KEY' }), { status: 500 });
  }

  const apiInstance = new brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

  const sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.subject = `Contact Form Submission: ${title}`;
  sendSmtpEmail.htmlContent = `
    <h2>Thông tin liên hệ mới</h2>
    <p><strong>Tên:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Điện thoại:</strong> ${phone}</p>
    <p><strong>Địa chỉ:</strong> ${address}</p>
    <p><strong>Tiêu đề:</strong> ${title}</p>
    <p><strong>Nội dung:</strong> ${content}</p>
  `;
  sendSmtpEmail.sender = { name: "Hạnh Phúc Website", email: 'chrislethedimsum@gmail.com' }; // Email của bạn
  sendSmtpEmail.to = [{ email: 'info@hpfood.info' }]; // Email nhận thông tin

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return new Response(JSON.stringify({ message: 'Email sent successfully!', data }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorDetails = error.response ? error.response.body : error.message;
    return new Response(JSON.stringify({ message: 'Failed to send email', error: errorDetails }), { status: 500 });
  }
}
