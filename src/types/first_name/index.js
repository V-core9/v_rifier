const v_base = require("../../v_base");

class v_first_name extends v_base {
  constructor(val) {
    super(val);

    this.options = {
      length: {
        min: 0,
        max: 32,
      },
      default: "",
      format: /[_`!@#$%^&*()+=\[\]{};':"\\|,<>\/?~]/
    };

    this.accepts = (value) => {
      const lengthOf = value.length;
      return (!this.options.format.test(value) && (this.options.length.min <= lengthOf) && (lengthOf <= this.options.length.max));
    };
  }
}

const first_name = new v_first_name();

module.exports = first_name;
