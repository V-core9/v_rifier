const v_rify = require('../core/v_rify');
const { isEmpty } = require('v_is_empty_value');

const email_schema = {
  format: /^[A-Za-z0-9][A-Za-z0-9._]+[A-Za-z0-9_]+@+[A-Za-z0-9][^\s@]+\.[^\s@]+$/,
  msg: {
    success: "✅ Success\n📫 Email Verified Successfully.",
    error: {
      format: "📑 Email verification failed."
    }
  },
  verify: async (email) => {
    if (await isEmpty(email)) return [{ "confirm": undefined, "input_value": undefined, "msg": "Missing input.", "type": "error" }];

    if (email.split('..').length === 1 && email.split('@').length === 2 && isNaN(email.split('@')[0])) {
      return await v_rify(email_schema, email);
    } 

    return [{ "confirm": undefined, "input_value": email, "msg": email_schema.msg.error.format, "suggest": "Try removing special characters.", "type": "error" }];
  }
};

module.exports = email_schema;
