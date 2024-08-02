// app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  // Debugging: Log the request method and headers
  console.log("Request method:", request.method);
  console.log("Request headers:", JSON.stringify(request.headers));

  // Read the request body
  let requestBody;
  try {
    requestBody = await request.json();
    console.log("Request body successfully read:", requestBody);
  } catch (error) {
    console.error("Error reading request body:", error);
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }

  const { name, email, phone, address, services, message } = requestBody;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // your Gmail password or App password
    },
  });

  // Email content for admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: "New VR Events & Entertainment Form User Enquiry",
    text: `Enquiry Details Name: ${name}`,
    html: `<!DOCTYPE html>
      <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>New User Enquiry</title>
        <style type="text/css">
          body { margin: 0; padding: 0; }
          table, tr, td { vertical-align: top; border-collapse: collapse; }
          p { margin: 0; }
          a { color: #0000ee; text-decoration: underline; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #e7e7e7; color: #000000;">
        <table style="width: 100%; background-color: #e7e7e7;" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td style="word-break: break-word;">
                <div style="padding: 0px; background-color: transparent;">
                  <div style="margin: 0 auto; max-width: 600px; overflow-wrap: break-word; background-color: #e6a50157;">
                    <div style="border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
                      <div style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
                        <div style="height: 100%; width: 100% !important;">
                          <div style="height: 100%; padding: 0px; border-top: 0px solid transparent;">
                            <table style="font-family: 'Open Sans', sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="padding: 25px 10px 0px 20px;">
                                    <div style="font-size: 14px; line-height: 140%; text-align: left;">
                                      <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 18px; color: #236fa1;">ENQUIRY DETAILS</span></strong></p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table style="font-family: 'Open Sans', sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="padding: 5px 10px 10px 20px;">
                                    <table height="0px" align="left" border="0" cellpadding="0" cellspacing="0" width="22%" style="border-top: 3px solid #e67e23;">
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td style="font-size: 0px; line-height: 0px;"><span>&#160;</span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table style="font-family: 'Open Sans', sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="padding: 10px 10px 10px 20px;">
                                    <div style="font-size: 14px; color: #333333; line-height: 140%; text-align: left;">
                                      <p style="font-size: 14px; line-height: 140%;"><strong>Name: </strong><span style="color: #828080;">${name}</span></p>
                                      <p style="font-size: 14px; line-height: 140%;"><strong>Contact No: </strong><span style="color: #828080;">${phone}</span></p>
                                      <p style="font-size: 14px; line-height: 140%;"><strong>Email ID: </strong><span style="color: #828080;">${email}</span></p>
                                      <p style="font-size: 14px; line-height: 140%;"><strong>Service: </strong><span style="color: #828080;">${services}</span></p>
                                      <p style="font-size: 14px; line-height: 140%;"><strong>Address: </strong><span style="color: #828080;">${address}</span></p>
                                      <p style="font-size: 14px; line-height: 140%;"><strong>Message: </strong><span style="color: #828080;">${message}</span></p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table style="font-family: 'Open Sans', sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="padding: 10px 10px 10px 20px;">
                                    <div style="font-size: 14px; color: #828080; line-height: 140%; text-align: center;">
                                      <p style="font-size: 14px; line-height: 140%;">Rao Ishwar Complex, Sector 86 Gurugram, Haryana 122004</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table style="font-family: 'Open Sans', sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="padding: 10px 10px 20px;">
                                    <div style="font-size: 14px; color: #828080; line-height: 140%; text-align: center;">
                                      <p style="font-size: 14px; line-height: 140%;">Copyright © 2024 VR Events & Entertainment Ltd All Rights Reserved.</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      </html>
    `,
  };

  // Email content for user
  const userMailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: email, // user's email address
    subject: "Thank You",
    text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nVR Events & Entertainment`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Thank You for Contacting Us</title>
      </head>
      <body>
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
        <p>Best regards,<br>VR Events & Entertainment</p>
      </body>
      </html>
    `,
  };

  try {
    // Send email to admin
    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent:", adminResult);

    // Send thank you email to user
    const userResult = await transporter.sendMail(userMailOptions);
    console.log("User email sent:", userResult);

    return NextResponse.json({
      message:
        "Thank you for reaching out to us. We have received your message and will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
