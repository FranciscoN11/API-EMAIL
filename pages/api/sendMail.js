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



module.exports = function (whichNotification, name, email, brand, type, visit_id, store_name, visit_comments, estado, ciudad, determinante,todo_activities ) {
  

  console.log('incoming variables sendMail :: ','whichNotification', whichNotification, 'name', name, 'email', email, 'brand', brand, 'type', type, 'visit_id', visit_id, 'store_name', store_name, 'visit_comments', visit_comments, 'estado', estado, 'ciudad', ciudad, 'determinante', determinante, 'todo_activities', todo_activities);
  
	const notifications = {
		1: {
			subject: ('NUEVA VISITA AGREGADA'),
			title: ('VOXPOP'),
			notification: `Nombre: ${name}\nCorreo: ${email}\n`
		},
    2: {
      subject: ('VISITA: ' + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities),
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    3: {
      subject: ('CONFIRMACION DE VISITA: ' + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities),
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    4: {
      subject: ('CANCELACION DE VISITA: ' + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities),
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    5: {
      subject: ('NUEVA ACTIVIDAD EN LA VISITA: ' + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities),
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    6: {
      subject: ('EL SPOT CUMPLIO SU FECHA LIMITE PARA SER INSTALADO Y SE ELIMINO LA ACTIVIDAD : ' + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities),
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    7: {
      subject: ('LA VISITA FUE CANCELADA POR EL SISTEMA: ' + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities),
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    8: {
      subject: ('CAMBIOS EN LA VISITA: ' + visit_id + ' - ' + date ) ,
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    9: {
      subject: ('DESASIGNACION DE VISITA: '  + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities) ,
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    10: {
      subject: ('ASIGNACION DE VISITA: '  + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities) ,
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    11: {
      subject: ('HA HABIDO CAMBIOS EN LA VISITA: '  + visit_id ) ,
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },
    13: {
      subject: ('AVISO DE VISITA AUTOATENDIDA: '  + visit_id + ' - ' + date + ' - ' + store_name + ' - ' + todo_activities ) ,
      title: ('VOXPOP'),
      notification: `Nombre: ${name}\nCorreo: ${email}\n`
    },

  }


  if (whichNotification == 1){
    //? HTML BODY
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>Nueva Visita agregada</p>
      <p>Este correo es solo para informarte, que hay una nueva visita agregada hoy dia ${date} a las ${time}</p>
      <br>
      <p>Puedes acceder a la información de esta visita accediendo al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 2){
    //? HTML BODY
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>Numero de Visita: ${visit_id}</p>
      <p>Status de Visita: ABIERTA</p>
      <p>Locacion: (${determinante}) - ${store_name}</p>
      <p>Estado: ${estado} Ciudad: ${ciudad}</p>
      <p>Actividades: ${todo_activities}</p>
      <p>Detalle de la Visita: ${visit_comments}</p>
      <br>
      <p>Puedes acceder a la información de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Responder a: noc@voxpop.com.mx, coordinacion.noc@voxpop.com.mx</p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 3){
    //? HTML BODY
    mailBody = `
      <h3>Hola  ${name}</h3>

      <p>Numero de Visita: ${visit_id}</p>
      <p>Status de Visita CONFIRMADA</p>
      <p>Locacion: (${determinante}) -  ${store_name}</p>
      <p>Estado: ${estado} Ciudad: ${ciudad}</p>
      <p>Actividades: ${todo_activities}</p>
      <p>Detalle de la Visita: ${visit_comments}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Responder a: noc@voxpop.com.mx, coordinacion.noc@voxpop.com.mx</p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 4) {
    //? HTML BODY
    mailBody = `
      <h3>Hola  ${name}</h3>

      <p>Numero de Visita: ${visit_id}</p>
      <p>Status de Visita CANCELADA</p>
      <p>Locacion: (${determinante}) -  ${store_name}</p>
      <p>Estado: ${estado} Ciudad: ${ciudad}</p>
      <p>Actividades: ${todo_activities}</p>
      <p>Detalle de la Visita: ${visit_comments}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Responder a: noc@voxpop.com.mx, coordinacion.noc@voxpop.com.mx</p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 5) {
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>Nueva Actividad agregada en la Visita</p>
      <p>Te informamos que se agrego una nueva actividad</p>
      <br>

      <p>Numero de Visita: ${visit_id}</p>
      <p>Status de Visita: ABIERTA</p>
      <p>Locacion: (${determinante}} -  ${store_name}</p>
      <p>Estado: ${estado} Ciudad: ${ciudad}</p>
      <p>Actividades: ${todo_activities}</p>
      <p>Detalle de la Visita: ${visit_comments}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Responder a: noc@voxpop.com.mx, coordinacion.noc@voxpop.com.mx</p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 6) {
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>Se elimino la actividad de actualizacion en la Visita</p>
      <p>El Spot cumplio su fecha limite para ser instalado y se elimino la actividad</p>
      <p>La visita continua activa</p>
      <br>

      <p>Numero de Visita: ${visit_id}</p>
      <p>Status de Visita: ABIERTA</p>
      <p>Locacion: (${determinante}) -  ${store_name}</p>
      <p>Estado: ${estado} Ciudad: ${ciudad}</p>
      <p>Actividades: ${todo_activities}</p>
      <p>Detalle de la Visita: ${visit_comments}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Responder a: noc@voxpop.com.mx, coordinacion.noc@voxpop.com.mx</p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 7) {
    mailBody = `
      <h3>Hola ${nombre}</h3>
      <p>La visita fue cancelada por el sistema</p>
      <p>El Spot supero la fecha limite para instalarse</p>
      <p>Ya no es necesario que realizes la atencion de ir a la Tienda</p>
      <br>

      <p>Numero de Visita: ${visit_id}</p>
      <p>Status de Visita: CANCELADA</p>
      <p>Locacion: (${determinante}) -  ${store_name}</p>
      <p>Estado: ${estado} Ciudad: ${ciudad}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Responder a: noc@voxpop.com.mx, coordinacion.noc@voxpop.com.mx</p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 8) {
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>Cambios en la Visita</p>
      <p>Este correo es solo para informarte, que se hicieron algunos cambios en la visita ${visit_id} hoy dia ${date} a las ${time}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita accediendo al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 9) {
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>Desasignación de visita</p>
      <p>Te informamos que se te desasignó la Visita: ${visit_id}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 10) {
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>Asignación de Visita</p>
      <p>Te informamos que se te asigno una nueva Visita</p>
      <br>
      <p>Numero de Visita: ${visit_id}</p>
      <p>Status de Visita: ABIERTA</p>
      <p>Locacion: (${determinante}) - ${store_name}</p>
      <p>Estado: ${estado} Ciudad: ${ciudad}</p>
      <p>Actividades: ${todo_activities}</p>
      <p>Detalle de la Visita: ${visit_comments}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Responder a: noc@voxpop.com.mx, coordinacion.noc@voxpop.com.mx</p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  if (whichNotification == 11) {
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>Asignación de visita</p>
      <p>Te informamos que ha habido cambios en la visita ${visit_id} que tienes asignada</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita accediendo al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }

  //? wichNotification 12 is used by retailer sendMailRetailer.js

  if (whichNotification == 13) {
    mailBody = `
      <h3>Hola ${name}</h3>
      <p>La visita de actualizacion recupero la conexion de manera automatica</p>
      <p>Ya no se requiere que realices la visita, esta ya cambio de status a atendida</p>
      <p></p>
      <br>

      <p>Numero de Visita: ${visit_id}</p>
      <p>Status de Visita: ATENDIDA POR RECONEXION</p>
      <p>Locacion: (${determinante}) -  ${store_name}</p>
      <p>Estado: ${estado} Ciudad: ${ciudad}</p>
      <br>
      <p>Puedes acceder a la informacón de esta visita ingresando al portal</p>
      <p style="text-align: center;"><a href="https://tester-admin.voxpopaudio.com/site/provider/history" target="_blank"><button type="button" style="background-color: #0056b4; color: white;border-color: #0056b4;border-radius: 10px;padding: 5px 10px 5px 10px;font-weight: 800;">Entrar al portal</button></a></p>
      <br>
      <p>Responder a: noc@voxpop.com.mx, coordinacion.noc@voxpop.com.mx</p>
      <br>
      <p>Telefonos de contacto:</p>
      <a href="tel:8007272121">800 7272121</a>
      <a href="tel:5518801477">55 18801477</a>

      <p>Gracias, <br>
      Equipo de Voxpop<br>
      </p>
    `;
  }


  //? Template email
  if (brand == 'voxpop'){
    templateHtml = mailHeaderVoxpop + mailBody + mailFooterVoxpop;
  }


	try {
      //? Notify or send email

      transporter.verify(function (error, success) {
        if (error) {
          console.log('error :: try :: transporter :: verify ::', error);
        } else {
          console.log("Server is ready to take our messages");
          //console.log(notifications[whichNotification].subject,'-------' ,notifications[whichNotification].notification,'-------',templateHtml);
          transporter.sendMail({
            from: '"info@voxpop.com.mx" fnavarrete@voxpop.com.mx',
            to: email,
            subject: notifications[whichNotification].subject,
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
            console.log('done :: transporter :: success::', success);
            //res.status(200).json({  response: 'true', message: 'Email Sent Successfully transporter'});
            return success;
          }).catch(error => {
            console.log('error :: transporter :: mail ::', error);
            return false;
          });
        }
      });

  } catch (err) {
    console.log('err :: try :: transporter ::', err);
		return false;
  }
}

