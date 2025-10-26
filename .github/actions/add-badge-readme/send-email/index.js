const nodemailer = require("nodemailer");

(async () => {
  try {
    const {
      INPUT_EMAIL,
      INPUT_PASSWORD,
      INPUT_WORKFLOW_NAME,
      INPUT_LINTER_RESULT,
      INPUT_CYPRESS_RESULT,
      INPUT_BADGE_RESULT,
      INPUT_DEPLOY_RESULT,
    } = process.env;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: INPUT_EMAIL,      
        pass: INPUT_PASSWORD,  
      },
    });

    const subject = `Resultat del workflow ${INPUT_WORKFLOW_NAME}`;

    const body = `
S'ha realitzat un push en la branca main que ha provocat l'execució del workflow ${INPUT_WORKFLOW_NAME} amb els següents resultats:

- Linter_job: ${INPUT_LINTER_RESULT}
- Cypress_job: ${INPUT_CYPRESS_RESULT}
- Add_badge_job: ${INPUT_BADGE_RESULT}
- Deploy_job: ${INPUT_DEPLOY_RESULT}
`;

    await transporter.sendMail({
      from: INPUT_EMAIL,
      to: INPUT_EMAIL,
      subject,
      text: body,
    });

    console.log("Correu enviat correctament");
  } catch (err) {
    console.error("Error enviant el correu:", err);
    process.exit(1);
  }
})();