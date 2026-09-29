/**
 * ConsentNote — the WhatsApp opt-in line under every enquiry form.
 *
 * Meta expects a business to have someone's agreement before messaging them
 * on WhatsApp, and to say it will. This line, beside the button they press,
 * is that agreement; the CRM honours the STOP it mentions (opted-out students
 * are left out of broadcasts).
 *
 * Styled to inherit the form's own text colour, so it reads on both the light
 * hero cards and the dark footer form without per-form CSS.
 */
export default function ConsentNote({ style }) {
  return (
    <p
      style={{
        fontSize: '11px',
        lineHeight: 1.45,
        opacity: 0.72,
        margin: '8px 0 0',
        textAlign: 'center',
        ...style,
      }}
    >
      By submitting, you agree that BlueTick Academy may contact you about your enquiry by call,
      SMS and WhatsApp. Reply STOP on WhatsApp at any time to opt out.
    </p>
  );
}
