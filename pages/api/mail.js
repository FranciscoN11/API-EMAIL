

module.exports = (req, res) => {
	const sendMail = require('./sendMail');
	const sendMailRetailer = require('./sendMailRetailer');
	const sendMailYumix = require('./sendMailYumix');


	if (req.method === 'POST') {

		//* ------{Admin-NOC}
		//? variables in the req.body for NEW VISIT ADD (visitAdd): name, visit_id, email, brand, type
		//? variables in the req.body for SEND MAIL TO PROVIDER WHEN VISIT IS ADDED (visitAddCompleted): name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities
		//? variables in the req.body for SEND MAIL TO PROVIDER WHEN A VISIT IS CONFIRMATED (visitConfirmated): name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities
		//? variables in the req.body for SEND MAIL TO PROVIDER WHEN A VISIT IS CANCELED (visitCanceled): name, visit_id, store_name, visit_comments, ciudad, estado, comment, determinante, todo_activities
		//? variables in the req.body for SEND MAIL TO PROVIDER WHEN A VISIT IS CHANGE BUT IS THE SAME CASE (visitChangeSameCase): name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities
		//? variables in the req.body for SEND MAIL TO PROVIDER WHEN A VISIT HAS ACTIVITIES CANCELATED (DeleteActivitieForTimeOut): name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities
		//? variables in the req.body for SEND MAIL TO PROVIDER WHEN A VISIT IS CANCELED FOR OVERTIME (CancelationVisitForOvertimeActivitie): name, visit_id, store_name, ciudad, estado, determinante,
		//? variables in the req.body for SEND MAIL TO PROVIDER WHEN VISIT HAS CHANGES (visitEdit): name, visit_id
		//? variables in the req.body for SEND MAIL TO PROVIDER LOSE (unassign) VISIT FOR OTHER PROVIDER (visitChangeTechPrevious): name, visit_id
		//? variables in the req.body for SEND MAIL TO NEW PROVIDER WIN (new assign) VISIT (visitChangeTechCurrent): name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities
		//? variables in the req.body for SEND MAIL TO PROVIDER WHEN VISIT CHANGE GENERAL (visitChangeGeneral): name, visit_id
		//* ------{Retailers}
		//? variables in the req.body for SEND MAIL TO CONTINUITY AND SERVICE TO RETAILERS (programmin add):  entity_name, email, brand, type, link, cc, folio, cc2
		//* ------ {voxsystem}
		//? variables in the req.body for SEND MAIL TO THE PROVIDER TO INFORM THAT THE UPDATE VISIT WAS MADE BY AUTOMATIC RECONNECTION (attendedVisit):name, visit_id, store_name, ciudad, estado, determinante
		//* ------ {yumix}
		//? variables in the req.body for SEND MAIL TO USER WHEN IS ADDED (yumixAddUser): name, email, brand, type, cc
		//? variables in the req.body for SEND MAIL TO USER WHEN IS UPDATED (yumixUpdate): name, email, brand, type, cc
		//? variables in the req.body for SEND MAIL TO USER WHEN IS CHANGED PASSWORD (yumixChangePass): name, email, brand, type, reset_code, cc
		//? variables in the req.body for SEND MAIL TO USER WHEN IS CHANGED PASSWORD DONE (yumixChangePassDone): name, email, brand, type, cc
		//? variables in the req.body for SEND MAIL TO USER WHEN IS DELETED (yumixDeleteUserData): name, email, brand, type, cc
		//? variables in the req.body for SEND MAIL TO USER WHEN IS DELETED CONFIRM (yumixDeleteUserDataConfirm): name, email, brand, type, cc


		//? Brands : yumix, voxpop, admin, voxsystem, manager, retailers
		//? Types : visitAdd, visitAddCompleted, visitConfirmated, visitCanceled, visitChangeSameCase, DeleteActivitieForTimeOut, CancelationVisitForOvertimeActivitie, visitEdit, visitChangeTechPrevious, visitChangeTechCurrent, visitChangeGeneral, programminAdd, attendedVisit,yumixAddUser,yumixUpdate,yumixChangePass,yumixChangePassDone,yumixDeleteUserData,yumixDeleteUserDataConfirm




		//* IF REQ.BODY.TYPE IS: visitAdd
		if(req.body.type === 'visitAdd') {
			if ( !req.body.name || !req.body.visit_id || !req.body.email || !req.body.brand ){
				res.status(400).json({ response: 'false', message: 'name and visit_id must be included' });
			} else {
				//? Process a POST request
				const { name, email, brand, type, visit_id } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitAdd :: sendMail ::', name, email, brand, type, visit_id);
					sendMail(1, name, email, brand, type, visit_id);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitAdd :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: visitAddCompleted
		if(req.body.type === 'visitAddCompleted') {
			if ( !req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.visit_comments || !req.body.ciudad || !req.body.estado || !req.body.determinante || !req.body.todo_activities || !req.body.email || !req.body.brand  ){
				res.status(400).json({ response: 'false', message: 'name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities must be included' });
			} else {
				//? Process a POST request
				const { name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitAddCompleted :: sendMail :: 2 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(2, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities );
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitAddCompleted :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: visitConfirmated
		if(req.body.type === 'visitConfirmated') {
			if ( !req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.visit_comments || !req.body.ciudad || !req.body.estado || !req.body.determinante || !req.body.todo_activities || !req.body.email || !req.body.brand ){
				res.status(400).json({ response: 'false', message: 'name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities must be included' });
			} else {
				const {name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities, } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitConfirmated :: sendMail :: 3 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(3, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities, );
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitConfirmated :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: visitCanceled
		if(req.body.type === 'visitCanceled') {
			if ( !req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.visit_comments || !req.body.ciudad || !req.body.estado || !req.body.determinante || !req.body.todo_activities || !req.body.email || !req.body.brand ){
				res.status(400).json({ response: 'false', message: 'username, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities must be included' });
			} else {
				const { name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitCanceled :: sendMail :: 4 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(4, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitCanceled :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: visitChangeSameCase
		if (req.body.type === 'visitChangeSameCase') {
			if(!req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.visit_comments || !req.body.ciudad || !req.body.estado || !req.body.determinante || !req.body.todo_activities || !req.body.email || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'username, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities must be included' });
			} else {
				const {  name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities  } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitChangeSameCase :: sendMail :: 5 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(5, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitChangeSameCase :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: DeleteActivitieForTimeOut
		if (req.body.type === 'DeleteActivitieForTimeOut') {
			if(!req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.visit_comments || !req.body.ciudad || !req.body.estado || !req.body.determinante || !req.body.todo_activities || !req.body.email || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'username, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities must be included' });
			} else {
				const {  name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities  } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitChangeSameCase :: sendMail :: 6 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(6, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email DeleteActivitieForTimeOut :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TIPE IS : CancelationVisitForOvertimeActivitie
		if (req.body.type === 'CancelationVisitForOvertimeActivitie') {
			if(!req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.visit_comments || !req.body.ciudad || !req.body.estado || !req.body.determinante || !req.body.todo_activities || !req.body.email || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities must be included' });
			} else {
				const {  name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities  } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitChangeSameCase :: sendMail :: 7 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(7, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email CancelationVisitForOvertimeActivitie :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: visitEdit
		if (req.body.type === 'visitEdit') {
			if(!req.body.name || !req.body.visit_id ){
				res.status(400).json({ response: 'false', message: 'name, visit_id, must be included' });
			} else {
				const {  name, email, brand, type, visit_id } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitEdit :: sendMail :: 8 ::', name, email, brand, type, visit_id);
					sendMail(8, name, email, brand, type, visit_id);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitEdit :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: visitChangeTechPrevious
		if (req.body.type === 'visitChangeTechPrevious') {
			if(!req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.todo_activities ){
				res.status(400).json({ response: 'false', message: 'username, visit_id, store_name, todo_activities  must be included' });
			} else {
				const {  name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities  } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitChangeTechPrevious :: sendMail :: 9 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(9, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitChangeTechPrevious :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: visitChangeTechCurrent
		if (req.body.type === 'visitChangeTechCurrent') {
			if(!req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.visit_comments || !req.body.ciudad || !req.body.estado || !req.body.determinante || !req.body.todo_activities || !req.body.email || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities  must be included' });
			} else {
				const {  name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities  } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitChangeTechCurrent :: sendMail :: 10 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(10, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitChangeTechCurrent :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: visitChangeGeneral
		if (req.body.type === 'visitChangeGeneral') {
			if(!req.body.name || !req.body.visit_id ){
				res.status(400).json({ response: 'false', message: 'username, visit_id must be included' });
			} else {
				const {  name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: visitChangeGeneral :: sendMail :: 11 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(11, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email visitChangeGeneral :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: retailer
		if (req.body.type === 'retailer') {
			if(!req.body.entity_name || !req.body.link || !req.body.email || !req.body.brand || !req.body.cc || !req.body.folio){
				res.status(400).json({ response: 'false', message: 'entity_name, link, brand, cc, folio must be included' });
			} else {
				const { entity_name, email, brand, type, link, cc, folio, cc2 } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: retailer :: sendMail :: 12 ::', entity_name, email, brand, type, link, cc, folio, cc2);
					sendMailRetailer(12, entity_name, email, brand, type, link, cc, folio, cc2);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email retailer :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE IS: attendedVisit
		if (req.body.type === 'attendedVisit') {
			if(!req.body.name || !req.body.visit_id || !req.body.store_name || !req.body.visit_comments || !req.body.ciudad || !req.body.estado || !req.body.determinante || !req.body.todo_activities || !req.body.email || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'name, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities must be included' });
			} else {
				const {  name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities  } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: attendedVisit :: sendMail :: 13 ::', name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					sendMail(13, name, email, brand, type, visit_id, store_name, visit_comments, ciudad, estado, determinante, todo_activities);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email attendedVisit :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE ID: yumixAddUser
		if (req.body.type === 'yumixAddUser') {
			if(!req.body.name || !req.body.email  || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'name, email, brand must be included' });
			} else {
				const {  name, email, brand, type, cc } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: yumixAddUser :: sendMail :: 14 ::', name, email, brand, type, cc);
					sendMailYumix(14, name, email, brand, type, cc);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email yumixAddUser :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE ID: yumixUpdate
		if (req.body.type === 'yumixUpdate') {
			if(!req.body.name || !req.body.email  || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'name, email, brand must be included' });
			} else {
				const {  name, email, brand, type, cc } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: yumixUpdate :: sendMail :: 15 ::', name, email, brand, type, cc);
					sendMailYumix(15, name, email, brand, type, cc);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email yumixUpdate :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE ID: yumixChangePass
		if ( req.body.type === 'yumixChangePass') {
			if(!req.body.name || !req.body.email  || !req.body.brand || !req.body.reset_code){
				res.status(400).json({ response: 'false', message: 'name, email, brand must be included' });
			} else {
				const {  name, email, brand, type, cc, reset_code } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: yumixChangePass :: sendMail :: 16 ::', name, email, brand, type, cc, reset_code);
					sendMailYumix(16, name, email, brand, type, cc, reset_code);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email yumixChangePass :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE ID: yumixChangePassDone
		if (req.body.type === 'yumixChangePassDone') {
			if(!req.body.name || !req.body.email  || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'name, email, brand must be included' });
			} else {
				const {  name, email, brand, type, cc } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: yumixChangePassDone :: sendMail :: 17 ::', name, email, brand, type, cc);
					sendMailYumix(17, name, email, brand, type, cc);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email yumixChangePassDone :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE ID: yumixDeleteUserData
		if (req.body.type === 'yumixDeleteUserData') {
			if(!req.body.name || !req.body.email  || !req.body.brand || !req.body.configuration_code || !req.body.url){
				res.status(400).json({ response: 'false', message: 'name, email, brand, configuration_code and url must be included' });
			} else {
				const {  name, email, brand, type, reset_code, configuration_code, url, cc } = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: yumixDeleteUserData :: sendMail :: 18 ::', name, email, brand, type, reset_code, configuration_code, url, cc);
					sendMailYumix(18, name, email, brand, type, reset_code, configuration_code, url, cc);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email yumixDeleteUserData :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

		//* IF TYPE ID: yumixDeleteUserDataConfirm
		if (req.body.type === 'yumixDeleteUserDataConfirm') {
			if(!req.body.name || !req.body.email  || !req.body.brand){
				res.status(400).json({ response: 'false', message: 'name, email, brand must be included' });
			} else {
				const {  name, email, brand, type} = req.body
				//* check if email is valid
				const re = /\S+@\S+\.\S+/;

				if (!re.test(email)){
					//? Error email is not valid
					res.status(400).json({ response: 'false', message: 'email must be valid' });
				}
				try {
					console.log('try :: yumixDeleteUserDataConfirm :: sendMail :: 19 ::', name, email, brand, type);
					sendMailYumix(19, name, email, brand, type);
					if(res.statusCode === 200){
						res.status(200).json({  response: 'true', message: 'Email yumixDeleteUserDataConfirm :: Sent Successfully'});
					}
				} catch (error) {
					//? Error sending email
					console.log('error :: try :: sendMail ::', error);
					res.status(400).json({ response: 'false', message: 'Error trying to send email' });
				}
			}
		}

	} else {
		//? Handle any other HTTP method
		res.status(200).send({ response: 'false', message: 'This endpoint must be a POST' });
	}

}
