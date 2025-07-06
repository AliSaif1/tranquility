import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { firstName, lastName, email, phone, subject, message } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !subject || !message) {
            return res.status(400).json({
                message: 'All required fields must be filled out'
            });
        }

        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({
                message: 'Please enter a valid email address'
            });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            },
        });

        // Send email to your team (internal notification)
        await transporter.sendMail({
            from: `"Website Contact Form" <${process.env.EMAIL_SERVER_USER}>`,
            to: process.env.EMAIL_SERVER_USER,
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #f8f9fa; padding: 20px; border-bottom: 4px solid #56938e;">
                        <h2 style="color: #2c3e50; margin: 0;">New Contact Form Submission</h2>
                    </div>
                    <div style="padding: 20px; background-color: #ffffff;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${subject}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
                                <td style="padding: 8px 0;">${message.replace(/\n/g, '<br>')}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            `,
        });

        // Send confirmation email to the client
        await transporter.sendMail({
            from: `"Tranquility Compassion" <${process.env.EMAIL_SERVER_USER}>`,
            to: email,
            subject: 'Thank you for contacting Tranquility Compassion',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <div style="background-color: #56938e; padding: 25px; text-align: center;">
                        <h1 style="color: white; margin: 0;">Thank You for Contacting Us</h1>
                    </div>
                    
                    <div style="padding: 25px; background-color: #ffffff; line-height: 1.6;">
                        <p>Dear ${firstName},</p>
                        
                        <p>Thank you for reaching out to Tranquility Compassion. We've received your message and our Compassion team will review it shortly. You can expect a response within 24 hours.</p>
                        
                        <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #56938e; margin: 20px 0;">
                            <h3 style="margin-top: 0; color: #2c3e50;">Your Message Details:</h3>
                            <p><strong>Subject:</strong> ${subject}</p>
                            <p><strong>Message:</strong></p>
                            <p>${message.replace(/\n/g, '<br>')}</p>
                        </div>
                        
                        <p>If you have any urgent questions or need immediate assistance, please don't hesitate to call our support line at <strong>647-261-2119</strong>.</p>
                        
                        <p>We look forward to serving you and helping you find the peace and Compassion you deserve.</p>
                    </div>
                    
                    <div style="padding: 20px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #ddd;">
                        <img src="https://www.tranquilitycompassion.ca/logo.png" alt="Tranquility Compassion Logo" style="max-width: 150px; height: auto; margin-bottom: 15px;">
                        
                        <div style="margin-bottom: 15px;">
                            <p style="margin: 5px 0;"><strong>Tranquility Compassion</strong></p>
                            <p style="margin: 5px 0;">915-135 James St. South</p>
                            <p style="margin: 5px 0;">Hamilton, Ontario L8P-2Z6</p>
                            <p style="margin: 5px 0;">Phone: 647-261-2119</p>
                            <p style="margin: 5px 0;">Email: contact@tranquilitycompassion.ca</p>
                        </div>
                        
                        <div style="margin-top: 15px;">
                            <a href="https://www.tranquilitycompassion.ca" style="color: #56938e; text-decoration: none; margin: 0 10px;">Website</a>
                            <a href="#" style="color: #56938e; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
                            <a href="#" style="color: #56938e; text-decoration: none; margin: 0 10px;">Care Services</a>
                        </div>
                    </div>
                </div>
            `,
        });

        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({
            message: 'An error occurred while sending your message. Please try again later.'
        });
    }
}