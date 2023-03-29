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

//? HTML HEADER YUMIX
const mailHeaderYumix = `
	<!doctype html>
	<html>
		<head>
		<meta name="viewport" content="width=device-width">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>YUMIX EMAIL</title>
		<style>
		/* -------------------------------------
			RESPONSIVE AND MOBILE FRIENDLY STYLES
		------------------------------------- */
		@media only screen and (max-width: 620px) {
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
				<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Este es un email automático de la plataforma YUMIX.</span>
				<table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
					<tr>
					<td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 10px;">
					<div style="width: 100%; height: 160px; background: url(https://www.yumix.us/assets/BannerEmail.png) no-repeat center; background-position: 50% 50%;">.</div>

`;
//? HTML FOOTER YUMIX
const mailFooterYumix = `

	<!-- END MAIN CONTENT AREA -->
	</td>
	</tr>
	</table>

		<!-- START FOOTER -->
		<div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
		<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
		<tr>
		<td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
			Recibes este correo como parte de las notificaciones de usuario sobre movimientos en tu cuenta YUMIX, para brindarte así la mayor seguridad en el manejo de tu información.
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

module.exports = function (whichNotification, name, email, brand, type, reset_code, configuration_code, url, cc ) {

	console.log('incoming variables yumix :: ', {whichNotification,  name, email, brand, type, reset_code, configuration_code, url, cc});

	const notifications = {
		14: {
			subject: ('¡Bienvenido a YUMIX!'),
			title: ('Bienvenido a YUMIX!' + name),
			addCc: cc,
			notification: `Nombre: ${name}\nCorreo: ${email}\n`
		},
		15: {
			subject: ('Tu cuenta YUMIX cambió'),
			title: ('Tu cuenta YUMIX cambió' + name),
			addCc: cc,
			notification: `Nombre: ${name}\nCorreo: ${email}\n`
		},
		16: {
			subject: ('Solicitud de cambio de contraseña YUMIX'),
			title: ('Solicitud de cambio de contraseña YUMIX' + name),
			addCc: cc,
			notification: `Nombre: ${name}\nCorreo: ${email}\n`
		},
		17: {
			subject: ('Tu contraseña YUMIX cambió'),
			title: ('Tu contraseña YUMIX cambió' + name),
			addCc: cc,
			notification: `Nombre: ${name}\nCorreo: ${email}\n`
		},
		18: {
			subject: ('YUMIX - Solicitud de eliminación de datos'),
			title: ('YUMIX - Solititud de eliminación de datos' + name),
			addCc: cc,
			notification: `Nombre: ${name}\nCorreo: ${email}\n`
		},
		19: {
			subject: ('YUMIX - Confirmación de eliminación de datos'),
			title: ('YUMIX - Confirmación de eliminación de datos' + name),
			addCc: cc,
			notification: `Nombre: ${name}\nCorreo: ${email}\n`
		}
	}

	

	if (whichNotification === 14) {
		mailBody = `
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
			<tr>
				<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px; ">
				<p style="font-family: sans-serif; font-size: 18px; font-weight: bold; margin: 0; Margin-bottom: 15px;">¡Bienvenido ${name}!<br>¡Ya puedes ser el DJ en las locaciones de YUMIX!</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Has sido registrado en la app con tu correo <a href="#" style="color: #B63840; font-size: 14px; text-align: center; text-decoration: none;">${email}</a>.</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Si tienes dudas sobre YUMIX, sus locaciones, condiciones o términos, visita nuestro website <a href="www.yumixmusic.com" style="color: #B63840; font-size: 14px; text-align: center; text-decoration: none;">yumixmusic.com</a></p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">¡Hasta pronto!</p>
				</td>
			</tr>
		`;
	}

	if (whichNotification === 15) {
		mailBody = `
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
			<tr>
				<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px; ">
				<p style="font-family: sans-serif; font-size: 18px; font-weight: bold; margin: 0; Margin-bottom: 15px;">¡Hola ${name}!</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Solo queremos notificarte que los cambios que realizaste en tus datos mediante la aplicacion YUMIX han quedado aplicados.</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Si tienes alguna duda al respecto o sobre nuestras locaciones, condiciones, descargas y más información, visita nuestro website <a href="www.yumixmusic.com" style="color: #B63840; font-size: 14px; text-align: center; text-decoration: none;">yumixmusic.com</a></p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">¡Hasta pronto!</p>
				</td>
			</tr>
			</table>
		`;
	}

	if (whichNotification === 16) {
		mailBody = `
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
			<tr>
				<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px; ">
				<p style="font-family: sans-serif; font-size: 18px; font-weight: bold; margin: 0; Margin-bottom: 15px;">¡Hola ${name}!</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Has solicituado un <strong>cambio de contraseña</strong> para el acceso a tu aplicación YUMIX. Has click en el siguiente botón para realizar el cambio:</p>
				<table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;  margin-left: 31%; margin-right: 31%;">
					<tbody>
					<tr>
						<td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
						<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
							<tbody>
							<tr>
								<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center; "> <a href="https://yumixapi.voxpopaudio.com/v4/users/reset_password/${reset_code}" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Cambiar contraseña</a> </td>
							</tr>
							</tbody>
						</table>
						</td>
					</tr>
					</tbody>
				</table>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Si tienes alguna duda al respecto o sobre nuestras locaciones, condiciones, descargas y más información, visita nuestro website <a href="https://www.yumixmusic.com" style="color: #B63840; font-size: 14px; text-align: center; text-decoration: none;">yumixmusic.com</a></p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">¡Hasta pronto!</p>
				</td>
			</tr>
			</table>
		`;
	}

	if (whichNotification === 17) {
		mailBody = `
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
			<tr>
				<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px; ">
				<p style="font-family: sans-serif; font-size: 18px; font-weight: bold; margin: 0; Margin-bottom: 15px;">¡Hola ${name}</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Solo queremos notificarte que tu contraseña ya ha sido modificada.</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Si tienes alguna duda al respecto o sobre nuestras locaciones, condiciones, descargas y más información, visita nuestro website <a href="https://www.yumixmusic.com" style="color: #B63840; font-size: 14px; text-align: center; text-decoration: none;">yumixmusic.com</a></p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">¡Hasta pronto!</p>
				</td>
			</tr>
			</table>
		`;
	}

	if (whichNotification === 18) {
		mailBody = `
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
			<tr>
				<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px; ">
				<p style="font-family: sans-serif; font-size: 18px; font-weight: bold; margin: 0; Margin-bottom: 15px;">¡Hola ${name}!</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Este correo fue enviado para confirmar la eliminación de tus datos vinculados con Facebook en Yumix MX.</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Da click en el enlace para ir al portal de confirmación. Es necesario que completes el proceso con el siguiente código.</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; margin-left: 40%; margin-right: 40%;">${configuration_code}</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"><a href="${url}" style="color: #B63840; font-size: 14px; text-align: center; text-decoration: none;"><button type="button" style="color: white; background-color: #b63840; height: 35px; width: 150px; margin-left: 34%; margin-right: 34%;">Eliminar</button></a></p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Una vez completado el proceso se te enviará un email para notificar esta acción.</p>
				</td>
			</tr>
			</table>
		`;
	}

	if (whichNotification === 19) {
		mailBody = `
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
			<tr>
				<td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-top: 25px; ">
				<p style="font-family: sans-serif; font-size: 18px; font-weight: bold; margin: 0; Margin-bottom: 15px;">¡Hola ${name}!</p>
				<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Este correo fue enviado para confirmar que la eliminación de tus datos vinculados con Facebook en Yumix MX. ha sido completada</p>
				</td>
			</tr>
			</table>
		`;
	}

	//? Template email
  if (brand == 'yumix'){
    templateHtml = mailHeaderYumix + mailBody + mailFooterYumix;
  }

	try {
		//? Notify or send email

		transporter.verify(function (error, success) {
			if (error) {
				console.log('error :: try :: transporter :: yumix :: verify ::', error);
			} else {
				console.log("Server is ready to take our messages");
				//console.log(notifications[whichNotification].subject,'-------' ,notifications[whichNotification].notification,'-------',templateHtml);
				transporter.sendMail({
					from: '"info@yumixmusic.com" fnavarrete@voxpop.com.mx',
					to: email,
					subject: notifications[whichNotification].subject,
					cc: cc,
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