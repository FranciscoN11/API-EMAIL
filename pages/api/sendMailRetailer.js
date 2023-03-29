const nodemailer = require('nodemailer');
const { google } = require('googleapis');
import moment from 'moment';

const CLIENT_ID = '414900537239-nj9tss7hvv5t5h0vij1bhgsk004k3gmo.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04eQaZaR1XkhhCgYIARAAGAQSNwF-L9Ir041oXA4Y3g6z6dnrbMnDs0fFW7W1dgv3RarmrYVyJNDDe-gtWCURGCIZQw7x0aoBZdQ'

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const accessToken = oAuth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'fnavarrete@voxpop.com.mx',
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken
  }
});

//? HTML HEADER VOXPOP - NOC - ADMIN
const mailHeaderVoxpop = `
      <!doctype html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>VOXPOP EMAIL</title>
        <style>
        /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 420px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
          font-size: 16px !important;
        }
        table[class=body] .wrapper,
            table[class=body] .article {
          padding: 10px !important;
        }
        table[class=body] .content {
          padding: 0 !important;
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class=body] .btn table {
          width: 100% !important;
        }
        table[class=body] .btn a {
          width: 100% !important;
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
        }
      
        /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
        .btn-primary table td:hover {
          background-color: #34495e !important;
        }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
        .btn-primary  {
          background-color: #0056b4 !important;
          color:white !important;
        }
        }
        </style>
      </head>
      <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
        <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Este es un email automático de la plataforma de VOXPOP.</span>
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
            <tr>
              <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 10px;">
              <div>
                <img src="https://qsys.voxpopaudio.com/brand/logos/banner-email-801x251.jpeg" style="height:auto; width:100%;" class="center-block">
              </div

`;
//? HTML FOOTER VOXPOP - NOC - ADMIN
const mailFooterVoxpop = `
    
      <!-- END MAIN CONTENT AREA -->
        </td>
          </tr>
          </table>

          <!-- START FOOTER -->
          <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
          <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tr>
            <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
            Recibes este correo como parte de las notificaciones de los sistemas de la empresa VOXPOP S.A. de C.V. a quien tu prestas servicios o tienes relación operativa o comercial. Si ya no deseas recibir estos correos, te pedimos nos escribas a <a href="mailto:info@voxpop.com.mx" style="color: #386fb6; text-decoration: none;">info@voxpop.com.mx</a>.
            </td>
            </tr>
            <tr>
            <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
              Powered by <a href="https://www.voxpop.com.mx" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">VOXPOP</a>.
            </td>
            </tr>
          </table>
          </div>
          <!-- END FOOTER -->

        <!-- END CENTERED WHITE CONTAINER -->
        </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
      </table>
    </body>
    </html>
    
`;

var date = moment().format("DD-MM-YYYY");
var time = moment().format("HH:mm:ss");
var mailBody = '';
var templateHtml = '';
var lastCC = '';

module.exports = function (whichNotification,  entity_name, email, brand, type, link, cc, folio, cc2 ) {

	console.log('incoming variables retailer :: ', whichNotification,  entity_name, email, brand, type, link, cc, folio, cc2);

	

	if (cc2 !== undefined || cc2 !== '') {
		lastCC = cc + ',' + cc2;
	} else {
		lastCC = cc;
	}

	const notifications = {
		12: {
			subject: ('Programacion de cadena' + folio),
			title: ('Programacion de cadena' + folio),
			addCc: lastCC,
			notification: `Nombre: ${entity_name}\nCorreo: ${email}\n`
		},
	}

	if (whichNotification === 12) {
		mailBody = `
			<p>Solicitud de Programacion para ${entity_name} --  ${link}</p>
			<br>
			<p>Gracias, <br>
			Equipo de Voxpop<br>
			</p>
		`;
	}


	//? Template email
  if (brand == 'voxpop'){
    templateHtml = mailHeaderVoxpop + mailBody + mailFooterVoxpop;
  }


  //templateHtml =  mailHeaderVoxpop + mailBody + mailFooterVoxpop;

	try {
      //? Notify or send email

      transporter.verify(function (error, success) {
        if (error) {
          console.log('error :: try :: transporter :: retailer :: verify ::', error);
        } else {
          console.log("Server is ready to take our messages");
          //console.log(notifications[whichNotification].subject,'-------' ,notifications[whichNotification].notification,'-------',templateHtml);
          transporter.sendMail({
            from: '"sistemas@voxpop.com.mx" fnavarrete@voxpop.com.mx',
            to: email,
            subject: notifications[whichNotification].subject,
						cc: notifications[whichNotification].addCc,
            text: notifications[whichNotification].notification,
            html: templateHtml,
            attachments: [
              {
                filename: 'logo.png',
                path: './public/images/logo.png',
                cid: 'logo'
              }
            ]
          }).then(info => {
            console.log('done :: transporter :: retailer :: success::', success);
            //res.status(200).json({  response: 'true', message: 'Email Sent Successfully transporter'});
            return success;
          }).catch(error => {
            console.log('error :: transporter :: retailer :: mail ::', error);
            return false;
          });
        }
      });

  } catch (err) {
    console.log('err :: try :: transporter :: retailer ::', err);
		return false;
  }

}

