var ZSchema = require('z-schema');

function validate(data, schema) {
  var validator = new ZSchema();
  var isValid = validator.validate(data, schema);
  if (isValid) {
    console.log("Data is valid!");
  } else {
    console.log(validator.getLastErrors());
  }
}

/*
var example1 = {
  name: "Jonas",
  age: 35,
  email: "fjoi@gmail.com"
}

var schema1 = {
  type: "object",
  properties: {
    name: {type: "string"},
    age: {type: "integer"},
    email: {
      type: "string",
      pattern: ".*@.*"
    }
  },
  required: ["name", "age"],
  additionalProperties: false
}

validate(example1, schema1);
*/

/*
var example2 = {
  name: "Jonas",
  age: 35,
  address: {
    street: "Nymansbacksv. 96A",
    country: "FI"
  }
}

var schema2 = {
  definitions: {
    address: {
      type: "object",
      properties: {
        street: {type: "string"},
        country: {enum: ["FI", "SV"]}
      },
      additionalProperties: false
    }
  },
  type: "object",
  properties: {
    name: {type: "string"},
    age: {type: "integer"},
    address: {$ref: "#/definitions/address"}
  }
}

validate(example2, schema2);
*/



var example3_1 = {
  eventType: "FORM_CREATED",
  entity: {
    id: 991123,
    name: "My Web Form"
  },
  timestamp: 1231242
}

var example3_2 = {
  eventType: "QUESTION_UPDATED",
  entity: {
    id: 212343,
    text: "What is your name?",
    answerType: "FREE_TEXT"
  },
  timestamp: 1242341
}


var schema = {
  definitions: {
    form: {
      type: "object",
      properties: {
        id: {type: "number"},
        name: {type: "string"}
      },
      required: ["id", "name"]
    },

    question: {
      type: "object",
      properties: {
        id: {type: "integer"},
        text: {type: "string"},
        answerType: {enum: ["FREE_TEXT", "NUMBER", "DATE"]}
      },
      required: ["id", "text", "answerType"]
    },

    formCreated: {
      type: "object",
      properties: {
        eventType: {enum: ["FORM_CREATED"]},
        entity: {$ref: "#/definitions/form"},
        timestamp: {type: "integer"}
      },
      required: ["eventType", "entity", "timestamp"]
    },

    questionUpdated: {
      type: "object",
      properties: {
        eventType: {enum: ["QUESTION_UPDATED"]},
        entity: {$ref: "#/definitions/question"},
        timestamp: {type: "integer"}
      },
      required: ["eventType", "entity", "timestamp"]
    }
  },

  oneOf: [
    {$ref: "#/definitions/formCreated"},
    {$ref: "#/definitions/questionUpdated"}
  ]
}

validate(example3_1, schema);
