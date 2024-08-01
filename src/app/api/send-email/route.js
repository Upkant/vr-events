import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, address, services, message } =
    await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New VR Events & Entertainment Form User Enquiry ",
    text: `Enquiry Details Name : ${name} `,
    html: `<!DOCTYPE HTML
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">

  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title></title>

      <style type="text/css">
          @media only screen and (min-width: 620px) {
              .u-row {
                  width: 600px !important;
              }

              .u-row .u-col {
                  vertical-align: top;
              }

              .u-row .u-col-100 {
                  width: 600px !important;
              }

          }

          @media (max-width: 620px) {
              .u-row-container {
                  max-width: 100% !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
              }

              .u-row .u-col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
              }

              .u-row {
                  width: 100% !important;
              }

              .u-col {
                  width: 100% !important;
              }

              .u-col>div {
                  margin: 0 auto;
              }
          }

          body {
              margin: 0;
              padding: 0;
          }

          table,
          tr,
          td {
              vertical-align: top;
              border-collapse: collapse;
          }

          p {
              margin: 0;
          }

          .ie-container table,
          .mso-container table {
              table-layout: fixed;
          }

          * {
              line-height: inherit;
          }

          a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
          }

          table,
          td {
              color: #000000;
          }

          #u_body a {
              color: #0000ee;
              text-decoration: underline;
          }

          @media (max-width: 480px) {
              #u_content_image_1 .v-src-width {
                  width: auto !important;
              }

              #u_content_image_1 .v-src-max-width {
                  max-width: 48% !important;
              }

              #u_content_image_2 .v-src-width {
                  width: auto !important;
              }

              #u_content_image_2 .v-src-max-width {
                  max-width: 36% !important;
              }
          }
      </style>

      <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet"
          type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css">

  </head>

  <body class="clean-body u_body"
      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <table id="u_body"
          style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
          cellpadding="0" cellspacing="0">
          <tbody>
              <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e6a50157;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f7f6f4;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 0px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;"><span
                                                                          style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;"><strong><span
                                                                                  style="font-size: 18px; line-height: 25.2px; color: #236fa1;">ENQUIRY
                                                                                  DETAILS</span></strong></span></p>
                                                              </div>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <table height="0px" align="left" border="0" cellpadding="0"
                                                                  cellspacing="0" width="22%"
                                                                  style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #e67e23;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top">
                                                                          <td
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                              <span>&#160;</span>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong>Name : </strong> <span
                                                                          style="color: #828080; font-size: 14px; line-height: 19.6px;">${name}.</span>
                                                                  </p>
                                                              </div>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong>Contact No : </strong> <span
                                                                          style="color: #828080; font-size: 14px; line-height: 19.6px;">${phone}</span>
                                                                  </p>
                                                              </div>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong>Email ID : </strong> <span
                                                                          style="color: #828080; font-size: 14px; line-height: 19.6px;">${email}</span>
                                                                  </p>
                                                              </div>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong>Service : </strong> <span
                                                                          style="color: #828080; font-size: 14px; line-height: 19.6px;">${services}</span>
                                                                  </p>
                                                              </div>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong>Service : </strong> <span
                                                                          style="color: #828080; font-size: 14px; line-height: 19.6px;">${address}</span>
                                                                  </p>
                                                              </div>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 25px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">
                                                                      <strong>Message :  </strong><span
                                                                          style="color: #828080; font-size: 14px; line-height: 19.6px;">${message}</span>
                                                                  </p>
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

                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <table height="0px" align="center" border="0"
                                                                  cellpadding="0" cellspacing="0" width="100%"
                                                                  style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #939391;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top">
                                                                          <td
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                              <span>&#160;</span>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:14px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div align="center">
                                                                  <div style="display: table; max-width:187px;">
                                                                      <table align="center" border="0" cellspacing="0"
                                                                          cellpadding="0" width="32" height="32"
                                                                          style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
                                                                          <tbody>
                                                                              <tr style="vertical-align: top">
                                                                                  <td align="center" valign="middle"
                                                                                      style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                      <a href="#"
                                                                                          title="Facebook"
                                                                                          target="_blank">
                                                                                          <img src="https://www.google.com/imgres?q=facebook%20icon%20png&imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F670%2F159%2Fpng-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet.png&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dfacebook&docid=UNAmPkA3B0QwnM&tbnid=Oj09HRDaXEdKvM&vet=12ahUKEwiys-CyqdOHAxWBslYBHcx_Bj8QM3oECF8QAA..i&w=900&h=900&hcb=2&ved=2ahUKEwiys-CyqdOHAxWBslYBHcx_Bj8QM3oECF8QAA"
                                                                                              alt="Facebook"
                                                                                              title="Facebook" width="32"
                                                                                              style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                      </a>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <table align="center" border="0" cellspacing="0"
                                                                          cellpadding="0" width="32" height="32"
                                                                          style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
                                                                          <tbody>
                                                                              <tr style="vertical-align: top">
                                                                                  <td align="center" valign="middle"
                                                                                      style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                      <a href="#"
                                                                                          title="LinkedIn"
                                                                                          target="_blank">
                                                                                          <img src="https://www.google.com/imgres?q=Linkedin%20icon%20PNG&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F174%2F174857.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Flinkedin_174857&docid=vLBuaTBzrfpOUM&tbnid=JdyXos__tp7KHM&vet=12ahUKEwio1fOPqdOHAxXd4zQHHQLzLiYQM3oECBkQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwio1fOPqdOHAxXd4zQHHQLzLiYQM3oECBkQAA"
                                                                                              alt="LinkedIn"
                                                                                              title="LinkedIn" width="32"
                                                                                              style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                      </a>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </div>
                                                              </div>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; color: #828080; line-height: 160%; text-align: center; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 160%;">Rao Ishwar Complex, Sector 86 Gurugram, Haryana 122004</p>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <table height="0px" align="center" border="0"
                                                                  cellpadding="0" cellspacing="0" width="64%"
                                                                  style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top">
                                                                          <td
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                              <span>&#160;</span>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>

                                              <table style="font-family:'Open Sans',sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 20px;font-family:'Open Sans',sans-serif;"
                                                              align="left">

                                                              <div
                                                                  style="font-size: 14px; color: #828080; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">Copyright
                                                                      © 2024 VR Events & Entertainment Ltd All Rights
                                                                      Reserved.</p>
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

  </html>`,
  };

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank You",
    text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\n VR Events & Entertainment `,
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
        <p>Best regards,<br>VR Events & Entertainment </p>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions); //to send admin
    await transporter.sendMail(userMailOptions); // to send user
    return NextResponse.json({
      message:
        "Thank you for reaching out to us. We have received your message and will get back to you shortly.",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
