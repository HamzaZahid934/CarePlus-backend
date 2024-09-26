import express from "express";
import { requestPasswordReset, verifyResetToken, resetPassword } from "../Controllers/passwordreset.js";

const router = express.Router();

// Request password reset (generate and send token)
router.post('/request-reset', requestPasswordReset);

// Verify reset token (redirect to reset password page)
router.get('/reset-password/:token', verifyResetToken);

// Reset the password
router.post('/reset-password/:token', resetPassword);

export default router;
