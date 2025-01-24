const { Schema, model } = require('mongoose')

const { KAZAN_EXPLORE_RESULTS_MODEL_NAME } = require('../const')

const schema = new Schema({
    userId: { type: String },
    items: [
        {
          quizId: { type: String },
          result: { type: Number }
        }
    ]
})

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
})

schema.virtual('id').get(function () {
    return this._id.toHexString()
})

exports.ResultsModel = model(KAZAN_EXPLORE_RESULTS_MODEL_NAME, schema)