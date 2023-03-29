// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

module.exports = (req, res) => {
  let who = 'anonymous';
 
  if (req.body && req.body.who) {
    who = req.body.who;
  } else if (req.query.who) {
    who = req.query.who;
  } else if (req.cookies.who) {
    who = req.cookies.who;
  }
 
  res.status(200).send(`Hello ${who}!`);
};
