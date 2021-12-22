const v_rify = require('../core/v_rify');

const text_schema ={
  min: 0,
  max: 1048576,
  format: /[^]*/,
  msg: {
    success: "✅ Success\n🤪 Text Verified Successfully.",
    error: {
      min: "🤯 Text is too short.",
      max: "💥 Text exceeded allowed maximum.",
      format: "🙋‍♂️ Text can only have letters, numbers, underscore and dot.",
    }
  },
  verify: async (Text) => {
    return await v_rify(text_schema, Text);
  }
};

module.exports = text_schema;