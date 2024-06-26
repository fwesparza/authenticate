const router = require('express').Router();

const sessionRouter = require('./session');
const usersRouter = require('./users');

router.use('/users', usersRouter);
router.use('/session', sessionRouter);

// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });

// // Test the setTokenCookie middleware
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         }
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// // Test restoreUser middleware
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// // Test requreAuth middleware
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

module.exports = router;
